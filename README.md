# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Deploying requirement
To properly deploy this application a user token must be generated. I recommend using `postman` for this pourpose with the following request:

   
 ``` 
 {  
    POST: `https://accounts.spotify.com/api/token` 
    {
        Headers: {
            Content-Type:"application/x-www-form-urlencoded"   
        },
        Body: {
            grant_type: "client_credentials",
            client_id:"application-client-id-for-spotify",
            client_secret:"application-client-secret-for-spotify"
        }
    }
 }
```
- Client_id and client_secret are not provided by developer.

When generated, the token must be copied in the following path `src/app/services/spotify.service.ts` (line 18)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
