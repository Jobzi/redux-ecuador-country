# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<ul>
    <li>Instalar redux npm i  redux</li>
    <li>Instalar redux npm i  react-redux</li> //tools y hooks de redux
    <li>Instalar redux npm i  redux-devtools-extension</li> //para hacer uso de las herramientas de desarrollo de redux
    <li>Instalar redux npm i  thunk</li> // sirve para resolver promesas de una manera eficas dentro de cada action
    <li>Instalar redux npm i  axios</li> // es una herramienta que sirve para realizar fetch de datos de api como DIO en Flutter
</ul>

Pasos para crear Redux

1. Crear los reducer para luego hacer la inyeccion de dependecia en el store
2. Se crea la Store con el valor del reducer createStore(reducer)
3. Para resolver promesas utilizamos un packete Thunk, es necesario instalar el paquete y utilizarlo como un middleware en el createStore(reducer,applyMiddleware(thunk))
