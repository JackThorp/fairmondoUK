var keystone = require('keystone');

exports = module.exports = function(req,res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  
  locals.section = 'about';
  locals.data = {
    sections: []
  };

  view.on('init', function(next) {
    
    var q = keystone.list('PageContent').model
      .find({page: 'about'})
      .sort('order')
      .populate('author');

    q.exec(function(err, result) {
      locals.data.sections = result;
      next(err)
    });

  });

  view.render('about');

}
