$(document).ready(function() {
    var showList = ["red", "magenta", "yellow"];

    $.ajax('data.json', {
        success: function(response){
            
                
            $.each(response, function(index, myObj) {
                var $el = $('body').children().last();
                var color = myObj.value;
                for (var i=0; i < showList.length; i++) {
                if (myObj.color == showList[i]) {
                $el.append("<div><p class='white'>" + myObj.color + "</p></div>");
                $el.children().last().css("background-color",color);
            };
            };
         });

        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

});