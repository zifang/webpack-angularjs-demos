'use strict';
export default class pinpaiAddCtrl {
	constructor($state, $http, Upload){
		Object.assign(this, {$state, $http, Upload})
		this.formData = {
			name: '',
			enName: '',
			file: '',
			linkUser: '',
			phone: '',
			discription: ''
		}
	}

	addMendian() {
		let number = [1,2,3,4,5,6,7,8,9,0];
		let obj = {
			id: Math.random() * number,
			name: Math.random() * number,
			url:
		}
		this.$state.go("main.mendian.pinpai")
	}
}

pinpaiAddCtrl.$inject=['$state', '$http', 'Upload']