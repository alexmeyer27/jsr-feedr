//News API dependencies
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8535df6ab9464e74a2a8838bd8adec45');


//API Call example wrapped in function for ease of nameing
var getAllSources = function(){
	newsapi.v2.topHeadlines({
 		sources: 'bbc-news,the-verge',
  		q: 'bitcoin',
  		category: 'business',
  		language: 'en',
  		country: 'us'
	}).then(response => {
  	console.log(response);
});};

//include all sources for this call for the default page

//Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.


module.exports = getAllSources;

//nodejs
//counter