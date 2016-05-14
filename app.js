app = angular.module("moked", []);

app.controller("LembretesCtrl", function($scope, buscarService){
    $scope.lembretes = [];

    var lembrete = {};
    lembrete.nome = "Comprar pão";
    lembrete.desc = "Lembrar de ir na padaria";
    lembrete.data = "14/05/2016";
    lembrete.importante = false;
    $scope.lembretes.push(lembrete);

    lembrete = {};
    lembrete.nome = "Açougue";
    lembrete.desc = "Comprar carne";
    lembrete.data = "14/05/2016";
    lembrete.importante = true;
    $scope.lembretes.push(lembrete);


    $scope.buscarTxt = function() {
        buscarService.buscar().then(function(valor){
            alert("oi funcionou "+valor);
        });
        alert("tchau");
    }
});

app.service("somaService", function(){
    this.somar = function(a, b){
        return a + b;
    }
});

app.service("buscarService", function($http, $q){
    this.buscar = function(){
        var promise = $q.defer();
        
        $http.get("buscar.txt").then(function(data){
            promise.resolve(data.data);
        }, function(error){
            promise.reject(error);
        });

        return promise.promise;
    }
});