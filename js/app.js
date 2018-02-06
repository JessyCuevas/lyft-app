//*Splash*//
$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeIn(1500).fadeOut(1500);
    },1000);
  
  setTimeout(function() {
        $(".content2").fadeIn(1500);
    },3000);


	$("#singup").click(loginClick);
  $("#celphone").keyup(inputPhone);
  $("#next").click(sendCode);
  $("#resendCode").click(sendCode);
  $("#verifyCode").click(inputDone);
  $("#submit").click(buttonSend);

});

    var $btnNext = $('#next');
    var $btnDone = $('#verifyCode');

function loginClick() {
	window.location.href = "views/registro.html";
}

function inputPhone () {
    if ($(this).val().length === 10){
    	 $btnNext.attr({
        disabled: false,
        href: '../views/verificar.html'
      });
    } else {
      $btnNext.attr('disabled', 'disabled');

    }
  }

// 

// function inputDone() {
//     $btnDone.attr({
//         disabled: true,
//         href: '../form.html'
//    $('#verifyCode').attr('disabled', 'disabled');
//   }
// }

function sendCode (){
	var code =  Math.floor((Math.random() * 1000) + 3);
	alert(code);
  localStorage.Code = code;	
}

function buttonSend() {
    $('#submit').attr('disabled', 'disabled');
  }

