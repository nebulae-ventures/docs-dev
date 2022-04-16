"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[959],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6007:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},u="Glossaire",s={unversionedId:"glossaire",id:"glossaire",title:"Glossaire",description:"Termes techniques",source:"@site/docs/glossaire.md",sourceDirName:".",slug:"/glossaire",permalink:"/glossaire",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Contrats utiles",permalink:"/dev/ressources/contracts"}},c={},p=[{value:"Termes techniques",id:"termes-techniques",level:2},{value:"Jargon",id:"jargon",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossaire"},"Glossaire"),(0,i.kt)("h2",{id:"termes-techniques"},"Termes techniques"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ABI")," : Acronyme de Application Binary Interface, l'ABI est un fichier texte au format json qui d\xe9finit les m\xe9thodes et le structures utilis\xe9es pour interragir avec un Smart Contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EVM")," : Acronyme d' Ethereum Virtual Machine, c'est la machine virtuelle qui d\xe9finit comment marchent les Smart Contracts sur Ethereum (et la C-chain) : qui d\xe9finit les r\xe8gles de calcul pour passer d'un \xe9tat \xe0 un nouvel \xe9tat valide au bloc d'apr\xe8s."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RPC")," : Acronyme de Remote Procedure Call : dans le contexte de cette documentation c'est l'api pour interragir avec un noeud d'une BlockChain"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gas")," : \"Carburant\" d'une transaction, il est proportionnel \xe0 la complexit\xe9 d'une transaction, combin\xe9 au gasPrice il d\xe9finit le prix qu'un utilisateur payera pour effectuer une transaction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LP")," : Raccourci pour Liquidity Provider token : token repr\xe9sentant une part d'une pool de liquidit\xe9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private Key")," : Clef priv\xe9e servant \xe0 signer des transactions et \xe0 prouver que l'on est bien la personne derri\xe8re une adresse (A NE JAMAIS PARTAGER)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Public Key")," : Clef publique souvent encod\xe9e sous le format d'une adresse 0x"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tx")," : Transaction\nethereum-blockchain/what-are-the-different-units-used-in-ethereum/)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Wei"),' : unit\xe9 de mesure "de base" correspondant \xe0 10^-18 AVAX ',(0,i.kt)("a",{parentName:"li",href:"https://support.mycrypto.com/general-knowledge/ethereum-blockchain/what-are-the-different-units-used-in-ethereum/"},(0,i.kt)("em",{parentName:"a"},"plus d'infos"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gwei")," : unit\xe9 de mesure \xe9gale \xe0 10^9 wei souvent utilis\xe9e pour parler du prix du gas"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mempool")," : La mempool repr\xe9sente la zone d'attente des transactions on y retrouve toutes les transactions en attentes int\xe9gr\xe9es dans un bloc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MEV")," : Acronyme de Miner Extractable Value : C'est l'extraction de valeur des utilisateurs d'Ethereum en r\xe9ordonnant, en ins\xe9rant et en censurant les transactions dans les blocs, sur Avalanche de par la nature du protocole (PoS) et du consensus c'est un peu diff\xe9rent mais il existe quand m\xeame de la valeur extractible (Arbitrage, Backrunning et surement bien d'autres pas encore exploit\xe9s)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keccak")," : Fonction de hachage cryptographique utilis\xe9 dans pas mal d'endroits de l'EVM"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bridge")," : Protocole permettant \xe0 diff\xe9rentes blockchains de communiquer (par exemple transf\xe9rer des tokens de l'une \xe0 l'autre)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NFT")," : Non Fungible Tokens"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ERC-20")," : Norme standart de Smart Contract pour les jetons fongibles sur Ethereum"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ERC-721")," : Norme standart de Smart Contract pour les jetons non fongibles (NFT) sur Ethereum")),(0,i.kt)("h2",{id:"jargon"},"Jargon"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WAGMI")," : We are all gonna make it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HFSP")," : Have fun staying poor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"NGMI")," : Not gonna make it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Alpha")," : Information connue par peu de gens et/ou ayant une valeur importante"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ATH")," : All Time High"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ATL")," : All Time Low"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CEX")," : Centralized EXchange"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DEX")," : Decendtralized EXchange"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DYOR")," : Do Your Own Research"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FOMO")," : Fear Of Missing Out")))}d.isMDXComponent=!0}}]);