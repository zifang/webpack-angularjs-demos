const router = function($urlRouterProvider, $stateProvider, $locationProvider){
	// $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('login', {
    url: '/',
    template: require('../pages/login.html')
  })
  .state('main',{
  	url: '/main',
    views: {
      "": {
        template: require("../pages/main.html")
      },
      'header@main': {
        template: require('../pages/header/header.html')
      },
      "content@main": {
        template: require('../pages/favorate/favorate.html')
      }
    },
  })
}

router.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default router;
