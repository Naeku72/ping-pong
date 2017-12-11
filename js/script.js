//business logic
var userNumber = [];
function pingPong (number){
    for (var index = 1; index <= number; index+=1){
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
