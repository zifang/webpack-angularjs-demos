import angular from 'angular';
import uiRouter from 'angular-ui-router';
import router from './router/router.js';
import mendianRouter from './pages/mendian/router/router.js';
import controller from './js/controllers/controller.js';
import { statusFilter, payStatusFilter, orderTypeFilter } from './js/filter/status.js';

import 'ng-file-upload';
import 'ng-dialog';
import 'oclazyload';

import '../node_modules/ng-dialog/css/ngDialog.min.css';
import '../node_modules/ng-dialog/css/ngDialog-theme-default.min.css';

// import 'sui';
// console.log("sui")
// console.log(sui)
// console.log('end sui')
import './style/iconfont.less';
import './style/work.less';

const injectArr = [uiRouter, controller, 'ngFileUpload', 'ngDialog', 'oc.lazyLoad']
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
