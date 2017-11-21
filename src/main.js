import angular from 'angular';
import uiRouter from 'angular-ui-router';
import router from './router/router.js';
import controller from './js/controllers/controller.js';
import 'ng-file-upload';
import 'ng-dialog';

// import 'sui';
// console.log("sui")
// console.log(sui)
// console.log('end sui')
import './style/iconfont.less';
import './style/work.less';

const injectArr = [uiRouter, controller, 'ngFileUpload', 'ngDialog']
const app = angular.module('app', injectArr)
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
