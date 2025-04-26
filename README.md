# Sewtopia

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.


## Todo list

V0
- [x] Créer un composant HomePage pour la page d'accueil Home page dans /app
- [x] Créer une route qui redirige vers notre HomePage sur la route '/'
https://angular.dev/guide/routing/common-router-tasks#defining-a-basic-route 

- [x] Créer les composants dans /app de la page d'accueil : Header, Sidebar, Footer 
- [x] Pour chaque composant, créer un dossier avec les fichiers .component.ts/.component.css/.component.html 
- [x] Inclure tous les composants dans la HomePage 

-> Etat final : index.html ne contient que <app-root></app-root> dans son body, et app.component.html ne contient plus de code "par défaut" Angular mais seulement nos composants

- [x] Deuxième page "pattern-list"
- [ ] Avoir le CSS de tous les composants -> séparer dans des fichiers *.component.css 

V1 
 
Feature "mes patrons" 
- [ ] Créer un composant PatternCard qui affiche un patron passé en input du composant
- [ ] Dans PatternListPage, charger une liste de patrons dans un tableau JS (const myPatterns = [...]), et afficher 1 PatternCard par patron (*ngFor)
- [ ] Faire un composant SearchBar qui émet en output la chaine de caractère recherchée
- [ ] Importer SearchBar dans PatternListPage et récupérer la recherche. Faire un pipe pour filter les patterns [[A PRECISER]]
- [ ] Brancher à l'API :) 


Bugs

- [ ] Import images

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
