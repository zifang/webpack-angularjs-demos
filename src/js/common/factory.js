function formFunc(ngDialog) {
	return {
	  delete: function(_this, index, tempId, func) {
			ngDialog.open({
				template: tempId,
				width: 360,	
				showClose: false,	//是否显示关闭按钮
				closeByDocument: false, // 点击body关闭按钮
				className: 'ngdialog-theme-default',
			  controller: ['$scope', function ($scope, $timeout) {
	          $scope.cancel = function(){
	          	ngDialog.close()
	          }
	          $scope.confirm = function(){
	          	func(_this, index);          
	          }
	      }]
			})
	  }
	}
}

export default angular
  .module('Factory', [])
  .factory('Factorys', ['ngDialog', (ngDialog)=> {
  	return {
  	  delete: function(_this, index, tempId, func) {
  			ngDialog.open({
  				template: tempId,
  				width: 360,	
  				showClose: false,	//是否显示关闭按钮
  				closeByDocument: false, // 点击body关闭按钮
  				className: 'ngdialog-theme-default',
  			  controller: ['$scope', function ($scope, $timeout) {
  	          $scope.cancel = function(){
  	          	ngDialog.close()
  	          }
  	          $scope.confirm = function(){
  	          	func(_this, index);          
  	          }
  	      }]
  			})
  	  }
  	}
  }])
  // .factory('Factorys', [ 'ngDialog', formFunc])  other writer
  .name;