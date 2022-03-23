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
  
    alert ("Hello" + "," + name + "." + "We have received your message. An agent will reach out to you as soon as possible.");
}