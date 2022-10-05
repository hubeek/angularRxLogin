# AngularRx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.  
Based on a Udemy tutorial: Angular and NgRx - Building Real Project From Scratch by Oleksandr Kocherhin.  
Example of login/register funcs in angular project with the use of redux, ngrx, and effects.   
Backend server used is [productionready](https://conduit.productionready.io/api)   
This oneis used by [Conduit](https://demo.realworld.io/#/)
Docker image is added to run local docker instance. Adjust api irl in enviroment props for devlopment and production.  


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## proj structure

/app			
  /article		is a page
  article.module.ts	has all modules

/app
  /article
    /components
      /article
        article.component.html
        article.component.sccs
        article.component.ts
    article.module.ts  

  
/app
  /article
    /components
      /article
      /comments
    /services
     article.service.ts
    /store   			- redux
    /types   			- interfaces
    article.module.ts  

/app
  /app
  /auth
  /shared
    /modules
      /feed
        /components
	/services
	 article.service.ts
	/store
	/types
	 article.interface.ts
	feed.module.ts




