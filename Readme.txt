Prerequisites:

-install node js (npm).
-install grunt-cli and grunt.
-install bower.
-install nodemon via npm (node package manager). 

/////////////////////////////////////////

To run application:

-In the project directory via terminal type :

 #npm install (to install any npm packages defined in package.json folder)

 then type:
  
#bower install (to install any external libraries defined in bower.json file)
 
 then type:

#grunt  (this to generate my dist folder which containe my assets files)

 then type :

 #npm start  ( this one in production mode)

 or

 #npm run dev (for development mode)


 /////////////////////////////

 Once server is running you will be able to open the following urls in browser:

 localhost:8000/home/en   (for english template)

 and

 localhost:8000/home/ar   (for arabic template)

 Note : I created two diffrent template inside  './templates/layout'  folder 
 one for desktop and one for mobile and this is done by checking on 'useragent'. 

-Every url will shows diffrent css style if you open network console for css loaded files ,
 will notice style.css file loaded in every url it will have diffrent content based on url requested.

 /////////////////////////////

For gruntfile.js I used following plugins :

-grunt-sass : to convert my scss files to css files .
-cssmin : to minimize my css files generated .

 /////////////////////////////

For package.json I used the follwing plugins/libraries ... etc:

- hapi.js as my nodejs framework.
- handlebars.js as my templeting library
- vision.js as my templates rendering plugin support for hapi.js.
- inert.js as my static file and directory handlers for hapi.js. (to serve any static file I want)
- mobile-detect  to detecting mobile devices (including tablets) uses the User-Agent string







