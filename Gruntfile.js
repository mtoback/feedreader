module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
jasmine: {
  test: {
    src: 'js/app.js',
    options: {
        specs: 'jasmine/spec/feedreader.js',
        vendor: ["http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js",
                 "http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js",
                 "http://google.com/jsapi"]
    }
  }
}
});
   grunt.registerTask('default',[
      'jasmine'
   ]);
}