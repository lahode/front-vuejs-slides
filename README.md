# VueJS front-end slides

> Front end VueJS to view your own presentation slides

> This project doesn't not work alone. It will only read JSON provided by the [back-end Drupal slides project](https://github.com/lahode/back-drupal-slides)

## Usage

First you need to install NodeJS (NPM) and VueJS 2.5 or up.

Then install your back-end [back-end Drupal slides project](https://github.com/lahode/back-drupal-slides)

``` bash
$ git clone https://github.com/lahode/front-vuejs-slides slides
$ cd slides
$ npm install
```

You will need to configure your endpoints (eg. http://myslides.com/slides/1) in the environment/dev.end.js and environment/prod.end.js

Run the following for dev purpose
``` bash
$ npm run dev
```

or to create your project into the "build" folder:
``` bash
$ npm run build
```
