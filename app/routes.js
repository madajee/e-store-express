// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'integrationController'
    })
    .when('/signup', {
        templateUrl: 'pages/wireframes/signup.html',
        controller: 'integrationController'
    })
    .when('/login', {
        templateUrl: 'pages/wireframes/login.html',
        controller: 'integrationController'
    })
    .
    otherwise('/');
    
});