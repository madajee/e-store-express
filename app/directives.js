// DIRECTIVES - From Jeetan Madaan

app.directive("customHeader", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/custom-header.html',
        replace: true
    }
});

app.directive("customFooter", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/custom-footer.html',
        replace: true,
        scope:{
            authorname:"@",
            linkurl:"@"
        }
    }
});

app.directive("wireframeCard", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/wireframe-card.html',
        replace: true,
        scope:{
            title:"@",
            text:"@",
            linkurl: "@"
        }
    }
});