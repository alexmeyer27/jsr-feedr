//Default page here

//main API logic
var ajaxCall = function(){
	//jQuery ajax call
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
 	 	//most of the logic lives within the success function
  		success: function(result) {
  			var i = 0;
  			var ajaxResult = result;
  			var articleObjectCreator = function (source, author, title, description, url, urlToImage, publishedAt) {
				this.source = source;
				this.author = author;
				this.title = title;
				this.description = description;
				this.url = url;
				this.urlToImage = urlToImage;
				this.publishedAt = publishedAt;
			}
 			//go into array and make new object with each article
			for (i = 0; i < ajaxResult.articles.length; i++){
				var articles = ajaxResult.articles;
				var article = new articleObjectCreator(articles[i].source, articles[i].author, articles[i].title, articles[i].description, articles[i].url, articles[i].urlToImage, articles[i].publishedAt)
				//append each article to a component
				createComponent(article);
				appendToPage();
				console.log(article);
				// return article;
			};
  			console.log(ajaxResult);
 	 	},
  		error: function() {
  			alert("Error - api call unsuccessful. Check console");
  		}
	})};

//On load it should make the intial api call
(function () {
	//When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the `#main` container with that of the API. The DOM structure of each article must adhere to the `.article` structure.
	$( "#popUp" ).toggleClass( "hidden", false );
    ajaxCall();
    $(document).ajaxSuccess(function(){
    	$( "#popUp" ).toggleClass( "hidden", true );
    })
})();

//Clicking/tapping the "Feedr" logo will display the main/default feed.
$("#defaultFeed").click(function(){
	event.preventDefault()
	ajaxCall()
	}
);

var createComponent = function (article) {
	//Each article must provide an image source for the circular thumbnail at the left of the article.
	//Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
	//Must provide either a full version or a summary of the article for the pop up screen.
	//When the user selects an article's title show the `#popUp` overlay. The content of the article must be inserted in the `.container` class inside `#popUp`. Make sure you remove the `.loader` class when toggling the article information in the pop-up.
	//Change the link of the "Read more from source" button to that of the respective article.
}

var appendToPage = function () {

}


//Add functionality to hide the pop-up when user selects the "X" button on the pop-up.
$("#popUp .closePopUp").click(function(){
	$( "#popUp" ).toggleClass( "hidden", true )
});
//When the app is first loading and when the user selects to load a new feed from the dropdown, display the `#popUp` container with the `.loader` class. You can toggle the `.hidden` class from the container to display/hide the overlay container.



