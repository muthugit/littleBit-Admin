var PostsList = Parse.Object.extend("posts");
app.controller('postCtrl', [ '$scope', '$routeParams',
		function($scope, $routeParams,$localStorage, $sessionStorage, $window) {
			var postId = $routeParams.postId;
			$scope.post = [];
//			if ($localStorage.postId) {
//				console.log("Item found in cache");
//				$scope.$apply(function() {
//					$scope.post.push(cacheItem);
//				});
//			} else {
				var query = new Parse.Query(PostsList);
				query.get(postId, {
					success : function(results) {
						$scope.$apply(function() {
							$scope.post.push(results);
							localStorage.setItem(postId, results);
						});
					}
				});
//			}
		} ]);
