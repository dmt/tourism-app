describe("the main page", function() {
	it("loads travel destinations", function() {
		spyOn($, "ajax").andReturn({done: function(){}});

		app.loadDestinations();

		expect($.ajax).toHaveBeenCalledWith("/travel");
	});
});
