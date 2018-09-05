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
				let articleTemplate = '<section id="main" class="container"><article class="article"><section class="featuredImage"><img src="" alt="" /></section><section class="articleContent"><a href="#"><h3 id="articleTitle">Test article title</h3></a><h6 id="category">Lifestyle</h6></section><div class="clearfix"></div></article>'
				
				//appending each article after the header
				$("header").after(articleTemplate);
				
				//adding h1/h3 article title
				$("#articleTitle").html(title);
				
				//changing image to match article image
				$('img[src=""]').attr("src", urlToImage);
				
				// Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
				$("#category").html("<h6>General</h6>");

				}
			i++;
 			console.log(ajaxResult);
	 	},
 		error: function() {
 			alert("Error - api call unsuccessful. Check console");
 		}
	})};


//for popup function
//document.getElementById("popUpTitle").innerHTML = title;
//Must provide either a full version or a summary of the article for the pop up screen.
//document.getElementById("description").innerHTML = description;
// //Change the link of the "Read more from source" button to that of the respective article.
//$('.popUpAction').attr("href", article.url);


// $( "#popUp" ).toggleClass( "hidden", true );

//On load it should make the intial api call
(function () {
	//When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the `#main` container with that of the API. The DOM structure of each article must adhere to the `.article` structure.
	
	$( "#popUp" ).toggleClass( "hidden", false );
   ajaxCall();
})();

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
$("#search").click(function(){
	$("#search").toggleClass("active", true)
});

$("#searchImage").click(function(){
	$("#search").toggleClass("active", false);
})

// if ($("#search").hasClass('active')){
// 		$(document).click(function(){
// 			$("#search").removeClass("active");
// 		})
// 		$("#popUp").click(function(){
// 			$("#search").removeClass("active");
// 		})
// 		$(document).keypress(function(e) {
//     		if(e.which == 13) {
//         		$("#search").removeClass("active");
//     }
// })} else {}; 

//When the user selects an article's title show the `#popUp` overlay. The content of the article must be inserted in the `.container` class inside `#popUp`. Make sure you remove the `.loader` class when toggling the article information in the pop-up.
$("#popUpTitle").click(function() {
		event.preventDefault();
		$("#description").toggleClass("hidden", false);
	}
)

// //politico api call
// $("#politico").click(function(){
// 	// event.preventDefault()
//  	$("#main").each(function() {
//     	$("#main").html("");
//     }
//   });
// });
// 	$('#main').html("");
// 	//jQuery ajax call
// 	$.ajax({
//   		method: "GET",
//   		crossDomain: true,
//   		url: 'https://newsapi.org/v2/top-headlines',
//   		data: {
//    	 		apiKey: '8535df6ab9464e74a2a8838bd8adec45',
//    	 		sources: 'politico',
//   			language: 'en'
//  	 	},
//  	 	//most of the logic lives within the success function
//   		success: function(result) {
//   			var i;
//   			var ajaxResult = result;

//  			//go into array and make new object with each article
// 			for (i = 0; i < ajaxResult.articles.length; i++){
				
// 				var article = ajaxResult.articles[i];

// 				let	source = article.source,
// 					author = article.author,
// 					title = article.title,
// 					description = article.description,
// 					url = article.url,
// 					urlToImage = article.urlToImage,
// 					publishedAt = article.publishedAt;

// 				//defining article template

// 				let articleTemplate = '<div class="container"><h1 id="articleTitle">Article title here</h1><p id="description" class="hidden">Article description/content here.</p><a href="#" class="popUpAction" target="_blank">Read more from source</a></div></div><section id="main" class="container"><article class="article"><section class="featuredImage"><img src="" alt="" /></section><section class="articleContent"><a href="#"><h3 id="popUpTitle">Test article title</h3></a><h6 id="category">Lifestyle</h6></section><div class="clearfix"></div>'
				
// 				//appending each article after the header
// 				$("header").after(articleTemplate)
				
// 				//adding h1/h3 article title
// 				document.getElementById("articleTitle").innerHTML = title;
// 				document.getElementById("popUpTitle").innerHTML = title;
				
// 				//changing image to match article image
// 				$('img[src=""]').attr("src", urlToImage);
				
// 				//Must provide either a full version or a summary of the article for the pop up screen.
// 				document.getElementById("description").innerHTML = description;
	
// 				// Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
// 				document.getElementById("category").innerHTML = "Politico";

// 			// //Change the link of the "Read more from source" button to that of the respective article.
// 			$('.popUpAction').attr("href", article.url);
// 				}
// 			i++;
//   			console.log(ajaxResult);
//  	 	},
//   		error: function() {
//   			alert("Error - api call unsuccessful. Check console");
//   		}
// 	})};

// //washiongton post api call
// $("#washingtonPost").click(function(){
// 	event.preventDefault();
// 	$('#popUp').empty();
// 	$('#main').empty();
// 	//jQuery ajax call
// 	$.ajax({
//   		method: "GET",
//   		crossDomain: true,
//   		url: 'https://newsapi.org/v2/top-headlines',
//   		data: {
//    	 		apiKey: '8535df6ab9464e74a2a8838bd8adec45',
//    	 		sources: 'the-washington-post',
//   			language: 'en'
//  	 	},
//  	 	//most of the logic lives within the success function
//   		success: function(result) {
//   			var i;
//   			var ajaxResult = result;

//  			//go into array and make new object with each article
// 			for (i = 0; i < ajaxResult.articles.length; i++){
				
// 				var article = ajaxResult.articles[i];

// 				let	source = article.source,
// 					author = article.author,
// 					title = article.title,
// 					description = article.description,
// 					url = article.url,
// 					urlToImage = article.urlToImage,
// 					publishedAt = article.publishedAt;

// 				//defining article template

// 				let articleTemplate = '<div class="container"><h1 id="articleTitle">Article title here</h1><p id="description" class="hidden">Article description/content here.</p><a href="#" class="popUpAction" target="_blank">Read more from source</a></div></div><section id="main" class="container"><article class="article"><section class="featuredImage"><img src="" alt="" /></section><section class="articleContent"><a href="#"><h3 id="popUpTitle">Test article title</h3></a><h6 id="category">Lifestyle</h6></section><div class="clearfix"></div>'
				
// 				//appending each article after the header
// 				$("header").after(articleTemplate)
				
// 				//adding h1/h3 article title
// 				document.getElementById("articleTitle").innerHTML = title;
// 				document.getElementById("popUpTitle").innerHTML = title;
				
// 				//changing image to match article image
// 				$('img[src=""]').attr("src", urlToImage);
				
// 				//Must provide either a full version or a summary of the article for the pop up screen.
// 				document.getElementById("description").innerHTML = description;
	
// 				// Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
// 				document.getElementById("category").innerHTML = "Washington Post";

// 			// //Change the link of the "Read more from source" button to that of the respective article.
// 			$('.popUpAction').attr("href", article.url);
// 				}
// 			i++;
//   			console.log(ajaxResult);
//   			$( "#popUp" ).toggleClass( "hidden", true );
//  	 	},
//   		error: function() {
//   			alert("Error - api call unsuccessful. Check console");
//   		}
// 	})});

// //new york times api call
// $("#newYorkTimes").click(function(){
// 	event.preventDefault();
// 	$('#popUp').empty();
// 	$('#main').empty();
// 	//jQuery ajax call
// 	$.ajax({
//   		method: "GET",
//   		crossDomain: true,
//   		url: 'https://newsapi.org/v2/top-headlines',
//   		data: {
//    	 		apiKey: '8535df6ab9464e74a2a8838bd8adec45',
//    	 		sources: 'the-new-york-times',
//   			language: 'en'
//  	 	},
//  	 	//most of the logic lives within the success function
//   		success: function(result) {
//   			var i;
//   			var ajaxResult = result;

//  			//go into array and make new object with each article
// 			for (i = 0; i < ajaxResult.articles.length; i++){
				
// 				var article = ajaxResult.articles[i];

// 				let	source = article.source,
// 					author = article.author,
// 					title = article.title,
// 					description = article.description,
// 					url = article.url,
// 					urlToImage = article.urlToImage,
// 					publishedAt = article.publishedAt;

// 				//defining article template

// 				let articleTemplate = '<div class="container"><h1 id="articleTitle">Article title here</h1><p id="description" class="hidden">Article description/content here.</p><a href="#" class="popUpAction" target="_blank">Read more from source</a></div></div><section id="main" class="container"><article class="article"><section class="featuredImage"><img src="" alt="" /></section><section class="articleContent"><a href="#"><h3 id="popUpTitle">Test article title</h3></a><h6 id="category">Lifestyle</h6></section><div class="clearfix"></div>'
				
// 				//appending each article after the header
// 				$("header").after(articleTemplate)
				
// 				//adding h1/h3 article title
// 				document.getElementById("articleTitle").innerHTML = title;
// 				document.getElementById("popUpTitle").innerHTML = title;
				
// 				//changing image to match article image
// 				$('img[src=""]').attr("src", urlToImage);
				
// 				//Must provide either a full version or a summary of the article for the pop up screen.
// 				document.getElementById("description").innerHTML = description;
	
// 				// Must provide either a category, tag, or custom taxonomy to display below the title (of course title of article is also required).
// 				document.getElementById("category").innerHTML = "New York Times";

// 			// //Change the link of the "Read more from source" button to that of the respective article.
// 			$('.popUpAction').attr("href", article.url);
// 				}
// 			i++;
//   			console.log(ajaxResult);
//   			$( "#popUp" ).toggleClass( "hidden", true );
//  	 	},
//   		error: function() {
//   			alert("Error - api call unsuccessful. Check console");
//   		}
// 	})});