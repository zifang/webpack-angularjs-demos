// 'use strict';
class mendianCtrl {
	constructor($state, $http){
		Object.assign(this, {$state, $http})
		this.tableList = [
			{id:11, name: '东方极白（东方既白高科店）', phone: '021-12111111', type: '1', status: '1'},
			{id:12, name: '东方极白', phone: '021-123333111', type: '2', status: '2'},
			{id:13, name: '东方极白', phone: '021-121333211', type: '3', status: '1'},
			{id:14, name: '东方既白高科店', phone: '021-32331111', type: '1', status: '2'},
			{id:15, name: '东方高科店', phone: '021-1213232111', type: '1', status: '1'},
		]
	}
}

mendianCtrl.$inject=['$state', '$http']

export default angular.module('mendianModule', [])
  .controller('mendianCtrl', mendianCtrl)
  .name;