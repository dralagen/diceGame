
var game = angular.module("Game", ['highScore']);

game.controller("Game", ['$scope', 'highScoreStorage', function($scope, highScoreStorage) {
    $scope.player = {score:0, turn:0, name:''};

    var player = $scope.player;

    player.play = function() {
        if (angular.isDefined($scope.player.name) && $scope.player.name != "" ) {
            if (player.turn === 10) {
                player.score = 0;
                player.turn = 0;
            }

            var des = parseInt(((Math.random() * 100) % 10 ) + 2);

            if (des === 7) {
                player.score+= 10;
            }
            player.turn++;
            player.lastJet = des;

            if (player.turn === 10) {
                highScoreStorage.add(player.name, player.score);
            }
        }
    }
}]);