import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootatrap from 'angular-ui-bootstrap';
import router from './router/router.js';
import mendianRouter from './pages/mendian/router/router.js';
import controller from './js/controllers/controller.js';
import { statusFilter, payStatusFilter, orderTypeFilter, mendianTypeFilter, mendianStatusFilter } from './js/filter/status.js';

import 'ng-file-upload';
import 'ng-dialog';
import 'oclazyload';

import '../node_modules/angular-bootstrap-datetimepicker/src/css/datetimepicker.css';
// import moment from 'node_modules/moment/moment.js';
// window.moment = moment;
import '../node_modules/angular-bootstrap-datetimepicker/src/js/datetimepicker.js';
import '../node_modules/angular-bootstrap-datetimepicker/src/js/datetimepicker.templates.js';

import '../node_modules/ng-dialog/css/ngDialog.min.css';
import '../node_modules/ng-dialog/css/ngDialog-theme-default.min.css';

// console.log("sui")
// console.log(sui)
// console.log('end sui')
import './style/iconfont.less';
import './style/work.less';

const injectArr = [uiRouter, uiBootatrap, controller, 'ngFileUpload', 'ngDialog', 'oc.lazyLoad', 'ui.bootstrap.datetimepicker']
const app = angular.module('app', injectArr)
.filter('statusFilter', () => {
  return statusFilter.status;
})
.filter('payStatusFilter', () => {
	return payStatusFilter.status;
})
.filter('orderTypeFilter', () => {
	return orderTypeFilter.status;
})
.filter('mendianTypeFilter', () => {
	return mendianTypeFilter.status;
})
.filter('mendianStatusFilter', () => {
	return mendianStatusFilter.status;
})
// .directive('itemDish',[function(){
// 	return {
// 		restrict: 'AE',
// 		template:require('./pages/menus/dishItem.html')
// 	}
// }])
// .directive('cart',[function(){
// 	return {
// 		restrict:'AE',
// 		template: require('./pages/menus/cart.html')
// 	}
// }])
.config(router)
.config(mendianRouter)
