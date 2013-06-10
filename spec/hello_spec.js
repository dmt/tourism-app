describe("the main page", function() {
	it("loads travel destinations", function() {
		spyOn($, "ajax").andReturn({done: function(){}});

		app.loadDestinations();

		expect($.ajax).toHaveBeenCalledWith("/travel");
	});
	describe("the travel destinations done callback", function() {
		var data = [{id:23}],
			callback;
		beforeEach(function(){
			// this serves as an example why capturing callback functions to test sucks
			var doneSpy = jasmine.createSpy('done');
			spyOn($, "ajax").andReturn({done: doneSpy});
			app.loadDestinations();
			callback = doneSpy.mostRecentCall.args[0];

		});
		it("calls the template with the data", function() {
			spyOn(JST, "app/templates/destinations.hb");

			callback(data);
			
			expect(JST["app/templates/destinations.hb"]).toHaveBeenCalledWith(data);
		});

	});
});
