setInterval(function () {
  var myTime = new Date();
  var nHours = myTime.getHours();
  var nMinutes = myTime.getMinutes();
  var nSeconds = myTime.getSeconds();
  var amPm = " AM";
  var strHours = nHours;
  var strMinutes = nMinutes;
  var strSeconds = nSeconds;

  
  if (nHours > 11) {
    amPm = " PM";
  } else {
    amPm = " AM";
  }
  
  if (nHours > 12) {
    strHours -= 12;
  }
  
  if (nHours === 0) {
    strHours = 12;
  }

  if (nMinutes < 10) {
    strMinutes = '0' + nMinutes;
  }

  if (nSeconds < 10) {
    strSeconds = '0' + nSeconds;
  }

  var myString = strHours + ":" + strMinutes + ":" + strSeconds + amPm;
    
  $('#myClock').text(myString);
  
}, 1000);

// Function showModal shows the modal
function showModal() {
  $('#modal-container').show("fold", 1000);
}

//function hideModal hides the modal
function hideModal() {
  $("#modal-container").hide("fold", 1000);
}

// Function showThankYou displays the Thank You message after user has entered her e-mail
var showThankYou = function() {
	$("#newsletter-header").text("Thank you for signing up!");
    $("#newsletter-signup").hide();
    setTimeout(hideModal, 2000);
}


// function setup attaches event listeners to the hide, show and Submit buttons
function setup() {
  $("#SignUp").click(showModal);
  
  $("#modal-hide").click(hideModal);
  
    
    $("#newsletter-signup").on("submit", function(evt) {
		evt.preventDefault(); // don't ACTUALLY send the form ;)
		// do something when the form is submitted
		showThankYou();
	}); 
    $(document).on("keyup", function (e) {
        if (e.keyCode === 27) {
            hideModal();
        };
    });
}

//don't call setup until DOM content is loaded
$(document).ready(setup);
