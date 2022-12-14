import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import { router } from '@/router';
import { i18n } from '@/i18n';
import '@/api';

import { OutsideClickDirective } from '@/directives/outsideClick';
import FloatingVue from 'floating-vue';
import { maska } from 'maska';

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(i18n)
  .use(FloatingVue)
  .directive('click-outside', OutsideClickDirective)
  .directive('mask', maska)
  .mount('#app');
