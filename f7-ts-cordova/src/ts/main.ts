import Framework7, { getDevice } from 'framework7/bundle';
import App from '../app.f7';
import cordovaApp from '../js/cordova-app';
import 'framework7/css/bundle';
import '../css/icons.css';
import '../css/app.css';
import { Router } from './router';
import Dom7 from 'dom7';

declare global {
  interface Window {
      f7:any;
  }
}

var device = getDevice();
var router = new Router();
export var $$ = Dom7;

const parameters = {
  name: 'App Test', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  id: 'io.f7.test.app', // App bundle ID
  // App routes
  routes: router.getRoutes(),
  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
}
window.f7 = new Framework7(parameters);