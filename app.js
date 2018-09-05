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
  			var i;
  			var ajaxResult = result;
  	
  	// 		var articleObjectCreator = function (source, author, title, description, url, urlToImage, publishedAt, category) {
			// 	this.source = source;
			// 	this.author = author;
			// 	this.title = title;
			// 	this.description = description;
			// 	this.url = url;
			// 	this.urlToImage = urlToImage;
			// 	this.publishedAt = publishedAt;
			// }
 			
 			//go into array and make new object with each article
			for (i = 0; i < ajaxResult.articles.length; i++){
				
				var article = ajaxResult.articles[i];

				let	source = article.source,
					author = article.author,
					title = article.title,
					description = article.description,
					url = article.url,
					urlToImage = article.urlToImage,
					publishedAt = article.publishedAt;

				var createComponent = function (article) {

					//create html template to add article information to
					var articleTemplate = 
					'<div id="popUp" class="loader hidden"><a href="#" class="closePopUp">X</a><div class="container"><h1>{article title}</h1><p>{description}</p><a href="{link}" class="popUpAction" target="_blank">Read more from source</a></div></div><section id="main" class="container"><article class="article"> <section class="featuredImage"><img src="{image}" alt="" /></section><section class="articleContent"><a href="#"><h3>Test article title</h3></a><h6 class="category">General</h6></section><div class="clearfix"></div></article>';

					var addToPage = function() {
    					$('#main').append(articleTemplate);
					}		

					articleTemplate.replace('{image}', urlToImage);
					articleTemplate.replace('{article title}', title);

					addToPage();
				}
				
				// var article = new articleObjectCreator(articles[i].source, articles[i].author, articles[i].title, articles[i].description, articles[i].url, articles[i].urlToImage, articles[i].publishedAt)
				//append each article to a component
				createComponent(article);
				i++;
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




	// //Each article must provide an image source for the circular thumbnail at the left of the article.
	// let image = $(".featuredImage img").attr("src", article.urlToImage);
	
	// let image = $(".featuredImage img").attr("src", article.urlToImage);
	// $(".featuredImage").addClass("featuredImage")
	// articleTemplate.appendChild(image);

	
	// //Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
	// $(".category").html("<h6>General</h6>");
	
	// //Must provide either a full version or a summary of the article for the pop up screen.
	// $(".category").html("<h6>General</h6>");

	// //Change the link of the "Read more from source" button to that of the respective article.
	// $(".featuredImage img").attr("src", article.urlToImage);

	//upon successful api cal, add the html template to the page with article information inserted
	
	// $(document).ajaxSuccess();



//Add functionality to hide the pop-up when user selects the "X" button on the pop-up.
$("#popUp .closePopUp").click(function(){
	$( "#popUp" ).toggleClass( "hidden", true )
});

//When the user clicks/taps the search icon, expand the input box. Best approach for this is to toggle the `.active` class for the `#search` container. If the search input box is already expanded tapping the search icon again will close the input. Pressing the "Enter" key should also close the opened input box. _See Stretch Goal 2 for search filtering functionality.

//When the user selects an article's title show the `#popUp` overlay. The content of the article must be inserted in the `.container` class inside `#popUp`. Make sure you remove the `.loader` class when toggling the article information in the pop-up.






