window.initPage = function() {
	app.loadDestinations();
};
(function($) {
	var loadDestinations;

	loadDestinations = function () {
		$.ajax("/travel").done(function(data) {
			JST["app/templates/destinations.hb"](data);

		});
	};
	window.app = window.app || {};
	app.loadDestinations = loadDestinations;
})(jQuery);