//Navbar Selection

var navApp = angular.module('navbar', []);
navApp.controller('navControl', function($scope){
	$scope.active = "";

});

//inline Editor

var editApp = angular.module('inlEdt', []);
editApp.controller('inlEdtCtrl', function($scope) {
    $scope.text = "Edit Me.";
    $scope.inputShow = false;
    $scope.toggleInput = function(event){
    	event.stopPropagation();
    	$scope.inputShow = !$scope.inputShow;
    }
});

//Price Form

var priceApp = angular.module('prcFrm', []);
priceApp.controller('prcFrmCtrl', function($scope){
	$scope.services = [
	{item:'Web Development', price: 300, active: false},
	{item:'Design', price: 400, active: false},
	{item:'Integration', price: 250, active: false},
	{item:'Training', price: 220, active: false}
	];


	$scope.totalPrice = 0;

	$scope.calPrice = function(e){
		e.active = !e.active;
		if(e.active){
			$scope.totalPrice = $scope.totalPrice + e.price;
		}else{
			$scope.totalPrice =$scope.totalPrice - e.price;
		}
		return $scope.totalPrice;
	}

});

//Search Bar

var searchApp = angular.module('srchBr', []);
searchApp.controller('srchBrCtrl', function($scope){
	$scope.news = [
		{
            title: '50 Must-have plugins for extending Twitter Bootstrap',
            image: 'images/Board-Games.png'
        },
        {
            title: 'Making a Super Simple Registration System With PHP and MySQL',
            image: 'images/cloud-2044823_960_720.png'
        },
        {
            title: 'Create a slide-out footer with this neat z-index trick',
            image: 'images/home-1110868_960_720.png'
        },
        {
            title: 'How to Make a Digital Clock with jQuery and CSS3',
            image: 'images/Mobile-Smartphone-icon.png'
        },
        {
            title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
            image: 'images/parts-1086747_640.png'
        },
        {
            title: 'Your First Backbone.js App – Service Chooser',
            image: 'images/Puzzle.png'
        },
	]
});

//Switchable Grid
var switchableApp = angular.module('switchableGrid',[]);
switchableApp.controller('SGCtrl', function($scope){
    $scope.items = [
        {
            title: '50 Must-have plugins for extending Twitter Bootstrap',
            image: 'images/Board-Games.png'
        },
        {
            title: 'Making a Super Simple Registration System With PHP and MySQL',
            image: 'images/cloud-2044823_960_720.png'
        },
        {
            title: 'Create a slide-out footer with this neat z-index trick',
            image: 'images/home-1110868_960_720.png'
        },
        {
            title: 'How to Make a Digital Clock with jQuery and CSS3',
            image: 'images/Mobile-Smartphone-icon.png'
        },
        {
            title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
            image: 'images/parts-1086747_640.png'
        },
        {
            title: 'Your First Backbone.js App – Service Chooser',
            image: 'images/Puzzle.png'
        },
    ]

    $scope.layout = 'grid';
});

//Bootstrap multiple apps
angular.bootstrap(document.getElementById("inlineEditor"), ['inlEdt']);
angular.bootstrap(document.getElementById("priceForm"), ['prcFrm']);
angular.bootstrap(document.getElementById("searchBar"), ['srchBr']);
angular.bootstrap(document.getElementById('GLSwitch'), ['switchableGrid']);