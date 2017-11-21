import angular from 'angular';
import loginCtrl from './login.js';
import headerCtrl from './header.js';
import favorateCtrl from './favorate.js';

export default angular
.module('ControllerModule', [])
.controller('loginCtrl', loginCtrl)
.controller('headerCtrl', headerCtrl)
.controller('favorateCtrl', favorateCtrl)
.name;