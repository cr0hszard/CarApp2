describe('car-controller Unit Test', function () {

    var $controller;
    var scope;
    beforeEach(module('CarApp'));


    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));



    beforeEach(function () {
        scope = {};
        $controller = $controller('CarCtrl', { $scope: scope });
        scope.cars = [
            { "Brand": "Seat", "ProductionYear": 2003, "Id": 1 },
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 },
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 },
            { "Brand": "Citroen", "ProductionYear": 2016, "Id": 5 }];
        scope.carsView = scope.cars;
        scope.carsFiltered = scope.cars;
    });



    it('checks if $scope.searchTerm==/"/"  ', function () {
        expect(scope.searchTerm).toEqual("");
    });

    it('checks if after running $scope.search  ', function () {

        scope.searchTerm = "Lada";
        scope.search();

        expect(scope.carsFiltered).toEqual([
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 }
        ]);
        expect(scope.carsView).toEqual([
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 }

        ]);
    });


    it('$scope.search() return only 1 car with "Alfa" in $scope.carsFiltered', function () {

        scope.searchTerm = "Alfa";
        scope.search();

        expect(scope.carsFiltered).toEqual([
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 }
        ]);
        expect(scope.carsView).toEqual([
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 }
        ]);
        
    });

    it("$scope.clear() clears the filtering ", function () {
        scope.searchTerm = "Alfa";
        scope.search();
       scope.clear();
        expect(scope.carsFiltered).toEqual([
            { "Brand": "Seat", "ProductionYear": 2003, "Id": 1 },
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 },
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 },
            { "Brand": "Citroen", "ProductionYear": 2016, "Id": 5 }
        ]);
    });

    it("should reverse the order of a $scope.carsView after ordering by Id with $scope.orderId()", function () {
        scope.orderID();

        expect(scope.carsView).toEqual([
            { "Brand": "Citroen", "ProductionYear": 2016, "Id": 5 },
            { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 },
            { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
            { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 },
            { "Brand": "Seat", "ProductionYear": 2003, "Id": 1 }
        ]);
    });

});
