angular.module('myApp', ['ngAnimate'])
	.controller('myCtrl', function(){
		var main = this;
		main.tag = "";
		main.submitted = false;
		main.searchMsg = false;
		main.imgMsg = "";
		main.apiMsg = "";

		main.submitForm = function(tag){
			console.log("something");
			main.submitted = true;
			main.searchMsg = true;
			main.tag = "";
		}

	});