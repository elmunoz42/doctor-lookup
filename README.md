



https://github.com/elmunoz42/doctor-lookup.git

# _Doctor Lookup_

#### _Website app for finding doctors_

#### By _**Carlos Munoz Kampff**_

## Description

_website where users may enter a medical issue (ie: “ear ache”) into a form, submit it, and receive a list of doctors they may seek out to help with their medical issue._


## Specifications

| Behavior                                              |   Input example   |  Output example |
|-------------------------------------------------------|:-----------------:|:---------------:|
| 1) User can enter a symptom and get a list of five doctors in the Portland area| "headache", "Portland" | "Craig, Hertler	Specializes in ear, nose and throat problems.	9155 SW Barnes Rd, Portland, OR" (for each...)|
| 2) User enters an unrecoginize symptom and receives error message. | "cance" | "BetterDoctor failed to get results! Perhaps you misspelled or try describing your condition differently."|
| 3 GEO*) User can enter a symptom and get a list of doctors in their current location. | "headache", "Current Position"| "Craig, Hertler	Specializes in ear, nose and throat problems.	9155 SW Barnes Rd, Portland, OR" (for each...)|
| 4 GEO*) User's location could not be found. | "headache", "Current Position" | "Couldn't find location at the time. Try again in a minute."| 

* these specs are met in the geolocation branch but are not present in master branch. 

## Setup/Installation Requirements
* _Clone github repository https://github.com/elmunoz42/doctor-lookup.git_
* _if Node is not yet installed in your machine <terminal< $ brew install node
* _Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should should be 4.0.x or higher, npm should be 3.6.x or higher):
$ node -v
v6.2.0
$ npm -v
3.10.5
* _if Sass is not yet installed in your machine <terminal< $ gem install sass_
* _in the project directory run: $ install node_
* _in the project directory run: $ install bower_
* _run: gulp build_
* _run: gulp serve_




_web browser and PHP 5 are necessary to operate this _

## Known Bugs

_IN THE GEOLOCATION BRANCH IN GITHUB Asynchrony is not fully resolved for current location if HTML5 can't get location in time. The error is handled in the front end with an alert that asks the user to try again and in the lookup-interface with an if statement that keeps the BetterDoctor API from being triggered._

## Support and contact details

_617-780-8362_

## Technologies Used

* _Node_
* _Bower_
* _SASS_
* _BetterDoctor API_
* _HTML5 Geolocation_

### License

*MIT*

Copyright (c) 2017 **_Carlos Munoz Kampff_**
