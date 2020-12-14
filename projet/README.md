Cyril BOPOUNGO      cyril.bopoungo@edu.ece.fr      TD2A
Joanélia RAPSODE    joanelia.rapsode@edu.ece.fr    TD2B

## Lien vers Figma :

https://www.figma.com/file/JO5KLA3Tad7fQrgSAsAQfk/Projet-WEB?node-id=7%3A7

# Pour commencer, créez une application React

Ce projet a été lancé avec [Create React App] (https://github.com/facebook/create-react-app).

`npx create-react-app mon-app`
`cd mon-app`
`npm start`

## Scripts disponibles

Dans le répertoire du projet, vous pouvez courir :

# `npm start`.

Exécute l'application en mode développement.
Ouvrez [http://localhost:3000](http://localhost:3000) pour le visualiser dans le navigateur.

La page se rechargera si vous effectuez des modifications.\
Vous verrez également les éventuelles erreurs de peluche dans la console.

# `npx sb init`
Pour installer le storybook.

# `npm run storybook``.
Pour charger la page du storybook.

### Avant d'installer les librairies 

tapez "cd projet" dans le terminal.

## INSTALLER LES BIBLIOTHÈQUES

### ICONS
npm i --save @fortawesome/fontawesome-svg-core

npm install --save @fortawesome/free-solid-svg-icons

npm install --save @fortawesome/react-fontawesome

### FLIPCARD

npm install react-flipcard

npm install grommet styled-components

### CHARTS

npm install recharts


### RESPONSIVE CONTAINERS

npm i @bit/recharts.recharts.responsive-container

npm install react-bootstrap bootstrap

### AUDIO

npm install react-playlist-player

### ROUTES

npm install react-router-dom

Assurez-vous que vous avez installé toutes ces bibliothèques.

### PLAYER
npm install react-player


Après l'installation, tapez "npm start" dans le terminal.

# Pour ouvrir le serveur


`npm install express cors mongoose dotenv``.

npm install -g nodemon

Nodemon server

Serveur local : http://localhost:5000 





### Difficultés frontend

Nous avons eu des difficultés à utiliser Github. Nous n'avons pas bien compris les fonctionnalités (tirer, pousser, aller chercher et tout le reste).
Nous ne pouvions pas afficher nos widgets sur Storybook. Lorsque nous avons essayé, nous avons eu de nombreuses erreurs sur le terminal.
Il était difficile de réaliser ce projet uniquement par téléphone et par Discord.
Il était également difficile de gérer notre temps avec tous les délais que nous avions dans les autres classes et projets.

### Difficultés backend

Nous avons eu des difficultés à comprendre comment relier la base de donnée MongoDB à l'application React, par ailleurs, même en ayant compris, il s'est avéré difficile d'implémenter un code pour faire le lien entre le backend et le frontend. En effet, nous avons rencontré une difficulté majeure dans l'implémentation du Widget "Audio", le le composant que nous avions choisi ne nous permettait pas d'avoir le contrôle sur les différents paramètres ainsi nous ne pouvions pas effectuer de requête selon différents états (pause, play,suivant,précédent...). Nous avons donc décidé de créer un autre widget en parallèle nous permettant d'afficher une vidéo via un lien et de récupérer cet URL dans la base de données mongodB. Cependant, lors de la mise en commun des fichiers, l'un d'entre nous ne pouvait pas accéder aux données de ce Widget.


