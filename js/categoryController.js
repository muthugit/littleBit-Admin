var PostsList = Parse.Object.extend("posts");
app.controller('categoryController', function($scope, $localStorage,
		$sessionStorage, $window) {
	$scope.triggerElement = true;
	var show = function() {
		console.log("Calling show()");
		$scope.posts = [];
		var query = new Parse.Query(PostsList).include("site");
		query.find({
			success : function(results) {
				$scope.$apply(function() {
					for (i = 0; i < results.length; i++) {
						console.log("RRR" + results[i].id);
						var postId = results[i].id;
						$localStorage.postId = results[i];
						$scope.posts.push(results[i]);
						console.log("Stored in cache: ");
					}
				});
			}
		});
		
	}
	show();
	$scope.show = function() {
		show();
	}
});
