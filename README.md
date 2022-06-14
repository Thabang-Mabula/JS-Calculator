# JS-Calculator

A simple calculator written in vanilla JavaScript, HTML5 and CSS. 

What differentiates this calculator from a lot of other calculator apps is 
that it's able to evaluate mathematical expressions according to the "Order of Operations".

## Project Structure

- `index.html`: home page of the app
- `style.css`: styling for all the elements in `index.html`
- `script.js`: script for `index.html` that gives functionality to the UI elements
- `calculator.js`: contains functions that handle the logic for calculating the result of mathamtical expressions
- `common`: folder containing modules that contain common, misc. functions, constants and classes.
  - `errors`: folder containing classes representing various kinds of errors
  - `validators`: folder containing utils that provide helpful validation functions
- `operations`: folder containing constants and enums relating to mathematical operators
- `pre-processing`: folder containing classes and utils that assist with processing expressions prior to calculation and evaluation

