(function() {
    function UsernameModalInstanceCtrl($uibModalInstance, $scope) {
       this.ok = function(isValid) {
            if (isValid) $uibModalInstance.close($scope.username);
        };

    }

    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', '$scope', UsernameModalInstanceCtrl]);
})();
