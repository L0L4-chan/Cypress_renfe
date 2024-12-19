# Testing the Renfe Website

The present project tries to implement performance tests on Renfe's website.

## Sections
1. [Installation](#Installation)
2. [Use](#Use)






## Installation 
the proyect has been run on Ubuntu:
''' bash commands 
npm init -y
npm install cypress --save-dev
npm install --save-dev cypress-cucumber-preprocessor
npm install --save-dev @cucumber/cucumber
npm i -D cucumber cucumber-tsflow cucumber-pretty ts-node typescript chai
npm i -D @types/cucumber @types/chai
npm install cypress-recaptcha --save-dev
npx cypress open


## Use
To start run
''' bash command
npx cypress open


Marked with @focus to execute some test only.

The test cover:

Start on the Home page
A search for an itinerary using the simple and advanced searcher.
Language exchange
Fail login
fail purchase
