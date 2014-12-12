var app = angular.module("diceGame", ['highScore', 'Game', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: './partials/game.html', controller: "Game"})
        .otherwise({redictetTo:'/'});
}]);