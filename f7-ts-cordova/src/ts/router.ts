
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';
import Settings from '../pages/settings.f7';
import DynamicRoutePage from '../pages/dynamic-route.f7';
import NotFoundPage from '../pages/404.f7';
import Login from '../pages/login.f7';
import Dom7 from 'dom7';
import { DomUtils, DUMMY_USER, LOCAL_STORAGE_ITEMS } from './utils';
var $$ = Dom7;

export interface LocalStorage {
  getItem: any;
  setItem(key: string, value: any): void;
  removeItem(key: string): void;
}

export class Router {
  routes: any;
  storage: LocalStorage;
  constructor() {
    this.storage = window.localStorage;
    this.initRoutes();
  }

  private checkLogin(userName: string) {
    if(userName === DUMMY_USER) {
      this.storage.setItem(LOCAL_STORAGE_ITEMS.LOGGED_USER, userName);
    } else {
      DomUtils.showAlertDialog(`<p>Only dummy user <b>${DUMMY_USER}</b> allowed.</p>`, 'Wrong Credentials', () => {
        $$('#login-user').focus();
      });
    }
  }

  private initRoutes(): void {
    this.routes = [
      {
        path: '/',
        component: HomePage,
        beforeEnter: ({ resolve, reject }) => {
          if(!this.storage.getItem(LOCAL_STORAGE_ITEMS.LOGGED_USER)) {
            reject();
            window.f7.views.main.router.navigate('/login/');
          } else {
            resolve();
          }
        },
        on: {
          pageAfterIn: (e, page) => {
            $$('.logout-btn').on('click', () => {
              this.storage.removeItem(LOCAL_STORAGE_ITEMS.LOGGED_USER);
              window.f7.views.main.router.navigate('/');
            });
          }
        }
      },
      {
        path: '/login/',
        component: Login,
        on: {
          pageAfterIn: (e, page) => {
            $$('#login-user').focus();
            $$('.login-btn').on('click', () => {
              let userName = $$('#login-user').val();
              this.checkLogin(userName);
              window.f7.views.main.router.navigate('/');
            });
          }
        },
      },
      {
        path: '/settings/',
        component: Settings,
        on: {
          pageAfterIn: (e, page) => {
            $$('.clear-button').on('click', () => {
              DomUtils.clearFormInputFields('.config-input');
              window.f7.form.removeFormData('#config-form');
              $$('.config-server-url').focus();
            });
          },
          pageInit: function (e, page) {
            $$('.config-server-url').focus();
          },
        }
      },
      {
        path: '/about/',
        component: AboutPage,
      },
      {
        path: '/form/',
        component: FormPage,
      },
      {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
      },
      {
        path: '(.*)',
        component: NotFoundPage,
      },
    ];
  }
  getRoutes() {
    return this.routes;
  }
}