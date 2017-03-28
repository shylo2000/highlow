$(document).ready(function(){
    
    console.log("Script is linked.");
    var secret = 7;
    $('button').click(function(){
        var guess = $('input').val();
        if(secret==guess){
            $('body').append("You're Right!");
        } else if (guess>secret){
            $('body').append("too high");
        } else{
       $('body').append("to low");     
        }

        
        
    })

})