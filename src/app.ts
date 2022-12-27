import { createApp, CreateAppFunction } from 'vue';
import { Router } from 'vue-router';

import spaceComponentsVue3 from 'space-components-vue3';
import App from './layouts/App.tsx';

import createRouter from './router';
import createStore from './store';

import http from './store/http';

const createMyApp = (): {
  app: CreateAppFunction<Element>;
  router: Router;
} => {
  const app = createApp(App);

  const router = createRouter();
  const store = createStore();
  app.use(router);
  app.use(store);
  app.use(spaceComponentsVue3);
  http.init({
    baseApiUrl: import.meta.env.VITE_APP_API_BASE_URL,
  });
  return { app, router };
};

export default createMyApp;
