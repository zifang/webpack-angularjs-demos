
export default class HttpServer {
  constructor($http, Upload) {
    this.$http = $http;
    this.Upload = Upload;
  };

  http(type, url, params, contentType) {
  	let contType = contentType=='json' ? 'application/json':'application/x-www-form-urlencoded'
	  let paramstranform = contentType == 'json' ? params : JSON.stringify(params)
	  if(type === "get"){
	    return new Promise((resolve, reject) => {
	      this.$http({
	        method: 'get',
	        url: url,
	        headers: {'token' : localStorage.token},
	        params: params
	      })
	      .then((res) => {
	        resolve(res.data)
	      }).catch(err => {
	        if (err == "Error: timeout of 15000ms exceeded") {
	          console.log("服务器请求超时")
	          return
	        }
	        alert(err)
	      })
	    })
	  }else{
	    return new Promise((resolve,reject)=>{
	       this.$http({
	        method: 'post',
	        url: url,
	        headers: {'Content-Type': contType,'token' : localStorage.token},
	        data: paramstranform
	      })
	      .then((res)=>{
	        resolve(res.data)
	      }).catch(err=>{
	        if(err == "Error: timeout of 15000ms exceeded"){
	          alert("服务器请求超时,请刷新页面重新进入")
	        }
	        alert(err)
	      })
	    })
	  }
  }
}

HttpServer.$inject = ['$http'];