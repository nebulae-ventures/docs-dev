# Introduction à Hardhat

Dans ce tutoriel, nous allons introduire **[Hardhat](https://hardhat.org/)** et passer en revue ses principales
fonctionnalités. Elles feront l'objet d'un article plus détaillé dans le futur.

## Hardhat ?

Crée par [Nomic Labs](https://nomiclabs.io/), Hardhat est un environment de développement pour les **dApp** tournant sur
une **[EVM](https://ethereum.org/fr/developers/docs/evm/#top)**. Il vous aide à diverses étapes de votre travail telles
que :

- compilation du code Solidity
- déploiement
- automatisation de tâches récurrentes
- tests
- débogage de votre smart contract

De plus Hardhat amène sa propre version modifiée de l'EVM que vous pouvez utiliser lors de vos phases de tests. Cette
EVM modifiée rajoute des aides utiles vous permettant de tester plus efficacement votre code.

## Alternatives

Hardhat n'est pas le seul outil dans sa catégorie, vous connaissez
peut-être **[Truffle](https://trufflesuite.com/docs/truffle/)**
qui possède des fonctionnalités assez semblables.

**[Brownie](https://eth-brownie.readthedocs.io/en/stable/)** est un outil écrit en python qui possède des capacités
similaires à Truffle. Si vous êtes plus à l'aise avec python alors cet outil est probablement un bon choix pour vous.

Il y a aussi **[Foundry](https://mirror.xyz/sha.eth/6Mn3HjrqKLhHzu2balLPv4SqE5a-oEESl4ycpRkWFsc)**
qui est un nouveau venu (que je n'ai personnellement pas eu le temps de tester, je pense couvrir ça dans un prochain
tutoriel). Il promet une plus
grande [rapidité d'exécution des tests](https://www.paradigm.xyz/2021/12/introducing-the-foundry-ethereum-development-toolbox/#You_should_be_writing_your_tests_in_Solidity)
. Ceci est surement dû au fait que contrairement à hardhat ou truffle, qui sont écrit à l'aide de Javascript, Foundry
utilise Rust.

Un dernier outil concurrent à Hardhat : **[dApp.tools](https://dapp.tools/)**. 

On fera peut-être une série d'articles allant plus en profondeur sur ces outils dans le futur.

[//]: # (Others ?)

## Forces

Globalement, Hardhat est plus facile d'utilisation et la possibilité de faire tourner ses tests en utilisant une copie
de l'état d'une blockchain, à un certain block, est très puissante. Il est aussi plus rapide lors de l'exécution
des tests que Truffle, cela peut vous faire gagner pas mal de temps. 

> À noter que Foundry met en avant le fait qu'il soit
plus rapide qu'Hardhat sur ce point.

Le système de plugins est très intéressant et permet d'étendre les fonctionnalités d'Hardhat. Par exemple, il existe un
plugin qui calcul le cout de chaque transaction effectué lors de vos tests. Un autre vous permettra d'automatiquement
vérifier vos smart contracts sur [etherscan](https://etherscan.io/) ou
[snowtrace](https://snowtrace.io/). Je ne peux que vous recommender de jeter un coup d'œil
à [cette page](https://hardhat.org/plugins/). Je

À mon avis Hardhat est l'outil, à ce jour, le plus complet et performant vous permettant de développer et tester votre
code Solidity.

[//]: # (Need to improve this section, more strenghts, facts and less subjective pov)

## Hardhat Network

Une des forces d'Hardhat est qu'il soit livré avec **Hardhat Network**, une version modifiée de l'EVM. Cette
version incorpore des changements destinés à faciliter la vie des développeurs web3, en rajoutant par exemple des
messages d'erreurs plus clairs lors de problèmes à l'exécution de vos transactions. Rajoutant des stack traces
montrant précisément où celle-ci a rencontré un problème.

Voici un exemple de stack trace venant de la -au passage très
bonne- [documentation](https://hardhat.org/hardhat-network/) d'Hardhat.

```shell
Error: Transaction reverted: function selector was not recognized and there's no fallback function
  at ERC721Mock.<unrecognized-selector> (contracts/mocks/ERC721Mock.sol:9)
  at ERC721Mock._checkOnERC721Received (contracts/token/ERC721/ERC721.sol:334)
  at ERC721Mock._safeTransferFrom (contracts/token/ERC721/ERC721.sol:196)
  at ERC721Mock.safeTransferFrom (contracts/token/ERC721/ERC721.sol:179)
  at ERC721Mock.safeTransferFrom (contracts/token/ERC721/ERC721.sol:162)
  at TruffleContract.safeTransferFrom (node_modules/@nomiclabs/truffle-contract/lib/execute.js:157:24)
  at Context.<anonymous> (test/token/ERC721/ERC721.behavior.js:321:26)
```

On voit ici que la stack trace montre clairement quel contract et à quelle ligne l'erreur est survenu. On peut aussi voir
quel test l'a déclenché. 

Un autre rajout à mon sens essentiel est celui du `console.log` dans le code Solidity. Vous donnant la possibilité
d'avoir un aperçu de ce qui se passe dans votre code, vous aidant ainsi fortement dans votre processus de développement
et de test.

Il est aussi possible de démarrer **Hardhat Network Node** via votre terminal et de l'utiliser comme client RPC pour des
applications telles que Metamask, un bot que vous développez ou n'importe quelle dApp (bien sûr le réseau en découlant
sera un réseau destiné aux tests). Très utile pour des tests d'intégration en environnement contrôlé.

Il est intéressant de noter que par défaut ce réseau va miner un nouveau block à chaque transaction que vous allez
effectuer dans vos tests. Ceci est [entièrement configurable](https://hardhat.org/hardhat-network/explanation/mining-modes.html).

## Hardhat Runner

C'est le CLI qui vous permettra d'intéragir avec Hardhat. Hardhat est orienté autours de tasks, chaque commande que vous
lancerez sera en fait définie par une task.

Voici un example de commande:

`npx hardhat test`

Il n'y a pas de piège et cette commande va juste lancer l'exécution de tous les tests se trouvant dans votre dossier test.

Voici une liste des différentes tasks par 'default' :

```shell
$ npx hardhat
Hardhat version 2.0.8

Usage: hardhat [GLOBAL OPTIONS] <TASK> [TASK OPTIONS]

GLOBAL OPTIONS:

  --config              A Hardhat config file.
  --emoji               Use emoji in messages.
  --help                Shows this message, or a task's help if its name is provided
  --max-memory          The maximum amount of memory that Hardhat can use.
  --network             The network to connect to.
  --show-stack-traces   Show stack traces.
  --tsconfig            A TypeScript config file.
  --verbose             Enables Hardhat verbose logging
  --version             Shows hardhat's version.


AVAILABLE TASKS:

  accounts      Prints the list of accounts
  check         Check whatever you need
  clean         Clears the cache and deletes all artifacts
  compile       Compiles the entire project, building all artifacts
  console       Opens a hardhat console
  flatten       Flattens and prints contracts and their dependencies
  help          Prints this message
  node          Starts a JSON-RPC server on top of Hardhat Network
  run           Runs a user-defined script after compiling the project
  test          Runs mocha tests

To get help for a specific task run: npx hardhat help [task]
```

# Tasks / Scripts

Dans la section précédente nous avons vu qu'avec le CLI on peut lancer l'exécution de tasks. Celles-ci peuvent être
celles par défaut d'Hardhat telles que `test` , `compile` mais aussi des tasks que vous aurez défini vous-même.

Ces tasks personnalisés sont à définir dans le dossier `/scripts` en Typescript (je vous encourage vraiment à prendre le
temps de setup Hardhat avec Typescript et de ne pas utiliser Javascript). Elles pourront
ensuite être execute via la commande
`npx hardhat run nomdelacommande`. Cela peut être très utile pour effectuer des tâches récurrentes. Par exemple dans un
de mes projets j'utilise ce workflow :

- création d'un réseau hardhat network dans un terminal, basé sur l'état de la Cchain d'Avalanche à un block précis.
- exécution d'une task qui va envoyer des transactions à un smart contract déjà déployé sur la CChain,
  permettant ainsi de créer un environnement de test contrôlé
- test de mon application, se connectant au réseau hardhat

Voici un petit exemple d'une tache que j'ai écrite, le fichier se nomme `check_price.ts`. Cela va simplement appeler la 
fonction `getReserves` de la paire Wavax-USDT.e de Trader Joe et calculer le prix actuel, en USDT.e, d'un WAVAX.

```typescript
import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import { BigNumber, Wallet } from "ethers";

const main = async (): Promise<any> => {

    const tjWavaxUsdtePair = await ethers.getContractAt("IJoePair", "0xed8cbd9f0ce3c6986b22002f03c6475ceb7a6256");

    let reserves = await tjWavaxUsdtePair.getReserves();

    let wavaxDecimal = reserves[0].div(BigNumber.from("1000000000000000000")).toNumber()
    let usdteDecimal = reserves[1].div(BigNumber.from("1000000")).toNumber()
    let timestamp = reserves[2]

    console.log("Price in TJ : " + usdteDecimal / wavaxDecimal);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
```

Je lance l'exécution de cette task via `npx hardhat run check_price`

[//]: # (Need to make above points more clearer)

## Plugins

Comme mentionné plus haut, une des forces d'Hardhat est sa modularité et extensibilité.
Il existe des plugins permettant de [vérifier facilement vos smart contracts sur etherscan](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html)
Un autre vous permet de voir le [code coverage](https://www.npmjs.com/package/solidity-coverage) actuel de votre code Solidity.

## Sources et liens

- https://hardhat.org/plugins/nomiclabs-hardhat-web3.html
- https://moralis.io/hardhat-explained-what-is-hardhat/
- https://dev.to/yakult/a-concise-hardhat-tutorial-part-1-7eo