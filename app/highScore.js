
var highScore = angular.module('highScore', []);

highScore.service('highScoreStorage', [function () {
    var storageId = "highScore";
    var data = JSON.parse(localStorage.getItem(storageId) || '[]');
    return {
        get: function() {
            return data;
        },
        add: function (name, score) {
            data.push({name:name, score:score});
            localStorage.setItem(storageId, JSON.stringify(data));
        },
        reset: function() {
            localStorage.setItem(storageId, '[]');
            data = [];
        }
    }
}]);

highScore.controller('highScoreList', ['highScoreStorage', function (highScoreStorage) {

    this.highScore = highScoreStorage.get();

    this.resetHighScore = function() {
        highScoreStorage.reset();
        this.highScore = highScoreStorage.get();
    }

}]);