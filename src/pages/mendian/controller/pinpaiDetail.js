class pinpaiDetailCtrl {
	constructor($state, $scope, $http){
		Object.assign(this, {$state, $scope, $http})
		let {name, enName, file, username, phone, discription } = JSON.parse(sessionStorage.getItem('pinpaiDetail'));
		let _obj = JSON.parse(sessionStorage.getItem('pinpaiDetail'));
		this.formData = {
			name: name,
			enName: enName,
			file: file,
			username: username,
			phone: phone,
			discription: discription
		}
	}
}

pinpaiDetailCtrl.$inject=['$state', '$scope', '$http']

export default angular.module('pinpaiDetailModule', [])
  .controller('pinpaiDetailCtrl', pinpaiDetailCtrl)
  .name;