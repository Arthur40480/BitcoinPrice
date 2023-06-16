# BitcoinPrice

Il s'agit d'une petite application Node.js qui permet d'obtenir le cours actuel du Bitcoin dans différentes devises.   
Il vous suffit d'exécuter l'application et de fournir le code de devise souhaité en tant qu'argument en ligne de commande pour obtenir le prix actuel du Bitcoin.  

## Prérequis

Avant d'exécuter l'application, assurez-vous d'avoir installé les éléments suivants sur votre machine :  

Node.js v18.16.0 ou supérieur  
NPM (Node Package Manager)  

## Installation

1. Clonez ce dépôt ou téléchargez le code source.

2. Ouvrez un terminal et naviguez jusqu'au répertoire du projet.

3. Exécutez la commande suivante pour installer les dépendances requises :  
 
```
npm install
```
## Utilisation

Pour obtenir le cours actuel du Bitcoin dans une devise spécifique, ouvrez un terminal et naviguez jusqu'au répertoire du projet. Ensuite, exécutez la commande suivante :
```
node index.js [nom de la devise]
```
Remplacez [code de devise] par le code de devise souhaité. Par exemple, pour obtenir le cours du Bitcoin en euros (EUR), vous exécuteriez :
```
node index.js EUR
```
L'application effectuera une requête API pour récupérer le cours actuel du Bitcoin et l'affichera dans la devise spécifiée.

### Codes de devise pris en charge

L'application prend en charge la conversion vers les devises suivantes :

USD (Dollar américain)
EUR (Euro)
GBP (Livre sterling)

## API utilisée

Cette application utilise l'API de [CoinDesk](https://api.coindesk.com/v1/bpi/currentprice.json) pour récupérer le cours actuel du Bitcoin dans différentes devises. 
L'API fournit des données en temps réel et est largement utilisée pour les informations sur les cours des cryptomonnaies.
