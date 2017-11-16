'use strict';
export default class loginCtrl {
	constructor($scope, $http){
		Object.assign(this, {$http, $scope});
		
	}
}

loginCtrl.$inject=['$scope','$http']