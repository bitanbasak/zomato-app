## Purpose

You can search for restaurants on this website by typing in the City Name in the search bar. It fetches the results from the Zomato API.

## Technologies Used

- Angular 8
- Bootstrap
- HTML/CSS
- json-server

## Run it locally

- Install json-server globally if not installed already. Open terminal/command prompt and type in the following command.
  ```
  npm install -g json-server
  ```

- Run `npm install` inside the project folder to install all the dependencies.
- `cd` into the server folder and start json-server by running the following command:
  ```
  json-server --watch db.json
  ```
  Keep this terminal window open and running.
- Open a new terminal window and `cd` into the project folder and run `ng serve --open`

The full functionality of the application should be up and running now.

## Live version of the app

Follow this link to view the live version of this app: https://zomato-app-2aef7.web.app/ (Database related functionality not working on live version since json-server was used)
