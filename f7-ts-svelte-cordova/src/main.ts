import Framework7 from 'framework7/lite-bundle'
import './app.css'
import 'framework7/css/bundle'
import App from './App.svelte'
import Framework7Svelte from 'framework7-svelte'

Framework7.use(Framework7Svelte);

const app = new App({
  target: document.getElementById('app')!,
})

export default app;
