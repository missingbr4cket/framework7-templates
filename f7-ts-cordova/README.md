# Framework 7 Core Typescript Template

## Contents

This template uses a Framework7 Core example app with a single view, Cordova and Vite bundler.

## Prerequisites

install framework7-cli, cordova and vite.

```
npm i framework7-cli -g
npm i cordova -g
npm i vite -g
```

clone this repo

```
git clone https://github.com/missingbr4cket/framework7-core-ts-template <your-project-name>
```

install dependencies

```
npm install
```

## Framework7 CLI Options

Framework7 app was created with following options:

```
{
  "cwd": "/home/user/dev/js/framework7/typescript-template",
  "type": [
    "cordova"
  ],
  "name": "F7 App Sample",
  "pkg": "io.framework7.app.sample",
  "framework": "core",
  "template": "single-view",
  "bundler": "vite",
  "cssPreProcessor": false,
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "android"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen"
    ]
  },
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false
}
```

## NPM Scripts

- 🔥 `start` - run development server
- 🔧 `dev` - run development server
- 🔧 `build` - build web app for production
- 🔧 `preview` - preview production build
- 📱 `build-cordova` - build cordova app

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Kitchen Sink

Framework7's Kitchen Sink for the Core implementation is included, so you can use it to find a variety of ready-made templates, see [Framework7 Kitchen Sink Documentation](https://framework7.io/docs/kitchen-sink).

**NOTE:** the html files in the kitchen sink may have some wrong tags the framework will error out to, e.g. most if not all the `<input>` tags aren't closed, and it causes a crash when the app loads.

## TODO
- Restructure and define typings for the whole framework

## Documentation & Resources

- [Framework7 Core Documentation](https://framework7.io/docs/)
- [Framework7 Icons Reference](https://framework7.io/icons/)
- [Community Forum](https://forum.framework7.io)
