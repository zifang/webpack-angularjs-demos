// 'use strict';
class mendianCtrl {
	constructor($state, $http, ngDialog){
		Object.assign(this, {$state, $http, ngDialog})
		this.tableList = [
			{id:11, name: '东方极白（东方既白高科店）', phone: '021-12111111', type: '1', status: '1'},
			{id:12, name: '东方极白', phone: '021-123333111', type: '2', status: '2'},
			{id:13, name: '东方极白', phone: '021-121333211', type: '3', status: '1'},
			{id:14, name: '东方既白高科店', phone: '021-32331111', type: '1', status: '2'},
			{id:15, name: '东方高科店', phone: '021-1213232111', type: '1', status: '1'},
		]
	}

	delete(index){
		let _this = this;
		this.ngDialog.open({
			template: 'delMendianTempId',
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
          }
      }]
		})
	}

	switchStatus(index) {
		let _this = this;
		this.ngDialog.open({
			template: 'switchStatusTempId',
			width: 360,	
			showClose: false,	//是否显示关闭按钮
			closeByDocument: false, // 点击body关闭按钮
			className: 'ngdialog-theme-default',
		  controller: ['$scope', function ($scope, $timeout) {
          $scope.cancel = function(){
          	_this.ngDialog.close()
          }
          $scope.confirm = function(){
          	if(_this.tableList[index].status === '1'){
          		_this.tableList[index].status = '2'
          	}else{
          		_this.tableList[index].status = '1'
          	}
          	_this.ngDialog.close()
          }
      }]
		})
	}
}

mendianCtrl.$inject=['$state', '$http', 'ngDialog']

export default angular.module('mendianModule', [])
  .controller('mendianCtrl', mendianCtrl)
  .name;