class dingdanCtrl {
	constructor($state, $scope, $filter){
		Object.assign(this, {$state, $scope, $filter})
		this.tableList = [
			{id:'20160930321013', name: '东方既白', dateTime: '2017-01-01', type:'1', status:'1', payStatus:'1', money:'33.00', paidMoney: '31.50'},
			{id:'20160930321013', name: 'ceshi ', dateTime: '2017-01-01', type:'2', status:'2', payStatus:'2', money:'33.00', paidMoney: '31.50'},
			{id:'20160930321013', name: '东方既白(东方既白高科店)', dateTime: '2017-01-01', type:'3', status:'1', payStatus:'2', money:'33.00', paidMoney: '31.50'},
		]
		this.data = this.tableList;

		this.orderType= [
			{ id: '1', name: '已完成'},
			{ id: '2', name: '未完成'},
			{ id: '3', name: '订单待支付'},
			{ id: '4', name: '订单待审核'},
			{ id: '5', name: '已取消'}
		]
	}

	query(selectStatus) {
		this.tableList = this.$filter('filter')(this.data, selectStatus);
	}
}

dingdanCtrl.$inject=['$state', '$scope', '$filter']

export default angular.module('dingdanModule', [])
  .controller('dingdanCtrl', dingdanCtrl)
  .name;