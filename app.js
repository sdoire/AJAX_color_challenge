$(document).ready(function() {
    $.ajax('data.json', {
        success: function(response){
            $.each(response, function(index, myObj) {
                var $el = $('body').children().last();
                $el.append("<div><p>" + myObj.color + "</p></div>");
                var color = myObj.value;
                $el.children().last().css("background-color",color);
            })

        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

});