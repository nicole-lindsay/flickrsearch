angular.module('myApp', [require('angular-animate')])
	.controller('myCtrl', function(){
		var main = this;
		main.tag = "";
		main.submitted = false;

		main.submitForm = function(valid){
			main.submitted = true;
		}

		main.reset = function(){
			main.submitted = false;
			main.tag = "";
		};
	});