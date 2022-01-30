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
EVM modifiée rajoute :
- des aides au débogage (stack trace)
- console.log

Ainsi que d'autres choses que nous allons explorer tout a long de cette série de tutoriels.

[//]: # (Below are the main talking points I wanna cover in this tuto)

# Utilité

[//]: # ("Concurrent")
[//]: # (Forces)
## Concurrents

Hardhat n'est pas le seul outil dans sa catégorie, vous connaissez peut-être **[Truffle](https://trufflesuite.com/docs/truffle/)**
qui possède des fonctionnalités assez similaires.

**[Brownie](https://eth-brownie.readthedocs.io/en/stable/)** 

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

# Tasks / Scripts

# Plugins

# Sources et liens

- https://hardhat.org/plugins/nomiclabs-hardhat-web3.html
- https://moralis.io/hardhat-explained-what-is-hardhat/
- https://dev.to/yakult/a-concise-hardhat-tutorial-part-1-7eo
