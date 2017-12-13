//business logic
var userNumber = [];
function pingPong (inputtedNumber){
    for (var index = 1; index <= inputtedNumber; index+=1){
        if(index % 15 === 0){
            userNumber.push("pingpong");
        }
        else if(index % 5 === 0){
            userNumber.push("pong");
        }
        else if(index % 3 === 0){
            userNumber.push("ping");
        }
        else{
            userNumber.push(index);
        }
    }
}
//user interface logic
$(document).ready(function(){
   $("form#ping-pong").submit(function(){
      event.preventDefault();
      var inputtedNumber = parseInt($("input#number").val());

      pingPong(inputtedNumber);

      userNumber.forEach(function(number){
         $("#output").append('<li>' + number + "</li>");
      });
   });
});
