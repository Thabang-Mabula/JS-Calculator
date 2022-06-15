# JS-Calculator

A simple calculator written in vanilla JavaScript, HTML5 and CSS. 

What differentiates this calculator from a lot of other calculator apps is 
that it's able to evaluate mathematical expressions according to the "Order of Operations".

![image](https://user-images.githubusercontent.com/41521247/173785251-051368fa-81ef-4257-a451-2a472375ceb4.png)

![image](https://user-images.githubusercontent.com/41521247/173785318-506d70ba-c7df-42a1-8dfc-6d0af41a0083.png)


## Running the application locally

Whilst this application can be run on any local web server, these steps will briefly guide you on how to run it using `http-server`:

- Clone or download (and extract) the repo to a directory of your choice
- If you don't already have it installed locally, download and install Node.js (refer to https://nodejs.dev/learn/how-to-install-nodejs)
- Install `http-server` (refer to https://www.npmjs.com/package/http-server). The npm page provides instructions for the various ways in which the server can be installed. <br> E.g. if you're using npm, you can install it by running
    `npm install --global http-server` in your terminal
 -  Open your terminal and navigate it to the base folder where the project was cloned or downloaded (e.g. C:\Calculator)
 - Run the command `http-server`
 - The terminal should then display the line "Starting up http-server, serving ./" and shortly after, provide you with a url for the application (e.g. http://127.0.0.1:8080)
 - Paste and go to the url using a browser of your choice (preferably a modern browser e.g. Google Chrome, Firefox, etc.)

## Project Structure

- `index.html`: home page of the app
- `style.css`: styling for all the elements in `index.html`
- `script.js`: script for `index.html` that gives functionality to the UI elements
- `calculator.js`: contains functions that handle the logic for calculating the result of mathamtical expressions
- `ui-messaging.js`: contains functions for interacting with the user (e.g. displaying error messages, etc.)
- `common`: folder containing modules that contain common, misc. functions, constants and classes.
  - `errors`: folder containing classes representing various kinds of errors
  - `validators`: folder containing utils that provide helpful validation functions
  - `event-handlers`: folder containing functions, utils, and constants for handling events
- `operations`: folder containing constants and enums relating to mathematical operators
- `pre-processing`: folder containing classes and utils that assist with processing expressions prior to calculation and evaluation

