# A Stimulus web page skeleton

A simple skeleton to create a page with little javascript in it.

Stimulus take care of the javascript. JSX provides some fancy syntax.

CSS is provided by Tailwind.

Parcel bundles it.

A store is managed by Dragonbinder (with localStorage feature).

Ne pas hésiter à supprimer les fonctionnalités inutiles en supprimant les imports correspondant, sinon les libs seront integrées au bundle pour rien.


## Stimulus

Les controllers [Stimulus](https://stimulusjs.org/) sont dans `src/controllers/`.

### JSX

Stimulus ne propose rien pour manipuler le DOM. Si nécessaire, on peut utiliser JSX. Il y a un exemple dans `src/controllers/main.js`. Il faut `import jsxElem, { render } from "jsx-no-react"` pour que ça fonctionne.

## CSS

[Tailwind](https://tailwindcss.com/) à la manoeuvre avec [PostrCSS](https://postcss.org/) derrière. Le point d'entrée dans dans `src/css/index.css`. La configuration est dans `tailwind.Config.js` et `postcss.config.js`.

## Store

Un store géré par [Dragonbinder](https://www.npmjs.com/package/dragonbinder) est disponible. Il est dans `src/store/index.js` et il faut `import store from "~/store"` pour l'utiliser.

### localStorage

Le store peut sauvegarder son état dans le localStorage à chaque modification. Pour l'activer il faut créer une variable `STORAGE_NAME` dans `.env`, avec le nom de la clé dans le localStorage.

## Bonus : ASCII Header

On peut ajouter un petit truc rigolo en commentaire du HTML. Dans `asciiheader.config.js` la variable `text` affiche un message transformé par [figlet](http://www.figlet.org/) (mais on ne peut pas choisir le style) et `footer` sera affiché en dessous, normalement.

