// 'use strict';
class pinpaiCtrl {
	constructor($state, $scope, $http, $filter, Upload, ngDialog){
		Object.assign(this, {$state, $scope, $http, $filter ,Upload, ngDialog})
		if(sessionStorage.tableList){
			this.tableList = JSON.parse(sessionStorage.tableList);
		}else{
			this.tableList = [
				{id:11, name: '东方既白', enName: 'dongfangjibai', username:'陈诚', file: 'http://10.10.110.48:22222/group1/M00/03/30/CgpuMVm7bJOAFbkOAAl5WLU-YRY736.jpg', phone: '021-50276833', discription:'是中国餐饮集团—百胜餐饮集团第'},
				{id:12, name: '支付品牌', enName: 'zhifupinpai', username:'测试', file: 'http://10.10.110.48:22222/group1/M00/00/C8/CgpuMVl1sqmAHOnhAACGZa1TXso079.jpg', phone: '021-50276833', discription:'是中国餐饮集团—百胜餐饮集团第'},
				{id:13, name: '直连测试', enName: 'zhilianceshi', username:'测试', file: 'http://10.10.110.48:22222/group1/M00/00/C8/CgpuMVl1sqmAHOnhAACGZa1TXso079.jpg', phone: '021-50276833', discription:'是中国餐饮集团—百胜餐饮集团第'},
				{id:14, name: '其他品牌', enName: 'qitapinpai', username:'测试', file: 'http://10.10.110.48:22222/group1/M00/03/30/CgpuMVm7bJOAFbkOAAl5WLU-YRY736.jpg', phone: '021-50276833', discription:'是中国餐饮集团—百胜餐饮集团第一个中式餐饮品牌，是肯德基的兄弟品牌。'}
			]
			sessionStorage.tableList = JSON.stringify(this.tableList);
		}
		this.data = this.tableList;

		this.formData = {
			name: '',
			enName: '',
			file: '',
			username: '',
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
		this.$state.go("main.mendian.pinpai");
	}

	delete(index){
		let _this = this;
		this.ngDialog.open({
			template: 'delPinpaiTempId',
			width: 360,	
			showClose: false,	//是否显示关闭按钮
			closeByDocument: false, // 点击body关闭按钮
			className: 'ngdialog-theme-default',
		  controller: ['$scope', function ($scope, $timeout) {
          $scope.cancel = function(){
          	_this.ngDialog.close()
          }
          $scope.confirm = function(){
          	_this.tableList.splice(index,1);
          	_this.ngDialog.close()
          	sessionStorage.tableList = JSON.stringify(_this.tableList);
          }
      }]
		})
	}
	edit(index) {
		sessionStorage.pinpaiDetail = JSON.stringify(this.tableList[index]);
		sessionStorage.tableIndex = index;
		this.$state.go("main.mendian.pinpai.edit");
	}

	detail(index){
		sessionStorage.pinpaiDetail = JSON.stringify(this.tableList[index]);
		this.$state.go("main.mendian.pinpai.detail");
	}
}

pinpaiCtrl.$inject=['$state', '$scope', '$http', '$filter', 'Upload', 'ngDialog']

export default angular.module('pinpaiModule', [])
  .controller('pinpaiCtrl', pinpaiCtrl)
  .name;