$(document).ready(function(){
    
    console.log("Script is linked.");
    var secret = 7;
    $('button').click(function(){
        var guess = $('input').val();
        if(secret==guess){
            $('#message').html("You're Right!");
        } else if (guess>secret){
            $('#message').append("too high");
        } else{
       $('#message').append("to low");     
        }

        
        
    })

})