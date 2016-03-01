app.controller('postController', [ '$scope', '$firebaseArray',
		function($scope, $firebaseArray) {
			var ref = new Firebase("https://littlebit.firebaseio.com/posts/");
			$scope.messages = $firebaseArray(ref);

			var $form = $('form');
			var data = $form.serializeArray().filter(function(k) {
				console.log("-------" + k.value);
				return $.trim(k.value) != "";
			});
			var dataIP = {};
			$.each(data, function(i, field) {
				dataIP[field.name] = field.value;
			});

			$scope.messages.$add({
				rr:dataIP,			
			});
		} ]);

function getFormObjects() {

	return dataIP;
}