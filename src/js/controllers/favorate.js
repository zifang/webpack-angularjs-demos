'use strict';
export default class favorateCtrl {
	constructor($state, $http){
		Object.assign(this, {$state, $http})
		this.showBox = false;
		this.allMenuList = [
				{
					id:1,
					title:'门店管理',
					list: [
						{id:11, name: '品牌列表', checked:true, status:0, url: 'main.mendian.pinpai'},
						{id:12, name: '门店列表',status:1, url: 'main.mendian.pinpai'},
						{id:13, name: '员工列表', checked:true, status:0, url: 'main.mendian.pinpai'},
						{id:14, name: '订单管理', status:1, url: 'main.mendian.pinpai'}
						
					]
				},
				{
					id:2,
					title: '菜品管理',
					list: [
					  {id:21, name: '菜品分类',status:0, url: 'main.mendian.pinpai'},
						{id:22, name: '菜品列表',status:0, url: 'main.mendian.pinpai'},
						{id:23, name: '菜单列表',status:0, url: 'main.mendian.pinpai'}
					]
				},
				{
					id:3,
					title: '数据分析',
					list: [
					  {id:31, name: '菜品统计',status:0, url: 'main.mendian.pinpai'},
						{id:32, name: '营业统计',status:0, url: 'main.mendian.pinpai'}
					]
				},
				{
					id:4,
					title: '系统配置',
					list: [
					  {id:41, name: '公众号设置',status:0, url: 'main.mendian.pinpai'},
						{id:42, name: '修改密码',status:0, url: 'main.mendian.pinpai'},
						{id:43, name: '修改资料',status:0, url: 'main.mendian.pinpai'}
					]
				}
		]

		angular.forEach(this.allMenuList, function(val, key) {
			angular.forEach(val.list, function(subval, key){
				subval['show'] = false;
			})
		})
		console.log(this.allMenuList)
	}


	checked(item){
		if(item.status === 1) return;
		if(item.checked) {
			item.checked = !item.checked;
		}else{
			item['checked'] = true;
		}		
	}

	delete(index, subindex) {
		let _item = this.allMenuList[index].list[subindex];
		_item.checked =  !_item.checked;

	}
}

favorateCtrl.$inject=['$state', '$http']