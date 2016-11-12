# FitHub
![screenshot of project running](screenshot.png)

Version 0.1.0: 10, 2016

## Description
Epicodus JavaScript Week 5 Group Project by
* [Alexander Jacks](https://github.com/Adjectival)
* [Dean Scelza](https://github.com/d34n5)
* [Garrett Price](https://github.com/GarrettLeePrice)
* [Karen Freeman-Smith](https://github.com/karenfreemansmith)

An application to track progress on your health and fitness goals written with Ember.js, Sass, and Firebase

### Specifications
* Enter Foods:
  * Add or edit foods on the list to keep track of their nutritional qualities like calories, fat, carbs, protein
  * Foods get an icon based on the category of the food
* Set Diet Goals:
  * Set a target goal for daily diet (in calories/fat/carbs/protein etc)
* Enter Activities:
  * Add or edit activity goals
  * Record completed activities with percentage of goal reached
* Display daily progress with various colored squares for the past year
  * 5 colors (shown as opacity): ... all effort gets some reward, extra effort gets extra reward.
  * 10% opacity <= 0% effort
  * 30% opacity > 0% effort
  * 50% opacity > 50% effort
  * 70% opacity > 90% effort
  * 90% opacity > 100% effort
* Store data in Firebase data storage

#### Database Diagram
![database diagram](database.png)

## Installation
* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests
* `ember test`
* `ember test --server`

### Building
* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links
* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Support & Contact
For questions, concerns, or suggestions please email karenfreemansmith@gmail.com

## Known Issues (*Desired Improvements*)
* Track user from "sign in" and filter display to only that user's info
* Add a date object to track progress and logging information, sum totals for day
* Add API to look up food information (calories and other nutrients)
* Connect daily progress to heat map based on % of goal met

## Technologies Used
Ember.js, Firebase, Sass, Gulp, Bower

## Legal
*Licensed under the GNU General Public License v3.0*

Copyright (c) 2016 Copyright _[Alexander Jacks](https://github.com/Adjectival), [Dean Scelza](https://github.com/d34n5), [Garrett Price](https://github.com/GarrettLeePrice), [Karen Freeman-Smith](https://github.com/karenfreemansmith)_ All Rights Reserved.
