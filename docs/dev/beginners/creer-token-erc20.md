import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Créez votre token ERC20 et ajoutez de la liquidité

**Nous vous conseillons de lire le glossaire disponible sur [cette page](/glossaire) pour une meilleure compréhension des termes techniques.**

Nous vous invitons à créer votre token sur le [testnet Fuji](/dev/ressources/rpc).

## Création du token ERC20

Pour ce premier tutoriel smart contract nous vous invitons à utiliser le génial outil [Wizard](https://docs.openzeppelin.com/contracts/4.x/wizard) d'OpenZepplin.

Vous aurez plusieurs options sur le tableau de gauche : le nom du token, son symbole et la quantité initale voulue.

Ensuite vous pourrez choisir plusieurs fonctionnalités à rajouter sur votre token :

- _Mintable_, recréer des tokens après sa création
- _Burnable_, bruler (burn) des tokens
- _Pausable_, désactiver toutes actions sur le token (ex: ne peux pas être transféré)

Une fois vos options choisies, cliquez sur **Open in Remix**.

:::info
Remix IDE vous permet de développer et déployer vos smart contracts depuis votre nagivateur.
:::

- Compilez votre smart contract et allez dans l'onglet **DEPLOYER**
  ![remix ide](/img/dev/beginners/erc20/remix1.png)

- Choisissez **Injected Web3** (et préparez votre wallet préféré)
- Séléctionnez votre smart contract (le nom de votre contrat)

Vous pouvez enfin déployer votre token ERC20 !

![remix ide](/img/dev/beginners/erc20/remix2.png)

Le contrat sur l'explorer snowtrace :
![explorer](/img/dev/beginners/erc20/explorer.png)

### Bonus : Vérifiez votre contrat sur snowtrace

- Retournez dans votre onglet Remix IDE et aller sur l'onglet **Plugin Manager** qui ressemble à une prise en bas à gauche
- Cherchez et activez le plugin **Flattener**, un nouvel onglet **Flattener** est apparu à gauche
- Suivez les étapes et copiez votre code solidity
- Allez sur la page snowtrace de votre contrat et séléctionnez **Verify and Publish**
  - Choissiez l'option **Solidity (Single file)**
  - Séléctionnez la version solidity de votre contrat (information disponible en haut de votre smart contrat)
  - Séléctionnez la version de votre licence (généralement **MIT**)
  - Passez à l'étape suivante, copiez votre code solidity et appuyez sur le bouton **Verify and Publish**

## Ajout de la liquidité

- Choissiez un DEX (TraderJoe, Pangolin, etc)
- Créez une pool de liquidité en séléctionnant AVAX et votre token (vous devrez l'importer manuellement avec l'adresse du contrat)
- Séléctionnez la quantité pour les deux tokens de votre choix
- Approuvez votre token et cliquez sur **Supply**

![traderjoe](/img/dev/beginners/erc20/traderjoe.png)
