describe("Unit Test services", function (){
    //testing xhr.js
    var httpBackend, guidelinesService;
    beforeEach(function (){
        module("app.services");
        inject(["$httpBackend", "guidelinesCategories", function ($httpBackend, guidelines){
            httpBackend = $httpBackend;
            guidelinesService = guidelines;

        }]);
    });

    afterEach(function (){
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("should make a successfull http request", function () {
        var results;
        var test_data = [
            {
                "id": 2,
                "name": "Accident and Injury Prevention",
                "code": 80,
                "hasContent":true
            }
        ];

        httpBackend
        .expectGET("http://guidelines.health.go.ke:8000/api/portal/categories/")
        .respond(200, test_data);

        guidelinesService.categories('api/portal/categories/').then(function(data){
            results = data.data;
        });

        httpBackend.flush();
        expect(results).toEqual(test_data);
    });

});