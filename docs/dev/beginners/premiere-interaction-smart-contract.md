import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Première interraction avec un smart contract

## Affichez votre balance d'AVAX

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
Résultat : ```Balance : 355259566500540782934```

On notera que la balance renvoyée comprend les 18 décimales de précision de l'AVAX

<!-- [Lien vers le script](./Web3-basics.py) -->

  </TabItem>
  <TabItem value="js" label="Javascript">

Dans votre fichier _index.js_, ajoutez cette ligne pour importer la libraire web3 : 
```javascript
const ethers = require("ethers")
```
[documentation officielle d'ethers](https://docs.ethers.io/)

Connectez-vous au réseau Avalanche :
```javascript
const provider = new ethers.providers.JsonRpcProvider('https://api.avax-test.network/ext/bc/C/rpc');
```

Créez une fonction **main** qui contiendra votre code :
```javascript
const main = async () => {
    const balance = await provider.getBalance('0xC41BA3190D043e2Ef434AC23287D9Ba68C58106a');
    console.log(balance);
}
```
Vous remarquerez que la balance n'est pas dans un format humainement lisible, formatons le en changeant cette ligne :
```javascript
console.log("Balance:", ethers.utils.formatEther(balance) + " AVAX");
```
Résultat : ```Balance: 91.119468275 AVAX```
  </TabItem>
</Tabs>
