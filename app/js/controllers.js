var appControllers = angular.module('appControllers', []);

appControllers.controller('VeiculosCtrl', ['$scope', 'ProcurarVeiculo', 'Veiculo', 'MeuVeiculo', 'Login',
  function ($scope, ProcurarVeiculo, Veiculo, MeuVeiculo, Login) {

  ProcurarVeiculo.get({}, function (data) {
    console.log(data);
      $scope.veiculos = data.content;
  });

  MeuVeiculo.get({}, function (data) {
    console.log(data);
  });

  $scope.criarVeiculo = function () {
    var carro = {
      placa: "DDD0404",
      marca: "Tesla",
      modelo: "Model X",
      cor: "Preto",
      proprietario: {
        nome: "Lucas Balensiefer",
        ramal: "640",
        celular: "(51) 9997-9997",
        posicao: "4-370"
      }
    };

    Veiculo.save({id: carro.placa}, carro);
  };
}]);
