import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-ui-bootstrap';
// import router from './router/router.js';
// import mendianRouter from './pages/mendian/router/router.js';
// import caipinRouter from './pages/caipin/router/router.js';
import router from './js/common/router.js';
import controller from './js/controllers/controller.js';
import Factorys from './js/common/factory.js';
import Services from './js/common/service.js';
import Filters from './js/filter/filter.js';

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

import './style/iconfont.less';
import './style/work.less';

const injectArr = [uiRouter, 'ui.bootstrap', router, controller, Services, Factorys, Filters, 'ngFileUpload', 'ngDialog', 'oc.lazyLoad', 'ui.bootstrap.datetimepicker']
const app = angular.module('app', injectArr)
// .config(router)
// .config(mendianRouter)
// .config(caipinRouter)
// .directive('itemDish',[function(){
// 	return {
// 		restrict: 'AE',
// 		template:require('./pages/menus/dishItem.html')
// 	}
// }])
