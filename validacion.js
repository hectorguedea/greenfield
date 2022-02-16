$(document).ready(function () {


    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
      }
    
    
      $("#contact-form .submit").click(function (e) {
        e.preventDefault();
    
        $(".success-0").hide();
    
        var data = {
          name: $("#name").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
          message: $("#message").val(),
          success: 0,
        };
    
        if (
          data.name != "" &&
          validateEmail(data.email) &&
          data.message
        ) {
          ajax(data);
        } else {
          $(".success-0")
            .fadeIn(1000)
            .html(
              '<div class="alert alert-warning">Por favor, verifica tu información</div>'
            );
        }
      });

      
      function ajax(data) {
        $.ajax({
          type: "POST",
          url: "email.php",
          data: data,
          datatype: "html",
          success: function (msg) {
            $(".success-" + data.success)
              .fadeIn(1000)
              .html(msg);
            $("form")[0].reset();
          },
        });
      }
    
            });
      