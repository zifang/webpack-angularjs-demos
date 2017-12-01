const mendianRouter = function($urlRouterProvider, $stateProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('main.caipin',{
    url: '/caipin',
    views: {
      "content@main": {
        template: require('../index.html')
      }
    },
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/index.js');
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
  .state('main.caipin.list',{
    url: '/caipinList',
    views: {
      "content@main": {
        template: require('../views/caipin/list.html')
      }
    },
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/caipin.js');
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
  .state('main.caipin.tongji',{
    url: '/caipinTongji',
    views: {
      "content@main": {
        template: require('../views/caipin/caipinTongji.html')
      }
    },
    resolve: {
      loadController: [
        '$q',
        '$ocLazyLoad',
        ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('../controller/caipinTongji.js');
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
