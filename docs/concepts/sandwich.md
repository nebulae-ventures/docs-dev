# Sandwich

## Qu'est-ce qu'un "Sandwich" ?

Un sandwich est le fait d'entourer une transaction par 2 autres.

Mais à quoi cela pourrait-il servir me direz vous, cela permet de modifier l'état de la blockchain avant la transaction et de tirer parti de cette modification inatendue pour l'émetteur de cette transaction.

## Exemple

Lorsque quelqu'un achète beaucoup d'un token sur un DEX il impacte le prix de celui ci sur ce DEX, cela peut potentiellement générer un arbitrage entre le nouveau prix de ce DEX après la transaction et le prix sur d'autres plateformes. Cependant il y a encore plus efficace : faire bouger le prix avant que la personne achète pour qu'il achète à un prix plus élevé puis dump après sa transaction.

![Sandwich](/img/concepts/sandwich.png)
*On peut ici voir l'attaquant acheter des tokens pour 3.66 puis la transaction d'achat d'un tiers et enfin la revente pour 0.2 de profit*

## Comment c'est possible ?

Mais comment c'est possible de faire passer une transaction avant et après dans le bloc me direz vous ?  
Déjà il faut être au courant de la transaction que l'on veut sandwich et donc observer la [*mempool*](/glossaire) et calculer le montant d'achat/vente le plus optimal.
Après il faut placer ses transactions avant et après celle ciblée : de base les transactions dans un blocs sont sensées être triées par gasPrice, il suffit donc de mettre un prix du gas un poil plus cher pour la 1ère transaction puis un poil moins cher pour la 2e et ainsi "sandwicher" la transaction voulue.  

En pratique c'est un peu plus compliqué que cela car celui qui produit le bloc (le mineur sur ethereum ou le node validateur sur avalanche) peut mettre les transactions dans l'ordre qu'ils veulent ils peuvent donc s'associer avec des personnes possédant des bots calculant les meilleurs sandwichs en temps réel et ainsi se partager les récompenses.

## Comment s'en prémunir ?

Pour éviter de se "faire sandwich" il suffit de baisser le slippage, de ce fait si un bot malveillant essaye de faire un sandwich autour de votre transaction celle-ci va simplement échouer et il n'en tirera aucun bénéfices.

![Slippage](/img/concepts/slippage.png)  
*Ici le slippage est mis à 0.1% de ce fait on accepte un changement de prix d'au plus 0.1%*
