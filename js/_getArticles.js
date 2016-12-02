(function() {
  const articleMaker = require('./_articleMaker');


function getArticles(searchTerm) {
      $.ajax({
          url: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + searchTerm,
          // Notice that the dataType is jsonp
          dataType: "jsonp",
          method: 'get'
      })
      .done(function(response) {
          console.log(response);
          $('#wiki').html('').hide();
          for(var i = 0; i < response.query.search.length; i++) {
            var article = articleMaker(response.query.search[i].title, response.query.search[i].snippet);
            $('#wiki').append(article);
          }
          // use the articleMaker function somewhere in here and then
          // append each article to the DOM using jquery's .append() method
          // append only one time, if you can figure out how. The less DOM
          // manipulation, the better
      })
      .then(function() {
        setTimeout(function() {
          $('#wiki').fadeIn();
        }, 1000);
      });
  }

  module.exports = getArticles;
})();
