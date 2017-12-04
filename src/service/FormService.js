export default class formFunc {
  constructor(ngDialog) {
  	Object.assign(this, { ngDialog })
  };
  delete(_this, index, tempId, func) {
		this.ngDialog.open({
			template: tempId,
			width: 360,	
			showClose: false,	//是否显示关闭按钮
			closeByDocument: false, // 点击body关闭按钮
			className: 'ngdialog-theme-default',
		  controller: ['$scope', function ($scope, $timeout) {
          $scope.cancel = function(){
          	_this.ngDialog.close()
          }
          $scope.confirm = function(){
          	func(_this, index);          
          }
      }]
		})
  }

}
formFunc.$inject = ['ngDialog'];
