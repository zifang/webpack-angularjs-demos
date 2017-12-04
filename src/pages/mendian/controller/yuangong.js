// 'use strict';
class yuangongCtrl {
	constructor($state, $scope, $http, $filter, ngDialog, Factorys){
		Object.assign(this, {$state, $scope, $http, $filter, ngDialog, Factorys})
		this.tableList = [
			{id:11, name: '张三', phone: '15921750438', address:'东方既白(东方既白高科店)',  position: '店长'},
			{id:12, name: '李四', phone: '15921750438', address:'东方既白(东方既白高科店)',  position: '员工'},
			{id:13, name: '王五', phone: '15921750438', address:'东方既白(东方既白高科店)',  position: '员工'},
			{id:14, name: '溜溜', phone: '15921750438', address:'东方既白(东方既白高科店)',  position: '员工'}
		]
		this.data = this.tableList;
	}
	search(param) {
		this.tableList = this.$filter('filter')(this.data, param)
	}

	delete(index){
		this.Factorys.delete(this, index, 'delYuangongTempId', this.confirmCallBack);
	}

	confirmCallBack(_this, index){
		_this.tableList.splice(index,1);
  	_this.ngDialog.close()
	}

}
yuangongCtrl.$inject=['$state', '$scope', '$http', '$filter', 'ngDialog', 'Factorys']
export default angular.module('yuangongModule', [])
  .controller('yuangongCtrl', yuangongCtrl)
  .name;