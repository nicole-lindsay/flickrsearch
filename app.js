angular.module('myApp', ['ngAnimate'])
    .controller('myCtrl', function($http) {
        var main = this;
        main.tag = "";
        main.valid = false;
        main.error = false;
        main.foundPhotos = false;
        main.results = [];

        main.getPhoto = function() {
            var url = "https://api.flickr.com/services/rest";
            var params = {
                method: 'flickr.photos.search',
                api_key: '86ea026a9ba3960e6eb98657b7ea5cb9',
                tags: main.tag,
                format: 'json',
                nojsoncallback: 1
            };

            $http({
            	method: 'GET',
            	url: url,
            	params: params
            })
            .then(function(response){
            	main.foundPhotos = true;
            	main.results = response.data.photos;
            	main.error = false;
            	// console.log(main.results); //works here
            },
            function(response){
            	main.error = true;
            });
        };

        main.searchPhoto = function(word){
        	if(word){
        		main.valid = true;
        	} else {
        		main.valid = false;
        		return;
        	}
        	main.word = word;
        	main.getPhoto();
        };

    });