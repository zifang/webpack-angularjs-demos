class pinpaiEditCtrl {
	constructor($state, $scope, $http){
		Object.assign(this, {$state, $scope, $http})
		let {id, name, enName, file, username, phone, discription } = JSON.parse(sessionStorage.getItem('pinpaiDetail'));
		let _obj = JSON.parse(sessionStorage.getItem('pinpaiDetail'));
		this.formData = {
			id: id,
			name: name,
			enName: enName,
			file: file,
			username: username,
			phone: phone,
			discription: discription
		}
	}
	editMendian() {
		let obj = {
			id: this.formData.id,
			name: this.formData.name,
			enName: this.formData.enName,
			file: this.formData.file,
			username: this.formData.username,
			phone: this.formData.phone,
			discription: this.formData.discription
		}
		let _index = sessionStorage.getItem('tableIndex');
		let tableList = JSON.parse(sessionStorage.getItem('tableList'));
		tableList.splice(_index, 1, obj);
		sessionStorage.tableList = JSON.stringify(tableList);
		this.$state.go("main.mendian.pinpai");
	}
}

pinpaiEditCtrl.$inject=['$state', '$scope', '$http']

export default angular.module('pinpaiEditModule', [])
  .controller('pinpaiEditCtrl', pinpaiEditCtrl)
  .name;