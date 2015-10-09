$(function() {
 
  var $form = $('form');

  $form.on('submit', function(e) {
   
    console.log('submitting form');
    e.preventDefault();
    register($form);
    
  })

});

function register($form) {

  var alertBox;

  console.log($form.serialize());
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    success: function(data) {
      alertBox = $('#mce-responses .alert-success');
      alertBox.html('Thanks for subscribing, you should receive a confirmation email shortly.');
      alertBox.show();
      console.log('success');
    },
    error: function(err, text, string) {
      alertBox = $('#mce-responses .alert-danger');
      alertBox.html(err.responseText);
      alertBox.show(); 

      console.log(err)
    }
  });
}

