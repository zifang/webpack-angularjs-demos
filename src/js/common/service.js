import angular from 'angular';
import HttpServer from './http.js';
import FormServer from '../../service/FormService.js';

export default angular
  .module('Service', [])
  .service('HttpServer', HttpServer)
  .service('FormServer', FormServer)
  .name;