# MyReads Project

This is a project for the Front End Developer Nano Degree
## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Backend Server

Change to the correct directory and type npm start

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Search
The search feature requires at least 2 characters before it will refresh the page. This is to help ease the number of calls to the server

## Build
There is a production build for this as well in the build folder. It was built assuming the project is hosted at the server root. This can be controlled with the homepage field in the package.json. For example, add this to build for GitHub Pages:
"homepage" : "http://myname.github.io/myapp",

If you do locally on your machine, you can start a static server with
npm install -g server
serve -s build
