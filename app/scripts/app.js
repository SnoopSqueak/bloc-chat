(function() {
  function config($locationProvider, $stateProvider) {
      $locationProvider
          .html5Mode({
              enabled: true,
              requireBase: false
           });

      $stateProvider
          .state('home', {
              url: '/',
              controller: 'HomeCtrl as home',
              templateUrl: '/templates/home.html'
          })
  }

  function BlocChatCookies($cookies, $uibModal) {
    //$cookies.remove('blocChatCurrentUser');
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
         var modalInstance = $uibModal.open({
             animation: this.animationsEnabled,
             templateUrl : '/templates/usernameModal.html',
             controller: 'UsernameModalInstanceCtrl',
             controllerAs: 'usernameModal'
         });

         modalInstance.result.then(function(username) {
             $cookies.put('blocChatCurrentUser', username);
         }, function() {
             $log.info('Modal dismissed at ' + new Date());
         });
    }
  }

  angular
      .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
      .config(config)
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
