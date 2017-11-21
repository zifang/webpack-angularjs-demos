// 'use strict';
class mendianCtrl {
	constructor($state, $http){
		Object.assign(this, {$state, $http})
		this.allMenuList = [
			{id:11, name: '品牌列表', url: 'main.mendian.pinpai'},
			{id:12, name: '门店列表', url: 'main.mendian.pinpai'},
			{id:13, name: '员工列表', url: 'main.mendian.pinpai'},
			{id:14, name: '订单管理', url: 'main.mendian.dingdan'}
		]
	}
}

mendianCtrl.$inject=['$state', '$http']

export default angular.module('mendianModule', [])
  .controller('mendianCtrl', mendianCtrl)
  .name;