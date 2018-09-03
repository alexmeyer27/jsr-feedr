

var ajaxCall = function(){
	$.ajax({
  		method: "GET",
  		crossDomain: true,
  		url: 'https://newsapi.org/v2/top-headlines',
  		data: {
   	 		apiKey: '8535df6ab9464e74a2a8838bd8adec45',
   	 		category: 'general',
 	 		country: 'us',
  			language: 'en'
 	 	},
  		success: function(result) {
  			var articleObjectCreator = function (source, author, title, description, url, urlToImage, publishedAt) {
				this.source = source;
				this.author = author;
				this.title = title;
				this.description = description;
				this.url = url;
				this.urlToImage = urlToImage;
				this.publishedAt = publishedAt;
			}
  			var i = 0;
  			var ajaxResult = result;
 			//go into array and make new object with each article
			for (i = 0; i < ajaxResult.articles.length; i++){
				var articles = ajaxResult.articles;
				var article = new articleObjectCreator(articles[i].source, articles[i].author, articles[i].title, articles[i].description, articles[i].url, articles[i].urlToImage, articles[i].publishedAt)
				$(".featuredImage").attr("src", "article.urlToImage");
				console.log(article);
				return article;
			};
  			console.log(ajaxResult);
 	 	},
  		error: function() {
  			alert("Error - api call unsuccessful. Check console");
  		}
	})};

(function () {
    ajaxCall();
    var appendToPage = function(){
    	
	}
})();

$( window ).on( "load", function() { 

})


/*
  Please add all Javascript code to this file.
*/

//Default page here

//On load it should make the intial api call


//When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the `#main` container with that of the API. The DOM structure of each article must adhere to the `.article` structure.


//When the app is first loading and when the user selects to load a new feed from the dropdown, display the `#popUp` container with the `.loader` class. You can toggle the `.hidden` class from the container to display/hide the overlay container.


//Clicking/tapping the "Feedr" logo will display the main/default feed.
