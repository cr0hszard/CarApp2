describe('Users factory', function () {

    var $controller;
    var $scope;
    beforeEach(module('CarApp'));


    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));



    beforeEach(function () {
        $scope = {};
        var controller = $controller('CarCtrl', { $scope: $scope });
        $scope.cars = [
            { "Brand": "Seat", "ProductionYear": 2003, "Id": 1 },
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 },
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 },
            { "Brand": "Citroen", "ProductionYear": 2016, "Id": 5 }];

    });



    it('Search Term should be equal to ""', function () {
  
        
        expect($scope.searchTerm).toEqual("");
    });

    it('$scope.carsFiltered should only have 2 cars with the brand "Lada"  ', function () {

        $scope.searchTerm = "Lada";
        $scope.search();

        expect($scope.carsFiltered).toEqual([
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 }
        ]);
        expect($scope.carsView).toEqual([
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 }

        ]);
    });


    it('$scope.search() return only 1 car with "Alfa" in $scope.carsFiltered', function () {

        $scope.searchTerm = "Alfa";
        $scope.search();

        expect($scope.carsFiltered).toEqual([
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 }
        ]);
        expect($scope.carsView).toEqual([
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 }
        ]);


    });

    it("$scope.clear() clears the filtering ", function () {
        $scope.searchTerm = "Alfa";
        $scope.search();
        $scope.clear();
        expect($scope.carsFiltered).toEqual([
            { "Brand": "Seat", "ProductionYear": 2003, "Id": 1 },
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 },
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 },
            { "Brand": "Citroen", "ProductionYear": 2016, "Id": 5 }
        ]);
    });

});
