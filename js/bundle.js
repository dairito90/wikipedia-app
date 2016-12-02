(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function () {
      function articleMaker(title, snippet) {

            var article = "";
            article += "<div class=\"article\">";
            // article += '<h3>' + title + '</h3>';
            article += "<h3>" + title + "</h3>";
            article += "<p>" + snippet + "</p>";
            article += "</div>";

            return article;
      }
      module.exports = articleMaker;
})();

},{}],2:[function(require,module,exports){
"use strict";

(function () {
  var articleMaker = require('./_articleMaker');

  function getArticles(searchTerm) {
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + searchTerm,
      // Notice that the dataType is jsonp
      dataType: "jsonp",
      method: 'get'
    }).done(function (response) {
      console.log(response);
      $('#wiki').html('').hide();
      for (var i = 0; i < response.query.search.length; i++) {
        var article = articleMaker(response.query.search[i].title, response.query.search[i].snippet);
        $('#wiki').append(article);
      }
      // use the articleMaker function somewhere in here and then
      // append each article to the DOM using jquery's .append() method
      // append only one time, if you can figure out how. The less DOM
      // manipulation, the better
    }).then(function () {
      setTimeout(function () {
        $('#wiki').fadeIn();
      }, 1000);
    });
  }

  module.exports = getArticles;
})();

},{"./_articleMaker":1}],3:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    var getArticles = require('./_getArticles');

    // When click on "search" button, run the getArticles function and pass in
    // the value of the search box as a parameter to the getArticles function
    $('#btn').click(function () {
        getArticles($("#imp").val());
        // code here
    });

    // BONUS: delete the searchButton element and it's code above, and do the
    // code below instead.

    // When focused on the search box and the enter/return button is pressed,
    // get the articles and pass the value of the search box to your getArticles
    // function
    $("#searchBox").on("keydown", function (event) {});
});

},{"./_getArticles":2}]},{},[3]);
