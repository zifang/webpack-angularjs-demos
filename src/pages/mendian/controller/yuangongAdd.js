class yuangongAddCtrl {
	constructor($state, $http, $filter) {
		Object.assign(this, {$state, $http, $filter});

		this.ppNameList = [
			{id:1, name: '测试品牌1'},
			{id:2, name: '测试品牌2'},
			{id:3, name: '测试品牌3'},
			{id:4, name: '测试品牌4'}
		]

		this.formData = {
			id:'',
			name: '',
			tel: '',
			password: '',
			position: ''
		}
	}

  save() {
  	console.log(this.formData)
  	this.$state.go("main.yuangong")
  }
}


yuangongAddCtrl.$inject = ['$state', '$http', '$filter']

export default angular.module('yuangongAddModule',[])
	.controller('yuangongAddCtrl', yuangongAddCtrl)
	.name