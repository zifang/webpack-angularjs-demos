class cantaiCtrl {
	constructor($state, $http){
		Object.assign(this, { $state, $http });
		

	}
}

cantaiCtrl.$inject(['$state', '$http'])

export default angular.module('cantaiModule', [])
	.controller('cantaiCtrl', cantaiCtrl)
	.name