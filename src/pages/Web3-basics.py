from web3 import Web3

#Url du rpc (comme sur MM)
rpc = "https://api.avax.network/ext/bc/C/rpc"
#Initialisation de Web3 avec ce rpc
w3 = Web3(Web3.HTTPProvider(rpc))

#On définit une adresse et on la passe à travers la fonction pour la rendre compatible avec le format utilisé par web3
monAddresse = w3.toChecksumAddress("0xC41BA3190D043e2Ef434AC23287D9Ba68C58106a")
#Et on regarde la balance d'AVAX à cette adresse
balance = w3.eth.get_balance(monAddresse)
#On l'affiche
print("Balance :",balance)
#On notera que la balance renvoyée comprend les 18 décimales de précision de l'AVAX