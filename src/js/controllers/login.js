'use strict';
export default class loginCtrl {
	constructor($state, $scope, $http){
		Object.assign(this, {$state, $http, $scope})
	}
	save(){
		if(this.$scope.loginForm.$valid){
			this.$state.go('main')
		}
	}
}

loginCtrl.$inject=['$state', '$scope', '$http']