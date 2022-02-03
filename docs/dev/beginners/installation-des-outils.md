import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Les outils de base pour dévlopper avec web3 sur Avalanche

Afin de pouvoir dévlopper sur Avalanche voici une liste des outils très utiles si ce n'est indispensables et comment les installer :

- VSCode (Visual Studio Code)
- Python ou Javascript
- Librairie Web3 pour le language choisi

## Installer VSCode

Pour pouvoir coder n'importe quel éditeur de texte peut convenir mais certains possèdent des outils qui facilitent grandement la vie tel que [Visual Studio Code](https://code.visualstudio.com/)

Après avoir choisi la version correspondante à votre système d'exploitation
![Télécharge VSCode](/img/dev/beginners/VSCodeInstall.png)

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

![Installer VSCode](/img/dev/beginners/VSCodeInstallWindows.png)

  </TabItem>
  <TabItem value="debian" label="Linux">

Il suffit d'ouvrir un terminal et d'exécuter cette commande  : ```sudo dpkg -i path/to/file```  
*(ou d'exécuter cette commande en root si pas sous Ubuntu)*
![Installer VSCode](/img/dev/beginners/VSCodeInstallDebian.png)

  </TabItem>
</Tabs>

## Installer l'interprêteur Python

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

Taper "Python" dans le Microsoft Store et installer la meilleure version disponible *(ici 3.9)*
![Installer VSCode](/img/dev/beginners/PythonInstallWindows.png)

  </TabItem>
  <TabItem value="debian" label="Linux">

Python devrait déjà être installé sur votre machine : vous pouvez tester en tapant ```python3 --version``` dans un terminal ce qui devrait renvoyer quelque chose comme ```Python 3.9.2```  
Sinon il suffit d'ouvrir un terminal et d'exécuter cette commande  : ```sudo apt-get install python3```  
*(ou d'exécuter cette commande en root si pas sous Ubuntu)*

  </TabItem>
</Tabs>

## Installer Javascript

## Installer la librairie Web3

<Tabs groupId="language">
  <TabItem value="python" label="Python">

  <Tabs groupId="operating-systems">
    <TabItem value="win" label="Windows">

  Pour pouvoir installer la libraire Web3 et ses dépendances il d'abord nous falloir installer [Visual Studio](https://visualstudio.microsoft.com/fr/downloads/)
  ![Installer Visual Studio](/img/dev/beginners/VSInstallWindows.png)

  Une fois fait sélectionnez "Desktop development with C++" et cliquez sur "Install"
  ![Installer Visual Studio](/img/dev/beginners/VSInstallC++Windows.png)

  Une fois ça fait ouvrez VSCode et ouvrez un nouveau terminal et tapez ```pip3 install web3```
  ![Ouvrir un terminal](/img/dev/beginners/OpenTerminalVSCode.png)
  ![Installer Web3](/img/dev/beginners/PipInstallWindows.png)

  </TabItem>
  <TabItem value="debian" label="Linux">

  Python devrait déjà être installé sur votre machine : vous pouvez tester en tapant ```python3 --version``` dans un terminal ce qui devrait renvoyer quelque chose comme ```Python 3.9.2```  
  Sinon il suffit d'ouvrir un terminal et d'exécuter cette commande  : ```sudo apt-get install python3```  
  *(ou d'exécuter cette commande en root si pas sous Ubuntu)*

  Dans un terminal taper la commande ```pip3 install web3```

  </TabItem>
  </Tabs>

  Et voilà plus qu'à tester tout ça !

  </TabItem>
  <TabItem value="js" label="Javascript">TODO</TabItem>
</Tabs>

## Exemple d'utilisation de Web3

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
  <TabItem value="js" label="Javascript">TODO</TabItem>
</Tabs>