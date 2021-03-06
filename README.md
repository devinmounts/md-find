# MD Find

#### Epicodus JavaScript wk2 Independent Project, 08/10/2018

#### By Devin Mounts

## Splash
![Welcome Page](./src/splash.png)

## A web application that allows users to query the "Better Doctor API" by  illness, or name and receive a list of MD's in Portland who specialize in search.


## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Program displays a list of medical conditions as search criteria | none| condition1, condition2, ... |
| Program allows user to enter in a name as search criteria | Chris | list of Doctors that best match based on API algorithm  |
| Program receives a search criteria ( medical condition or name), and returns a list of MD's in PDX who specialize in condition | plantar fasciitis | MD1, MD2, MD3... |
| If MD's are returned from search, program will show first name, last name, address, phone, website, and whether the MD is accepting new patients. | plantar fasciitis | MD1: Francisca, Geurrera, 222 1st. St. Portland, OR., 503-544-3322, www.fgmd.com, Accepting New Patients; MD2:... MD3:...;... |
| Program returns an error message for bad API call | plantar fasciitis | Error: 404. Bad Url |
| If no MD's meet search criteria, program returns notification.| plantar fasciitis | I'm sorry, it appears there are no MD's who specialize in plantar fasciitis in Portland |

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* Create a file in the root directory called `.env` with your API key written in this format: **exports.apiKey** = **_API KEY HERE_**
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Links

* Repo: https://github.com/devinmounts/md-find

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Devin Mounts**
