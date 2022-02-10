# Première interaction avec un smart contract

Nous allons maintenant voir comment interagir avec des smart contracts et effectuer de vraies transactions !

D'abord qu'est-ce qu'un SC (Smart Contract) ?
TODO

Nous allons effectuer un swap sur un DEX (ici TraderJoe)
Pour cela nous avons besoin de reprendre notre base de code vu précédemment pour définir notre instance web3

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

Et voilà notre tx est passée [*(vous pouvez la voir ici)*](https://snowtrace.io/tx/0xada54d756583576cedf77ad7faa8dea936905dd01ce6f2e5a27bf41bb59a5c69)

N'hésitez pas à essayer chez vous sur Fuji [(en changeant le rpc)](/dev/ressources/rpc).