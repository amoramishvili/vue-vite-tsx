import { createPinia, Pinia } from 'pinia';

const createStore = (): Pinia => {
  const store = createPinia();
  return store;
};

export default createStore;
