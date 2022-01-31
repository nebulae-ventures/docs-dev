---
sidebar_position: 6
---

# Introduction

Dans ce tutorial nous allons introduire **[Hardhat](https://hardhat.org/)** et passer en revue ses principales
fonctionnalités. Elles feront toutes l'objet d'un article plus détaillé (avec des bouts de code) dans le futur.

# Hardhat ?

[//]: # (Par qui ?)
Hardhat est un environment de développement pour les **dApp** tournant sur une **[EVM](https://ethereum.org/fr/developers/docs/evm/#top)**. 
Il vous aide à diverses étapes de votre travail telles que :
- compilation du code Solidity
- déploiement (et son automatisation)
- tests
- le débogage de votre smart contract

De plus Hardhat amène sa propre version modifiée de l'EVM que vous pouvez utiliser lors de vos phases de tests. Cette
EVM modifiée rajoute des aides utiles vous permettant de tester plus efficacement votre code.

[//]: # (Below are the main talking points I wanna cover in this tuto)

# Utilité

[//]: # ("Concurrent")
[//]: # (Forces)
## Concurrents

Hardhat n'est pas le seul outil dans sa catégorie, vous connaissez peut-être **[Truffle](https://trufflesuite.com/docs/truffle/)**
qui possède des fonctionnalités assez semblables.

**[Brownie](https://eth-brownie.readthedocs.io/en/stable/)** est un outil écrit en python qui possède des capacités 
similaires à Truffle.

Il y a aussi **[Foundry](https://mirror.xyz/sha.eth/6Mn3HjrqKLhHzu2balLPv4SqE5a-oEESl4ycpRkWFsc)**
qui est un nouveau venu (que je n'ai personnellement pas eu le temps de tester, je pense couvrir ça dans un 
prochain tutoriel). Il promet une plus grande [rapidité d'exécution des tests](https://www.paradigm.xyz/2021/12/introducing-the-foundry-ethereum-development-toolbox/#You_should_be_writing_your_tests_in_Solidity).
Ceci est surement dû au fait que contrairement à hardhat ou truffle, qui sont écrit à l'aide de Javascript, Foundry
utilise Rust.

## Forces

Globalement, Hardhat est plus facile d'utilisation et la possibilité de faire tourner ses tests en utilisant une copie
de l'état d'une blockchain, à un certain block, est très puissant.
Hardhat est aussi plus rapide lors de l'exécution des tests que Truffle, cela peut vous faire gagner pas mal de temps.
À noter que Foundry met en avant le fait qu'il est plus rapide qu'Hardhat sur ce point.

Le système de plugins est très intéressant et permet d'étendre les fonctionnalités d'Hardhat.
Par exemple, il existe un plugin qui calcul le cout de chaque transaction effectué lors de vos tests.
Un autre vous permettra d'automatiquement vérifier vos smart contracts sur [etherscan](https://etherscan.io/) ou
[snowtrace](https://snowtrace.io/). Je ne peux que vous recommender de jeter un coup d'œil à [cette page](https://hardhat.org/plugins/)


# Hardhat Network

Une des forces d'Hardhat est qu'il est livré avec **Hardhat Network**, une version légèrement modifiée de l'EVM.
Cette version incorpore des changements destinés à faciliter la vie des développeurs web3.

Lorsque vous lancez vos tests/scripts/tâches via Hardhat sans préciser quel réseau utiliser, il va par défaut démarrer
un **Hardhat Network Node** en tant que process le temps d'exécuter ce que vous lui avez demandé de faire.

Il est aussi possible de démarrer **Hardhat Network Node** via votre terminal et de l'utiliser comme client RPC pour des 
applications telles que Metamask, un bot que vous développez ou n'importe quelle dApp (bien sûr le réseau en découlant sera 
un réseau destiné aux tests).


# Hardhat Runner

C'est le CLI qui vous permettra d'interagir avec Hardat. Hardhat est orienté autours de tasks, chaque commande que vous 
lancerez sera en fait une task.

Voici un example de commande:

`npx hardhat test`

Et voici une liste des différentes tasks par 'default' : 

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

Dans la section précédente nous avons vu qu'avec le CLI on peut lancer l'exécution de tasks. Celles-ci peuvent être celles par défaut d'hardhat
telles que `test` , `compile` mais aussi des tasks que vous aurez défini vous-même.

Ces tasks personalisés sont à définir dans le dossier /scripts en Typescript (je vous encourage vraiment à prendre le temps de setup Hardhat
avec Typescript et de ne pas utiliser Javascript, bref c'est un autre débat). Elles pourront ensuit etre execute via la commande
`npx hardhat run nomdelacommande`.  Cela peut etre tres utile pour effectuer des taches recurrente. Par exemple dans un de mes projets j;utilise 
ce workflow :

- creation d'un reseau hardhat network, base sur l'etat de la cchain d'avalanche a un block precis.
- execution d'une task qui va envoyer des transactions a un smart contract specifique deja dpeloye sur la CChain, permettant ainsi de creer un
environnement de test controle
- test de mon application, se connectant au reseau hardhat

[//]: # (Need to make above points more clearer)

# Plugins

# Sources et liens

- https://hardhat.org/plugins/nomiclabs-hardhat-web3.html
- https://moralis.io/hardhat-explained-what-is-hardhat/
- https://dev.to/yakult/a-concise-hardhat-tutorial-part-1-7eo
