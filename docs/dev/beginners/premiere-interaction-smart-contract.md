import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Première interaction avec un smart contract

**Nous vous conseillons de lire le glossaire disponible sur [cette page](/glossaire) pour une meilleure compréhension des termes techniques.**

Nous allons maintenant voir comment interagir avec des smart contracts et effectuer de vraies transactions !

<!-- D'abord qu'est-ce qu'un SC (Smart Contract) ?
**TODO** -->

## Affichez votre balance d'AVAX

<details>
    <summary>Afficher le code</summary>
      <div>
      <Tabs groupId="language">
  <TabItem value="python" label="Python">

On peut maintenant passer aux choses sérieuses :
Pour commencer on va avoir besoin d'importer la librairie Web3 :

```python
from web3 import Web3
```

Puis on l'initialise avec le rpc de l'api officielle :

```python
rpc = "https://api.avax.network/ext/bc/C/rpc"
w3 = Web3(Web3.HTTPProvider(rpc))
```

Maintenant essayons quelque chose de simple comme regarder la balance (nombre d'AVAX) d'une adresse :

```python
monAddresse = w3.toChecksumAddress("0xC41BA3190D043e2Ef434AC23287D9Ba68C58106a")
balance = w3.eth.get_balance(monAddresse)
print("Balance :",balance)
```

Résultat : `Balance : 355259566500540782934`

On notera que la balance renvoyée comprend les 18 décimales de précision de l'AVAX

 </TabItem>
  <TabItem value="js" label="Javascript">

Dans votre fichier _index.js_, ajoutez cette ligne pour importer la libraire web3 :

```javascript
const ethers = require("ethers");
```

Connectez-vous au réseau Avalanche :

```javascript
const provider = new ethers.providers.JsonRpcProvider(
  "https://api.avax-test.network/ext/bc/C/rpc"
);
```

Créez une fonction **main** qui contiendra votre code :

```javascript
const main = async () => {
  const balance = await provider.getBalance(
    "0xC41BA3190D043e2Ef434AC23287D9Ba68C58106a"
  );
  console.log(balance);
};
```

Vous remarquerez que la balance n'est pas dans un format humainement lisible, formatons le en changeant cette ligne :

```javascript
console.log("Balance:", ethers.utils.formatEther(balance) + " AVAX");
```

Résultat : `Balance: 91.119468275 AVAX`

</TabItem>
</Tabs>
</div>
</details>

## Echanger des AVAX contre des USDT.e

Nous allons effectuer un swap sur un DEX (ici TraderJoe)
Pour cela nous avons besoin de reprendre notre base de code vu précédemment pour définir notre instance web3

<details>
    <summary>Afficher le code</summary>
      <div>
        <Tabs groupId="language">
            <TabItem value="python" label="Python">

```python
from web3 import Web3

rpc = "https://api.avax.network/ext/bc/C/rpc"
w3 = Web3(Web3.HTTPProvider(rpc))
```

Puis nous avons besoin de définir un objet représentant le contrat avec lequel on veut interragir (ici le routeur de TraderJoe) et pour cela nous avons besoin de son ABI [que nous pouvons trouver ici](https://snowtrace.io/address/0x60aE616a2155Ee3d9A68541Ba4544862310933d4#code)

![Copier l'ABI](/img/dev/beginners/ABIRouter.png)

Copiez le ensuite dans un fichier séparé

![Copier l'ABI 2](/img/dev/beginners/ExampleABIRouter.png)

Une fois cela fait on peut définir notre contrat

```python
#Librairie pour lire le fichier au format json
import json

#On charge le fichier de l'ABI et on le passe dans une variable
with open("router.json") as f :
    routerABI = json.load(f)

routerContract = w3.eth.contract(address="0x60aE616a2155Ee3d9A68541Ba4544862310933d4", abi=routerABI)
```

Et voilà notre 1er contrat défini ! Voyons maintenant comment interragir avec !
Il existe 2 types de fonctions dans un SC :

- les **view functions** qui ne changent pas l'état de la Blockchain et ne nécessitent donc pas de transaction : ce sont des fonctions qui renvoient juste une ou plusieurs valeurs
- les **fonctions classiques** qui modifient l'état de l'état et nécessitent donc une transaction et de payer des frais

```python
#Exemple d'appel a une view function
result = routerContract.functions.factory().call()
print(result)
```

![Exemple view function](/img/dev/beginners/viewFunction.png)

Et voici ce que renvoie cette fonction par exemple (l'adresse du contrat factory de TraderJoe ici)

Sauf que nous voulons effectuer un swap et donc exécuter une transaction, par exemple nous allons swap 1 avax en USDT.e  
Pour ça nous allons appeler la fonction swapExactAVAXForTokens

```python
#Vous noterez que le mot clef derrière le nom de la fonction
#Pour exécuter une transaction est différent : buildTransaction
tx = routerContract.functions.swapExactAVAXForTokens(
    minimumTokensOut,  #Nombre de tokens que l'on veut au minimum (si on reçoit moins la tx revert)
    path,              #Chemin emprunté pour faire le swap (ici seulement WAVAX->USDT.e)
    account,           #Quelle adresse doit recevoir les tokens
    timestamp          #Timestamp jusqu'auquel notre tx est valide
    ).buildTransaction({
        "nonce" : w3.eth.get_transaction_count(account), #Numéro de la tx pour ce compte
        "from" : account,
        "value":1*10**18 #Nombre d'AVAX à swap (ne pas oublier les décimales et donc multiplier par 10**18)
    })
```

Voilà l'architecture de notre fonction pour faire un simple swap sauf qu'il nous faut maintenant définir les variables à l'intérieur

```python
minimumTokensOut = 0 #Equivalent de 100% slippage sur l'UI du DEX
path = ["0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", "0xc7198437980c041c805A1EDcbA50c1Ce5db95118"] #WAVAX USDT.e
account = "0xa3cF9F41Abd63A8391D9167a70Fde99013Dc7FE6" #Mon adresse
timestamp = 1704063600 #1er janvier 2024
```

Il nous faut maintenant signer la transaction pour prouver que c'est bien nous qui en sommes l'origine  
J'ai ici mis ma clef privée dans un autre fichier nommé key.txt

```python
with open("key.txt") as f :
    privateKey = f.read()
```

On peut maintenant signer la transaction et l'envoyer au réseau !

```python
stx = w3.eth.account.sign_transaction(tx, private_key=privateKey)
txh = w3.eth.send_raw_transaction(stx.rawTransaction).hex()
print("Tx envoyé au réseau : https://snowtrace.io/tx/{}".format(txh))
```

Plus qu'à tester notre code et ...

![Exemple simple swap](/img/dev/beginners/ExampleTx.png)

Et voilà notre tx est passée [_(vous pouvez la voir ici)_](https://snowtrace.io/tx/0xada54d756583576cedf77ad7faa8dea936905dd01ce6f2e5a27bf41bb59a5c69)

N'hésitez pas à essayer chez vous sur Fuji [(en changeant le rpc)](/dev/ressources/rpc).

 </TabItem>
  <TabItem value="js" label="Javascript">

```javascript
const ethers = require("ethers");

const PRIVATE_KEY = "XXX";
const provider = new ethers.providers.JsonRpcProvider(
  "https://api.avax.network/ext/bc/C/rpc"
);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
```

**Vous pouvez également mettre votre clef privée dans un fichier externe (que l'on nommera key.txt) :**

Installez une libraire avec `npm install fs` qui vous permettra de lire et écrire des fichiers

Ajoutez la librairire dans votre programme (en haut de votre programme) : `const fs = require("fs")`

Puis changez la ligne suivante : `const PRIVATE_KEY = fs.readFileSync('./key.txt', "utf-8");`

Puis nous avons besoin de définir un objet représentant le contrat avec lequel on veut interragir (ici le routeur de TraderJoe) et pour cela nous avons besoin de son ABI [que nous pouvons trouver ici](https://snowtrace.io/address/0x60aE616a2155Ee3d9A68541Ba4544862310933d4#code)

![Copier l'ABI](/img/dev/beginners/ABIRouter.png)

Copiez le ensuite dans un fichier séparé nommé _router.json_

![Copier l'ABI 2](/img/dev/beginners/ExampleABIRouter.png)

Une fois cela fait on peut définir notre contrat

```javascript
// rajoutez cette ligne pour récupérer le contenu de l'ABI
const routerABI = require("./router.json");

// On instencie le router
const routerAddress = "0x60aE616a2155Ee3d9A68541Ba4544862310933d4"; // router de Traderjoe
const router = new ethers.Contract(routerAddress, routerABI, wallet);
```

Et voilà notre 1er contrat défini ! Voyons maintenant comment interragir avec !
Il existe 2 types de fonctions dans un SC :

- les **view functions** qui ne changent pas l'état de la Blockchain et ne nécessitent donc pas de transaction : ce sont des fonctions qui renvoient juste une ou plusieurs valeurs
- les **fonctions classiques** qui modifient l'état de l'état et nécessitent donc une transaction et de payer des frais

```javascript
// Exemple d'appel a une view function
const main = async () => {
  const factoryAddress = await router.factory();
  console.log(factoryAddress);

  // la suite du code sera ici
};

main();
```

Executez votre programme avec : `node index.js`

![Exemple view function](/img/dev/beginners/viewFunctionJS.png)

Et voici ce que renvoie cette fonction par exemple (l'adresse du contrat factory de TraderJoe ici)

Sauf que nous voulons effectuer un swap et donc exécuter une transaction, par exemple nous allons swap 1 avax en USDT.e  
Pour ça nous allons appeler la fonction swapExactAVAXForTokens qui prend en paramètre plus arguments :

- amountOutMin : nombre de tokens que l'on veut au minimum (si on reçoit moins la tx revert)
- path : chemin emprunté pour faire le swap (ici seulement WAVAX->USDT.e)
- to : adresse qui reçoit les tokens
- deadline : date (timestamp)jusqu'à laquelle notre transaction reste valide

```javascript
// ...
const amountIn = 0.01; // nombre d'AVAX que l'on veut échanger
const amountOutMin = 0; // équivalent à 100% de slippage sur l'UI du DEX
const path = [
  "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
  "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
]; // WAVAX, USDT.e
const to = wallet.address;
const deadline = Date.now() + 60 * 60 * 1000; // 1 heure

const gasPrice = await provider.getGasPrice();
// formatage de notre variable en Big Number
const value = ethers.utils.parseUnits(amountIn.toString(), "ether");

// appel de la fonction swapExactAVAXForTokens avec nos variables
const tx = await router.swapExactAVAXForTokens(
  amountOutMin,
  path,
  to,
  deadline,
  { value: value, gasLimit: 210000, gasPrice: gasPrice }
);

console.log("transaction sent...");
const receipt = await tx.wait();
console.log(receipt);
console.log(receipt.transactionHash);
```

On peut maintenant envoyer la transaction au réseau !

```bash
node index.js
```

![Exemple simple swap](/img/dev/beginners/sendTransactionJS.png)

</TabItem>
</Tabs>
</div>
</details>
