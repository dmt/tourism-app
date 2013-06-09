	window.initPage = function() {
		debugger;
		app.loadDestinations();
	};
(function($) {
	var loadDestinations;

	loadDestinations = function () {
		$.ajax("/travel").done(function(data) {
			_.each(data, function(item){ console.log(item);});

		});
	};
	window.app = window.app || {};
	app.loadDestinations = loadDestinations;
})(jQuery);