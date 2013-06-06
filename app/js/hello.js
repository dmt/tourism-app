(function() {
  $.ajax("/travel").done(function(data) {
    _.each(data, function(item){ console.log(item);})
    
  });
}());