// 'use strict';
class mendianCtrl {
	constructor($state, $http, ngDialog, HttpServer, FormServer){
		Object.assign(this, {$state, $http, ngDialog, HttpServer, FormServer})
		this.tableList = [];
		this.getData();
	}

	delete(index){
		this.FormServer.delete(this, index, 'delMendianTempId', this.confirmCallBack);
	}

	confirmCallBack(_this, index){
		_this.tableList.splice(index,1);
		_this.ngDialog.close()
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
          	if(_this.tableList[index].flag === 1){
          		_this.tableList[index].flag = 2
          	}else{
          		_this.tableList[index].flag = 1
          	}
          	_this.ngDialog.close()
          }
      }]
		})
	}

	getData() {
		this.HttpServer.http('get', '../../../json/mendian.json').then(res => {
			if(res.code === "200"){
				console.log(res.model)
				this.tableList = res.model;
			}else{
				alert(res.message)
			}
		})
	}
}

mendianCtrl.$inject=['$state', '$http', 'ngDialog' ,'HttpServer', 'FormServer']

export default angular.module('mendianModule', [])
  .controller('mendianCtrl', mendianCtrl)
  .name;