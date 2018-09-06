//Default page here
let	source,
	author,
	title,
	description,
	url,
	urlToImage,
	publishedAt;

var popUpCreator = function(){
			event.preventDefault()
			$( "#popUp" ).removeClass()
			
			var selectedPopUpTitle = $(event.target).parent();
			
			var hiddenTitle = selectedPopUpTitle.find("#hiddenTitle").text();
			$('#popUpTitle').text(hiddenTitle);

			var hiddenDescription = selectedPopUpTitle.find("#hiddenDescription").text();
			$("#description").text(hiddenDescription);

			var hiddenURL = selectedPopUpTitle.find("#hiddenURL").text();
			$(".popUpAction").attr("href", hiddenURL);
	}				


//On load it should make the intial api call

//main API logic
var generalHeadlineCall = function(){
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
				
				//defining article template
				let articleTemplate = '<section id="main" class="container"><article class="article"><section class="featuredImage"><img src="" alt="" /></section><section class="articleContent"><a href="#"><div id="hiddenWrapper" onclick="popUpCreator()"><h3 id="articleTitle" class="popUpCreator">Test article title</h3><p id="hiddenDescription" class="hidden"></p><p id="hiddenTitle" class="hidden"></p><p id="hiddenURL" class="hidden"></p></div></a><h6 id="category">Lifestyle</h6></section><div class="clearfix"></div></article>'
				
				//appending each article after the header
				$("#popUp").after(articleTemplate);
				
				//adding h1/h3 article title
				$("#articleTitle").html(title);
				$("#hiddenTitle").html(title);
				console.log(title);

				$("#hiddenDescription").html(description);

				$("#hiddenURL").html(url);
				
				//changing image to match article image
				$('img[src=""]').attr("src", urlToImage);
				
				// Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
				$("#category").html("<h6>General</h6>");
				
				console.log(article);
				}
			i++
			$( "#popUp" ).toggleClass( "hidden", true );
			
	 	},
		error: function() {
			alert("Error - api call unsuccessful. Check console");
		}
	})};


(function () {
	//When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the `#main` container with that of the API. The DOM structure of each article must adhere to the `.article` structure.
	$( "#popUp" ).toggleClass( "hidden", false )
	generalHeadlineCall();
})();


//When the user selects an article's title show the `#popUp` overlay. The content of the article must be inserted in the `.container` class inside `#popUp`. Make sure you remove the `.loader` class when toggling the article information in the pop-up.


// document.onload = popUpCreator();


//Clicking/tapping the "Feedr" logo will display the main/default feed.
$("#defaultFeed").click(function(){
	event.preventDefault()
	ajaxCall()
	}
);	


//Add functionality to hide the pop-up when user selects the "X" button on the pop-up.
$("#popUp .closePopUp").click(function(){
	$( "#popUp" ).toggleClass( "hidden", true )
});

//When the user clicks/taps the search icon, expand the input box. Best approach for this is to toggle the `.active` class for the `#search` container. If the search input box is already expanded tapping the search icon again will close the input. Pressing the "Enter" key should also close the opened input box. _See Stretch Goal 2 for search filtering functionality.
var searchBar = document.getElementById("search");
var searchImage = document.getElementById("searchImage");

searchImage.addEventListener('click', function(){
	if (searchBar.classList.contains("active")){
		searchBar.classList.remove("active")
	} else {
		searchBar.classList.add("active")
	};
})

//politico api call
$("#politico").click(function(){
	//attempt to clear out feed - not working
	function clearOutFeed(){
		var i;
		var allElements = document.getElementsByClassName("data");
		for ( i = 0 ; i < allElements.length; i++) {
			allElements[i].innerHTML = "";
		}
	}

	clearOutFeed();

	//jQuery ajax call
	$.ajax({
 		method: "GET",
 		crossDomain: true,
 		url: 'https://newsapi.org/v2/top-headlines',
 		data: {
  	 		apiKey: '8535df6ab9464e74a2a8838bd8adec45',
  	 		sources: 'politico',
 			language: 'en'
	 	},
//most of the logic lives within the success function
		success: function(result) {
			var i;
			var ajaxResult = result;

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
				
				//defining article template
				let articleTemplate = '<section id="main" class="container"><article class="article"><section class="featuredImage"><img src="" alt="" /></section><section class="articleContent"><a href="#"><div id="hiddenWrapper" onclick="popUpCreator()"><h3 id="articleTitle" class="popUpCreator">Test article title</h3><p id="hiddenDescription" class="hidden"></p><p id="hiddenTitle" class="hidden"></p><p id="hiddenURL" class="hidden"></p></div></a><h6 id="category">Lifestyle</h6></section><div class="clearfix"></div></article>'
				
				//appending each article after the header
				$("#popUp").after(articleTemplate);
				
				//adding h1/h3 article title
				$("#articleTitle").html(title);
				$("#hiddenTitle").html(title);
				console.log(title);

				$("#hiddenDescription").html(description);

				$("#hiddenURL").html(url);
				
				//changing image to match article image
				$('img[src=""]').attr("src", urlToImage);
				
				// Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
				$("#category").html("<h6>Politico</h6>");
				
				console.log(article);
				}
			i++
			$( "#popUp" ).toggleClass( "hidden", true );
			
	 	},
		error: function() {
			alert("Error - api call unsuccessful. Check console");
		}
	})});

//washiongton post api call
$("#washingtonPost").click(function(){
	$.ajax({
 		method: "GET",
 		crossDomain: true,
 		url: 'https://newsapi.org/v2/top-headlines',
 		data: {
  	 		apiKey: '8535df6ab9464e74a2a8838bd8adec45',
  	 		sources: 'the-washington-post',
 			language: 'en'
	 	},
	 	//most of the logic lives within the success function
		success: function(result) {
			var i;
			var ajaxResult = result;

			//go into array and make new object with each article
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
				
				//defining article template
				let articleTemplate = '<section id="main" class="container"><article class="article"><section class="featuredImage"><img src="" alt="" /></section><section class="articleContent"><a href="#"><div id="hiddenWrapper" onclick="popUpCreator()"><h3 id="articleTitle" class="popUpCreator">Test article title</h3><p id="hiddenDescription" class="hidden"></p><p id="hiddenTitle" class="hidden"></p><p id="hiddenURL" class="hidden"></p></div></a><h6 id="category">Lifestyle</h6></section><div class="clearfix"></div></article>'
				
				//appending each article after the header
				$("#popUp").after(articleTemplate);
				
				//adding h1/h3 article title
				$("#articleTitle").html(title);
				$("#hiddenTitle").html(title);
				console.log(title);

				$("#hiddenDescription").html(description);

				$("#hiddenURL").html(url);
				
				//changing image to match article image
				$('img[src=""]').attr("src", urlToImage);
				
				// Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
				$("#category").html("<h6>Washington Post</h6>");
				
				console.log(article);
				}
			i++
			$( "#popUp" ).toggleClass( "hidden", true );
			
	 	},
		error: function() {
			alert("Error - api call unsuccessful. Check console");
		}
	})});

//new york times api call
$("#newYorkTimes").click(function(){
	//jQuery ajax call
	$.ajax({
 		method: "GET",
 		crossDomain: true,
 		url: 'https://newsapi.org/v2/top-headlines',
 		data: {
  	 		apiKey: '8535df6ab9464e74a2a8838bd8adec45',
  	 		sources: 'the-new-york-times',
 			language: 'en'
	 	},
	 	//most of the logic lives within the success function
 		//most of the logic lives within the success function
		success: function(result) {
			var i;
			var ajaxResult = result;

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
				
				//defining article template
				let articleTemplate = '<section id="main" class="container"><article class="article"><section class="featuredImage"><img src="" alt="" /></section><section class="articleContent"><a href="#"><div id="hiddenWrapper" onclick="popUpCreator()"><h3 id="articleTitle" class="popUpCreator">Test article title</h3><p id="hiddenDescription" class="hidden"></p><p id="hiddenTitle" class="hidden"></p><p id="hiddenURL" class="hidden"></p></div></a><h6 id="category">Lifestyle</h6></section><div class="clearfix"></div></article>'
				
				//appending each article after the header
				$("#popUp").after(articleTemplate);
				
				//adding h1/h3 article title
				$("#articleTitle").html(title);
				$("#hiddenTitle").html(title);
				console.log(title);

				$("#hiddenDescription").html(description);

				$("#hiddenURL").html(url);
				
				//changing image to match article image
				$('img[src=""]').attr("src", urlToImage);
				
				// Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
				$("#category").html("<h6>New York Times</h6>");
				
				console.log(article);
				}
			i++
			$( "#popUp" ).toggleClass( "hidden", true );
			
	 	},
		error: function() {
			alert("Error - api call unsuccessful. Check console");
		}
	})});