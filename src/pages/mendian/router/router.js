const mendianRouter = function($urlRouterProvider, $stateProvider, $locationProvider){
	// $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('main.mendian',{
    url: '/mendian',
    views: {
      "content@main": {
        template: require('../views/main.html')
      }
    },
    // templateProvider: [
    //   '$q',
    //   function($q) {
    //     let deferred = $q.defer();
    //     require.ensure([], function() {
    //       let template = require('../pages/mendian/main.html');
    //       deferred.resolve(template);
    //     });
    //     return deferred.promise;
    //   }
    // ],
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/mendian.js');
              $ocLazyLoad.load({
                name: module.default
              });
              resolve();
            });
          });
        }
      ]
    }
  })
  .state('main.mendian.pinpai',{
    url: '/pinpai',
    views: {
      "content@main": {
        template: require('../views/pinpai/pinpai.html')
      }
    },
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/pinpai.js');
              $ocLazyLoad.load({
                name: module.default
              });
              resolve();
            });
          });
        }
      ]
    }
  })
  .state('main.mendian.pinpai.add',{
    url: '/pinpaiAdd',
    views: {
      "content@main": {
        template: require('../views/pinpai/pinpaiAdd.html')
      }
    },
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/pinpai.js');
              $ocLazyLoad.load({
                name: module.default
              });
              resolve();
            });
          });
        }
      ]
    }
  })
  .state('main.mendian.pinpai.edit',{
    url: '/pinpaiEdit',
    views: {
      "content@main": {
        template: require('../views/pinpai/pinpaiEdit.html')
      }
    },
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/pinpaiEdit.js');
              $ocLazyLoad.load({
                name: module.default
              });
              resolve();
            });
          });
        }
      ]
    }
  }) 
  .state('main.mendian.pinpai.detail',{
    url: '/pinpaiDetail',
    views: {
      "content@main": {
        template: require('../views/pinpai/pinpaiDetail.html')
      }
    },
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/pinpaiDetail.js');
              $ocLazyLoad.load({
                name: module.default
              });
              resolve();
            });
          });
        }
      ]
    }
  })
  .state('main.mendian.dingdan',{
    url: '/dingdan',
    views: {
      "content@main": {
        template: require('../views/dingdan.html')
      }
    },
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/dingdan.js');
              $ocLazyLoad.load({
                name: module.default
              });
              resolve();
            });
          });
        }
      ]
    }
  })
}

mendianRouter.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default mendianRouter;
