// 'use strict';
class caipinCtrl {
	constructor($state, $http){
		Object.assign(this, {$state, $http})
		this.allMenuList = [
			{id:11, name: '菜品分类', url: 'main.caipin.list'},
			{id:12, name: '菜品列表', url: 'main.mendian.home'},
			{id:13, name: '菜单列表', url: 'main.yuangong'}
		]
	}
}

caipinCtrl.$inject=['$state', '$http']

export default angular.module('caipinModule', [])
  .controller('caipinCtrl', caipinCtrl)
  .name;