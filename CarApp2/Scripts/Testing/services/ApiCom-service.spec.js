

describe("ApiCom Service Testing", function () {
    beforeEach(module("ApiCom"));
    var httpbackend, service;

    beforeEach(inject(function ($injector) {
        service = $injector.get("DataService");
        httpBackend = $injector.get("$httpBackend");

        httpBackend.when("GET", "http://localhost:56206/api/Car/").respond(
            [
                { "Brand": "Seat", "ProductionYear": 2003, "Id": 1 },
                { "Brand": "Alfa", "ProductionYear": 2007, "Id": 2 },
                { "Brand": "Lada", "ProductionYear": 2005, "Id": 3 },
                { "Brand": "Lada", "ProductionYear": 1998, "Id": 4 },
                { "Brand": "Citroen", "ProductionYear": 2016, "Id": 5 },
                { "Brand": "Audi", "ProductionYear": 2011, "Id": 6 },
                { "Brand": "Lada", "ProductionYear": 1997, "Id": 7 },
                { "Brand": "BMW", "ProductionYear": 1995, "Id": 8 },
                { "Brand": "Audi", "ProductionYear": 2005, "Id": 9 },
                { "Brand": "Audi", "ProductionYear": 1994, "Id": 10 }
            ]
        );
       /*httpBackend.when("POST", "http://localhost:56206/api/Car/", { "Brand": "Seat", "ProductionYear": 2003, "Id": 1 }).respond({
        *    Brand: 'Seat'
        });*/

       
    }));


    it("expects to recieve an array  of length 10 ", function () {
        service.getData().then(function (response) {
            expect(response.data.length).toEqual(10);

        });
    });


 });