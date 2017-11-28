// 'use strict';
class caipinCtrl {
	constructor($state, $http, ngDialog){
		Object.assign(this, {$state, $http, ngDialog})
		this.tableList = [
			{id:11, name: '糖醋小排饭', type: '主食', price: 22.00, unit: '份', status: '1'},
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
	query(params) {
		console.log(query)
	}
}

caipinCtrl.$inject=['$state', '$http', 'ngDialog']

export default angular.module('caipinModule', [])
  .controller('caipinCtrl', caipinCtrl)
  .name;