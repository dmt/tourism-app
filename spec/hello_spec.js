describe("the main page", function() {
	it("loads travel destinations", function() {
		spyOn($, "ajax").andReturn({done: function(){}});

		app.loadDestinations();

		expect($.ajax).toHaveBeenCalledWith("/travel");
	});
	it("calls the template with the data", function() {
		// this serves as an example why capturing callback functions to test sucks
		var doneSpy = jasmine.createSpy('done'),
			data = [{id:23}],
			callback;
		spyOn($, "ajax").andReturn({done: doneSpy});
		spyOn(JST, "app/templates/destinations.hb");
		app.loadDestinations();
		callback = doneSpy.mostRecentCall.args[0];

		callback(data);
		
		expect(JST["app/templates/destinations.hb"]).toHaveBeenCalledWith(data);
	});
});
