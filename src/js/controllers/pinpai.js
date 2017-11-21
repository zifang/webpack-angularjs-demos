'use strict';
export default class pinpaiCtrl {
	constructor($state, $scope, $http, $filter, Upload, ngDialog){
		Object.assign(this, {$state, $scope, $http, $filter ,Upload, ngDialog})
		if(sessionStorage.tableList){
			this.tableList = JSON.parse(sessionStorage.tableList);
		}else{
			this.tableList = [
				{id:11, name: '东方既白', username:'陈诚', phone: '021-50276833'},
				{id:12, name: '支付品牌', username:'测试', phone: '021-50276833'},
				{id:13, name: '直连测试', username:'测试', phone: '021-50276833'},
				{id:14, name: '其他品牌', username:'测试', phone: '021-50276833'}
			]
		}
		this.data = this.tableList;

		this.formData = {
			name: '',
			enName: '',
			file: '',
			linkUser: '',
			phone: '',
			discription: ''
		}
		//监听input输入框，直接搜索版本信息
		// this.$watch('query',function(n,o){
		// 	this.tableList = this.$filter('filter')($scope.data, n);
		// });
	}

	search(param) {
		this.tableList = this.$filter('filter')(this.data, param)
	}

	addMendian() {
		let obj = {
			id: Math.ceil(Math.random()*10),
			name: '测试' + Math.ceil(Math.random()*10),
			username: '测试' + Math.ceil(Math.random()*10),
			phone: ''
		}
		this.tableList.push(obj);
		sessionStorage.tableList = JSON.stringify(this.tableList);
		this.$state.go("main.mendian.pinpai")
	}

	delete(id){
		this.ngDialog.open({
			template: 'templateId',
			controller : function() {
				let _this = this;
				_this.cancel = function() {
					debugger
					_this.ngDialog.close('templateId')
				}
			},
			className: 'ngdialog-theme-default'

		})
	}
}

pinpaiCtrl.$inject=['$state', '$scope', '$http', '$filter', 'Upload', 'ngDialog']