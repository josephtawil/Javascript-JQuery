//if you want to use JQuery you need to start out with a $.
$(document).ready(function(){
    console.log("JQuery is hooked up properly.")
    //vanilla javascript
    var $h1 = document.createElement("h1");
    //this code is JQuery and is the same as the line above
    var $h1 = $("<h1>");
    //vanilla javascript
    $h1.textContent = "Hello World";
    //JQuery used to give text to the $h1
    $h1.text("Hello World");
    //JQuery adding $h1 element into the body of the html page
    $("body").append($h1);
    //
    $("#todoContainer").append($h1);
    //the element <h5> is the size of the element 
    var $h5 = $("<h5>");

    $h5.text("My name is Joseph");

    $("#todoContainer").append($h5);
});