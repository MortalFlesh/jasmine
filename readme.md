# jasmine

- just a small app to example jasmine data provider

## jasmine - data provider

- I am used to use data provider in PHPunit so I have been searching for some solution in jasmine
- but I found only this (https://github.com/jphpsf/jasmine-data-provider), problem is, this is just for jasmine v1.2
- so I updated it
- now you can use Jasmine 2.2.0 and use data providers just like that:
 
## Installation
 
    npm install jasmine
    npm install jasmine-data-provider
 
## Usage
 
    var using = require('jasmine-data-provider')

## Example run

    jasmine         // will run tests for calculator using data provider
    npm run build   // will build index.js.min which is used in index.html to show tested calculator
