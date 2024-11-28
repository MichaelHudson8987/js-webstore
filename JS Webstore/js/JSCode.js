//Function for slider
jQuery(function($){
  $(".slider").sss();
});

//Function when Home button is clicked
function clickHome(){
  $("#About").hide();
  $("#Contact").hide();
  $("#Home").show();
}

//Function when About button is clicked
function clickAbout(){
  $("#Home").hide();
  $("#Contact").hide();
  $("#About").show();
}

//Function when Contact button is clicked
function clickContact(){
  $("#Home").hide();
  $("#About").hide();
  $("#Contact").show();
}

//Hides About and Contact pages upon loading webpage
$(document).ready(function(){
  $("#About").hide();
  $("#Contact").hide();
});

//Function for verifying contact us form
function verifyForm(){
  var errors = 0;
  var email = $("#emailAddressControl").val();
  var subject = $("#subjectControl").val();
  var message = $("#messageControl").val();

  //Checking if text boxes are empty, displaying error if so
  if (email == ""){
    $("#emailError").css('display', 'inline-block');
    errors = 1;
  }

  else {
    $("#emailError").css('display', 'none');
  }

  if (subject == ""){
    $("#subjectError").css('display', 'inline-block');
    errors = 1;
  }

  else {
    $("#subjectError").css('display', 'none');
  }

  if (message == ""){
    $("#messageError").css('display', 'inline-block');
    errors = 1;
  }

  else {
    $("#messageError").css('display', 'none');
  }

  //Displaying bootstrap alert if errors detected
  if (errors != 0){
    $("#Contact > div.errorNotification").remove();
    $("#Contact > div.submittedNotification").remove();
    $("#Contact").prepend("<div class='alert alert-danger d-flex justify-content-center errorNotification' id='errorNotification' role='alert'>There are one or more errors</div>");
  }

  
  else {

    //Removing any errors if form is approved
    $("#Contact > div.errorNotification").remove();
    $("#Contact > div.submittedNotification").remove();

    //Displaying bootstrap alert if successful message sent
    $("#Contact").prepend("<div class='alert alert-success d-flex justify-content-center submittedNotification' id='submittedNotification' role='alert'>Message submitted successfully</div>");
    $("#submittedNotification").fadeOut(1600, function(){
      $(this).remove();
    });

    //Assigning entered form data to variable
    const formData = new FormData();
    formData.set("email", email);
    formData.set("subject", subject);
    formData.set("message", message);
    fetchData(formData);

    //Clearing text boxes
    $("#emailAddressControl").val("");
    $("#subjectControl").val("");
    $("#messageControl").val("");
  }
}

//Sending entered values to php file via axios
async function fetchData(formData){
  let response = await axios({
    method: "post",
    url: "./ContactUs.php",
    data: formData
  }).catch(e => {
    console.log(`error: ${e}`);
  });
}

//Function for fancybox
jQuery(document).ready(function($){
  $('[data-fancybox="Gallery"]').fancybox({
  });
});