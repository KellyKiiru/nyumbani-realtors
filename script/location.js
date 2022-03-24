$(document).ready(function() {
    $(".clickable").click(function() {
        $("#mc-embedded-subscribe-form").toggle();
        $(".clickable").toggle();
      });

    $(".hide").click(function() {
        $("#mc-embedded-subscribe-form").toggle();
        $(".clickable").toggle();
      });




    
      

      
});


function formSubmit() {
    let name = document.getElementById("mc-NAME").value;
    let email = document. getElementById("mc-Email").value;
    let message = document.getElementById("mc-MESSAGE").value;
  
    alert ("Hello" + "," + name + "." + "Thank you for contacting us. An agent will reach out soon.");

    document.getElementById("username").innerHTML=name;
    // document.getElementById("usermail").innerHTML=email;
    // document.getElementById("usermessage").innerHTML=message;
}