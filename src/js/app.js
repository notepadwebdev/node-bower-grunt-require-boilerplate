// Place third party dependencies in the vendor folder
//
// Configure loading modules from the vendor directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "/js/",
    "paths": {
      "app": "app",
      "jquery": [
      	// "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
      	'vendor/jquery.min'  // fallback to local version if CDN fails
      ]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);