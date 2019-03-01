// JavaScript File
/* global $ */

$(document).ready(function(){
        $("input#button").click(function(){
            console.log("hi");
            var ratingVal = $("input[name='rate']:checked").val();
            if(ratingVal){
                alert("Thanks for giving a rating of " + ratingVal + "!");
            }
        });
        
    }); 