angular.module('myApp', ['ngAnimate'])
    .controller('myCtrl', function($http) {
        var main = this;
        main.tag = "";
        main.placeholder = "";
        main.valid = false;
        main.error = false;
        main.foundPhotos = false;
        main.results = [];

        main.getPhoto = function(tag, page) {
            var url = "https://api.flickr.com/services/rest";
            var params = {
                method: 'flickr.photos.search',
                api_key: '86ea026a9ba3960e6eb98657b7ea5cb9',
                tags: tag,
                format: 'json',
                page: page || 1,
                nojsoncallback: 1
            };

            $http({
                    method: 'GET',
                    url: url,
                    params: params
                })
                .then(function(response) {
                        main.foundPhotos = true;
                        main.results = response.data.photos;
                        main.error = false;
                        var placeholder = tag;
                        main.placeholder = placeholder;
                    },
                    function(response) {
                        console.log("error");
                        main.error = true;
                    });
        };

        main.searchPhoto = function(word, page) {
            if (word) {
                main.valid = true;
            } else {
                main.valid = false;
                return;
            }
            main.word = word;
            main.getPhoto(word, page);
        };

        main.back = function() {
            main.results.page -= 1;
            main.searchPhoto(main.word, main.results.page);
        };

        main.forward = function() {
            main.results.page += 1;
            main.searchPhoto(main.word, main.results.page);
        };
    });