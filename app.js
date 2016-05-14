app = angular.module("moked", []);

app.controller("LembretesCtrl", function($scope){

});

app.service("somaService", function(){
    this.somar = function(a, b){
        return a + b;
    }
});