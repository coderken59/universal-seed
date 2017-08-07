# Universal-Seed
> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1016365/10639063/138338bc-7806-11e5-8057-d34c75f3cafc.png" alt="Universal Angular" height="320"/>
</p>

Provides fast, reliable, extensible starter and very much easy to use for the development of Server side rendering in Angular projects. [see the demo here](https://universal-seed.herokuapp.com/)

> [Read here more about why I built this project?](https://medium.com/@wizardnet972/angular4-with-universal-seed-a477237a1995)

**`universal-seed`** is a seed project for Angular Universal apps following the common patterns and [best practices](https://angular.io/styleguide) in file and application organization, providing the following features:

- Built with Angular Cli - You can use all the features.
- Production mode compilation with Universal and **Ahead-of-Time** support.
- Support lazy loading of modules.
- Following the [best practices](https://angular.io/styleguide).
- **Tree-Shaking** production builds.
- Production and development builds.


> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Installation

```bash
$ git clone https://github.com/wizardnet972/universal-seed.git
$ cd universal-seed

# install the project's dependencies
$ npm install
# fast install (via Yarn, https://yarnpkg.com)
$ yarn

# watches your files and uses livereload by default
$ npm start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production


```bash
# prod build with AoT compilation, will output the production application in `dist`
$ npm run universal:prod 
$ cd dist
$ node server.js 
# browse to http://localhost:8080 when it's ready!
# EASY! 
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

