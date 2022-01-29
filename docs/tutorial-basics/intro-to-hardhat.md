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
- le débogage de votre smart contract (rajout du console.log en Solidity !)

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
qui possède des fonctionnalités assez similaires à Hardhat. Il y a aussi **[Foundry](https://mirror.xyz/sha.eth/6Mn3HjrqKLhHzu2balLPv4SqE5a-oEESl4ycpRkWFsc)**
qui est un nouveau venu (que je n'ai personnellement pas eu le temps de tester, mais je pense couvrir ça dans un 
prochain tutoriel).

## Forces

Globalement, Hardhat est plus facile d'utilisation et la possibilité de faire tourner ses tests en utilisant une copie
de l'état d'une blockchain, à un certain block, est très puissant.
Hardhat est aussi plus rapide lors de l'exécution des tests que Truffle, cela peut vous faire gagner pas mal de temps.
À noter que Foundry met en avant le fait qu'il est plus rapide qu'Hardhat sur ce point.

Le système de plugins est très intéressant et permet d'étendre les fonctionnalités d'Hardhat (par exemple il existe un 
plugin qui calcul le cout de chaque transaction effectué lors de vos tests)

[//]: # (Rajouter lien + autre exemple de plugin ?)

# Hardhat Network

# Hardhat Runner

# Tasks / Scripts

# Plugins

# Sources et liens

- https://hardhat.org/plugins/nomiclabs-hardhat-web3.html
- https://moralis.io/hardhat-explained-what-is-hardhat/
- https://dev.to/yakult/a-concise-hardhat-tutorial-part-1-7eo