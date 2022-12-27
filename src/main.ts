import '@/assets/scss/app.scss';

import createMyApp from './app';

const { app, router } = createMyApp();
router.isReady().then(() => {
  app.mount('#app', true);
});
