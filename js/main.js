$(document).ready(function() {

    const getArticles = require('./_getArticles');


    // When click on "search" button, run the getArticles function and pass in
    // the value of the search box as a parameter to the getArticles function
    $('#btn').click(() => {
        getArticles($("#imp").val());
        // code here
    });


    // BONUS: delete the searchButton element and it's code above, and do the
    // code below instead.

    // When focused on the search box and the enter/return button is pressed,
    // get the articles and pass the value of the search box to your getArticles
    // function
    $("#searchBox").on("keydown", function(event) {

    });

});
