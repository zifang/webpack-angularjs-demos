class mendianAddCtrl {
	constructor($state, $http) {
		Object.assign(this, {$state, $http});
		this.switchPannel = 1;

		this.ppNameList = [
			{id:1, name: '测试品牌1'},
			{id:2, name: '测试品牌2'},
			{id:3, name: '测试品牌3'},
			{id:4, name: '测试品牌4'}
		]

		this.caipinType = [
			{id:1, name: '本帮江浙菜'},
			{id:2, name: '川菜'},
			{id:3, name: '海鲜'},
			{id:4, name: '粤菜'},
			{id:5, name: '湘菜'},
			{id:6, name: '江西菜'},
			{id:7, name: '东北菜'},
			{id:8, name: '贵州菜'},
			{id:9, name: '台湾菜'},
			{id:10, name: '清真菜'},
			{id:11, name: '新疆菜'},
			{id:12, name: '西北菜'},
			{id:13, name: '素菜'},
			{id:14, name: '烧烤'},
			{id:15, name: '咖啡'},
			{id:16, name: '火锅'},
			{id:17, name: '自助餐'},
			{id:18, name: '小吃快餐'},
			{id:19, name: '日本菜'},
			{id:20, name: '韩国料理'},
			{id:21, name: '东南亚菜'},
			{id:22, name: '西餐'},
			{id:23, name: '云南菜'},
			{id:24, name: '其他'},
		]

		this.formData = {
			ppName: '',
			name: '',
			type: '',
			phone: '',
			starttime: '',
			endtime: '',
			desctiption: '',
			status: true
		}

		this.formData.starttime = new Date();
		this.formData.endtime = new Date();

	  this.hstep = 1;
	  this.mstep = 15;

	  this.options = {
	    hstep: [1, 2, 3],
	    mstep: [1, 5, 10, 15, 25, 30]
	  };

		//上传文件
	  // uploadFiles(file, errFiles) {
	  //   const _that = this;
	  //   if (file) {
	      // let isApk = file.name.endsWith('.apk');
	      // if (isApk) {
        // var toastInstance = _that.toaster.pop({
        //   type: 'info',
        //   body: '正在上传,请稍等...',
        //   timeout: 1000000,
        //   tapToDismiss: false
        // });
        // let url = '/api/apk/upload';
        // _that.Upload.upload({
        //   url: url,
        //   data: {
        //     file: file
        //   }
        // }).then((response) => {
        //   _that.params.fileId = response.data.data.id;
        //   _that.toaster.clear(toastInstance);
        // });
	      // } else {
	      //   _that.toaster.pop({
	      //     type: 'warning',
	      //     body: '请选择.apk文件!',
	      //     timeout: 1000,
	      //     tapToDismiss: false
	      //   });
	      // }
	  //   }
	  // }

		let map= new AMap.Map('mapContainer', {
	    resizeEnable: true
		})

		map.setCity('上海市');
		 //设置城市
    AMap.event.addDomListener(document.getElementById('query'), 'click', function() {
        var cityName = document.getElementById('addressText').value;
        if (!cityName) {
            cityName = '上海市'
        }
        map.setCity(cityName);
    })

	}

	changed() {
    console.log('Time changed to: ' + this.formData.starttime+ '/' + this.formData.endtime);
  }

  save() {
  	console.log(this.formData)
  }
}


mendianAddCtrl.$inject = ['$state', '$http']

export default angular.module('mendianAddModule',[])
	.controller('mendianAddCtrl', mendianAddCtrl)
	.name