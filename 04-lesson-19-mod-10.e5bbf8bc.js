!function(){var n={headers:{"X-Api-Key":"9d46ea07e04d4f7f9708dcaed27cd554"}},e=document.querySelector("form"),t=document.querySelector("#newswrapper");function r(n){t.innerHTML=n}function c(n){console.log(n),r("<p>Articles not found</p>")}console.log(t),e.addEventListener("submit",(function(e){e.preventDefault(),console.log("onSubmit");var t=e.currentTarget,o=t.elements.news.value.trim();console.log(o),(a=o,i="https://newsapi.org/v2/everything?q=".concat(a),fetch(i,n).then((function(n){return n.json()}))).then((function(n){var e=n.articles;if(0===e.length)throw new Error("No data");return console.log(e),e.reduce((function(n,e){return function(n){var e=n.author,t=n.title,r=n.url,c=n.urlToImage,o=n.description;return'\n    <div class ="article-card">\n        <img src='.concat(c,' class="article-img">\n        <h2 class="article-title">').concat(t,'</h2>\n        <h3 class="article-author">').concat(e||"anonymous",'</h3>\n        <p class="article-description">').concat(o,"</p>\n        <a href=").concat(r,' class="article-link" target="_blank">Read more</a>\n    </div>\n    ')}(e)+n}),"")})).then(r).catch(c).finally((function(){return t.reset()}));var a,i}))}();
//# sourceMappingURL=04-lesson-19-mod-10.e5bbf8bc.js.map
