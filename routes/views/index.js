var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
  locals.data = {};

  view.on('init', function(next) {
    var q = keystone.list('PageContent').model
      .find({page: 'home'});

    q.exec(function(err, result) {
    
      var i, l = result.length;

      for(i = 0; i <  l; i++) {
        locals.data[result[i].sectionTitle] = result[i];
      }
      console.log(locals.data);
      next(err)
    });
  });
  

	// Render the view
	view.render('index');
	
};
