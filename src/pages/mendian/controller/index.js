// 'use strict';
class indexCtrl {
	constructor($state, $http){
		Object.assign(this, {$state, $http})
		this.allMenuList = [
			{id:11, name: '品牌列表', url: 'main.pinpai'},
			{id:12, name: '门店列表', url: 'main.mendian.home'},
			{id:13, name: '员工列表', url: 'main.yuangong'},
			{id:14, name: '订单管理', url: 'main.dingdan'}
		]
	}
}

indexCtrl.$inject=['$state', '$http']

export default angular.module('indexModule', [])
  .controller('indexCtrl', indexCtrl)
  .name;