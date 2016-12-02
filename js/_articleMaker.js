(function() {
  function articleMaker(title, snippet) {


      var article = "";
      article += `<div class="article">`;
      // article += '<h3>' + title + '</h3>';
      article += `<h3>${title}</h3>`;
      article +=`<p>${snippet}</p>`;
      article += `</div>`;


      return article;
  }
module.exports = articleMaker;
})();
