# Node/Bower/Grunt/Require Project Boilerplate

## Starting point for project using Node, Bower, Grunt and Require.

####Nodejs
This boilerplate is structured around several Node tools, which aim to reduce repetitive dev tasks and improve page load times of your final product by using concatenation, minification and image compression by default. It will also give you auto-prefixing on every save of your CSS and allow livereload of the page whenever you save in your editor.

####Bower
A package manager created by Twitter. It can save time when pulling together all the libraries and front end tools that you repeatedly use across all your projects. It also ensures that each time you start a new project you are always using the most up to date versions of these libraries (where appropriate, you can also keep track of particular relases such as jQuery 1.10.2 if you are still supporting IE7).

####Grunt
Introduce a build process to easily deliver linted, concatenated, minified CSS and JavaScript files. Also compress your images to further reduce your page load times and deliver a better, more usuable, cross platform product.

####RequireJS
Asynchronous AMD script loader to reduce dependency complications across your Javascripts and reduce page blocking scripts. 

### Set up

You will need to have Node.js installed on your machine to use this boilerplate. Click the install button on the nodejs website, download the installer, and accept all default settings when installing.

- [Nodejs](http://nodejs.org/)

Once you have Node installed you can easily install Grunt. Use the Node package manager (npm) and install it globally... 

```js
npm install -g grunt-cli
```

For more information see the Documentation on the Grunt website. It's only 5 pages, is easy to read and pretty much tells you everything you will need to know to be fully proficient in writing/editing your own gruntfiles within half an hour.

- [Grunt : Documentation](http://gruntjs.com/getting-started)

Now install Bower globally..

```js
npm install -g bower
```

More information on bower package management at [bower.io](http://bower.io/)

### Clone the repo

Now that you have Node, Grunt and Bower installed you can clone this boilerplate project to your usual dev location for dev-ing locally on your machine.

```js
cd path/to/your/projects
git clone https://github.com/notepadwebdev/node-bower-grunt-require-boilerplate.git
```

"cd" into the root of the project so that all subsequent commands apply to the newly cloned project.

```js
cd griff-grunt-project-boilerplate.git
ls
```

Have a look at the project structure. The "src" directory is where all your application code will live as you dev.

You will also see a package.json file. This file outlines all of the dev dependencies required by the project to run. These are mostly Grunt plugins, but any Node modules can be listed in there. 

```js
  "devDependencies": {
    "express": "~3.4.0",
    "connect-livereload": "~0.3.0",
    "grunt": "~0.4.1",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-uglify": "~0.2.4",
    "grunt-contrib-watch": "~0.5.3",
    "grunt-autoprefixer": "~0.3.0",
    "grunt-contrib-cssmin": "~0.6.2",
    "grunt-contrib-copy": "~0.4.1",
    "grunt-contrib-imagemin": "~0.3.0",
    "grunt-contrib-clean": "~0.5.0",
    "grunt-express-server": "~0.4.3",
    "grunt-open": "~0.2.2"
  }
```

To install all of these you just need to issue a "npm install" command from the root of the project and everything on the above list should install automatically...

```js
npm install
```

The root of the project also contains a file called bower.json which outlines all the library dependencies that the boilerplate project uses (Modernizr, jQuery and Require.js). In the same way you can issue the "bower install" command, and all of the libraries will be cloned from their respective Github repos into the bower_components directory. 

```js
  "dependencies": {
    "modernizr": "latest",
    "requirejs": "latest",
    "jquery": "~1.10.*"
  }
```

Re-running "bower install" at any time will automatically update all these libraries.

```js
bower install
```

Have a look in the project root now and you should see a "bower_components" and a "node_modules" folder. Look inside the "bower_components" and you will find the current repos for the jQuery, Modernizr and Require projects.

### Begin dev

First thing to do before you start coding is to run a "grunt start" command to copy and minify all the jQuery, Modernizr and Require libraries across from the bower_components folder and into your src/js/vendors folder.

```js
grunt start
```

You should now be ready to go. To start up your node server, and automatically open up a browser window to see your index.html, just issue the "grunt dev" command...

```js
grunt dev
```

### Which CSS and JS files do I edit?

You should write all your CSS in the main.css file. 

Grunt generates an autoprefixed styles.css file every time main.css is saved. The browser will automatically inject the updated CSS without a page reload on save.

Your JavaScript code should be written using the AMD pattern with files being saved to the js/app folder. All vendor scripts should be installed with bower and copied across to the "js/vendor" folder by adding them to the grunt task.

Require will load your scripts asynchronously from the js/app.js entry point file. More information about doing things the Require way is available on [requirejs.org](http://requirejs.org/docs/api.html) 

Saving any HTML file will also cause a browser refresh automatically.

### Building your project

When your project is finished and you want to package everything up to send to the client you should run the following grunt command.

```js
grunt build
```

This creates a new "dist" folder in the root of your project with all of your production ready code. Your CSS and JavaScripts will be concatenated and minified (we still keep Modernizr seperate as we want that to load before the body). It will also optimise all your images by compressing pngs and gifs.
