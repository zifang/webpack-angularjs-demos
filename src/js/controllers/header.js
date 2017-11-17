'use strict';
export default class headerCtrl {
	constructor($state, $http){
		Object.assign(this, {$state, $http})
		this.showMenu0 = false;
		this.showMenu1 = false;
		this.showMenu2 = false;
		this.showMenu3= false;

		this.allMenuList = [
				{
					id:1,
					title:'门店管理',
					list: [
						{id:11, name: '品牌列表', checked:true, status:0},
						{id:12, name: '门店列表',status:1},
						{id:13, name: '员工列表', checked:true, status:0},
						{id:14, name: '订单管理', status:1}
						
					]
				},
				{
					id:2,
					title: '菜品管理',
					list: [
					  {id:21, name: '菜品分类',status:0},
						{id:22, name: '菜品列表',status:0},
						{id:23, name: '菜单列表',status:0}
					]
				},
				{
					id:3,
					title: '数据分析',
					list: [
					  {id:31, name: '菜品统计',status:0},
						{id:32, name: '营业统计',status:0}
					]
				},
				{
					id:4,
					title: '系统配置',
					list: [
					  {id:41, name: '公众号设置',status:0},
						{id:42, name: '修改密码',status:0},
						{id:43, name: '修改资料',status:0}
					]
				}
		]
	};

	mouseenter(index) {
		this.commonfunc(index);
	}

	mouseleave(index) {
		/* Act on the event */
		this.commonfunc(index);
	}

	commonfunc(index) {
		switch(index) {
			case 0:
				this.showMenu0 = !this.showMenu0
				break;
			case 1:
				this.showMenu1 = !this.showMenu1
				break;
			case 2:
				this.showMenu2 = !this.showMenu2
				break;
			case 3:
				this.showMenu3 = !this.showMenu3
				break;
		}
		return;
	}
}

headerCtrl.$inject=['$state', '$http']