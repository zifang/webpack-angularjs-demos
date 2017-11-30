import angular from 'angular';
import HttpServer from './http.js';

export default angular
  .module('Service', [])
  .service('HttpServer', HttpServer)
  .name;