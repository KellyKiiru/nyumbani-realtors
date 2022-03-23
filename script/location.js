$(document).ready(function() {
    $(".btn btn-link").click(function() {
        $("#contact-link").click(function() {
            $("#mc-embedded-subscribe-form").show();
            // $(".pproduct").toggle();
    });




    
      

      
});


function formSubmit() {
    let name = document.getElementById("mc-NAME").value;
    let email = document. getElementById("mc-Email").value;
    let message = document.getElementById("mc-MESSAGE").value;
  
    alert (name + " " + "we have received your message. Thank you for reaching out to us.")
}