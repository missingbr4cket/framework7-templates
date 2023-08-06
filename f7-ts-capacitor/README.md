# Framework7 Capacitor Typescript Template

## Install Dependencies

First of all we need to install dependencies, run in terminal

```
npm install
```

## NPM Scripts

- 🔥 `start` - run development server
- 🔧 `dev` - run development server
- 🔧 `build` - build web app for production
- 📱 `build-capacitor-android` - build app and copy it to Android capacitor project
- `rename` - rename your app with unique name and id

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## Capacitor

This project created with Capacitor support. And first thing required before start is to add capacitor platforms, run in terminal:

```
npx cap add android
```

Check out [official Capacitor documentation](https://capacitorjs.com) for more examples and usage examples.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Capacitor Assets

Capacitor assets are located in `resources` folder which is intended to be used with `cordova-res` tool. To generate mobile apps assets run in terminal:

```
npx cordova-res
```

Check out [official cordova-res documentation](https://github.com/ionic-team/cordova-res) for more usage examples.

## App icon

The app default favicon and icon location is here:

```
src/icons/app-icon.png
```

## Documentation & Resources

- [Framework7 Core Documentation](https://framework7.io/docs/)
- [Community Forum](https://forum.framework7.io)

## TODO
- define typings for framework7
- fix rename script
