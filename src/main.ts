import Vue from 'vue';
import { AppComponent } from './components/app';

import './sass/main.scss';

new Vue({
  el: '#app',
  render: h => h(AppComponent),
});
