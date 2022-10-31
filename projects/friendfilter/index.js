import './friendfilter.html';

import Model from './model.js';
import Controller from './controller.js';

Model.loadScript('https://vk.com/js/api/openapi.js?169')
  .then(() => Model.login(51421931, +2))
  .then(() => Controller.init());
