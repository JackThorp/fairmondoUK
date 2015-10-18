var keystone = require('keystone');

exports = module.exports = function(req,res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  
  locals.section = 'vacancies';
  locals.data = {};

  view.on('init', function(next) {

    var q = keystone.list('vacancies').model
      .find({});

    q.exec(function(err, result) {
      locals.data = result;
      console.log(locals.data);
      next(err)
    });

  });

  view.render('vacancies');

}
