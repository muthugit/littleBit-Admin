/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('littleBitAdminApp', [ 'ngRoute', 'ngStorage',
		'firebase' ]);

/**
 * Configure the Routes
 */
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
	// Home
	.when("/", {
		templateUrl : "core/home.html",
		controller : "PageCtrl"
	})
	// Pages
	.when("/about", {
		templateUrl : "core/about.html",
		controller : "PageCtrl"
	}).when("/media", {
		templateUrl : "core/media.html",
		controller : "PageCtrl"
	}).when("/contents", {
		templateUrl : "core/contents.html",
		controller : "PageCtrl"
	}).when("/products", {
		templateUrl : "core/products.html",
		controller : "PageCtrl"
	}).when("/contact", {
		templateUrl : "core/contact.html",
		controller : "PageCtrl"
	})
	// Blog
	.when("/blog", {
		templateUrl : "core/blog.html",
		controller : "BlogCtrl"
	}).when("/p/:postId/", {
		templateUrl : "core/blog.html",
		controller : "postCtrl"
	}).when("/blog/post", {
		templateUrl : "core/blog_item.html",
		controller : "BlogCtrl"
	})

	.when("/c/:categoryId/", {
		templateUrl : "core/categoryList.html",
		controller : "TestCtrl"
	})
	// else 404
	.otherwise("/404", {
		templateUrl : "core/404.html",
		controller : "PageCtrl"
	});
} ]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function(/* $scope, $location, $http */) {
	console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function(/* $scope, $location, $http */) {
	console.log("Page Controller reporting for duty.");

	// Activates the Carousel
	$('.carousel').carousel({
		interval : 5000
	});

	// Activates Tooltips for Social Links
	$('.tooltip-social').tooltip({
		selector : "a[data-toggle=tooltip]"
	})
});

app.controller('TestCtrl', [ '$scope', '$routeParams',
		function($scope, $routeParams) {
			var param1 = $routeParams.categoryId;
			console.log(param1);
		} ]);

function save() {
	getRichTextValue();
	var $form = $('form');
	var formObj = Parse.Object.extend("posts");
	var formData = new formObj();
	var data = $form.serializeArray().filter(function(k) {
		console.log(k.value);
		return $.trim(k.value) != "";
	});
	var fileUploadControl = $("#featuredImage")[0];
	if (fileUploadControl.files.length > 0) {
		console.log("File exists");
		var file = fileUploadControl.files[0];
		var name = "photo.jpg";
		var parseFile = new Parse.File(name, file);
		console.log("File processed");
	}
	$.each(data, function(i, field) {
		formData.set(field.name, field.value);
		console.log("Field: " + field.name);
	});
	formData.set("featuredImage", parseFile);
	formData.save(null, {
		success : function(formData) {
			alert('New object created with objectId: ' + formData.id);
		},
		error : function(formData, error) {
			alert('Failed to create new object, with error code: '
					+ error.message);
		}
	});
}
