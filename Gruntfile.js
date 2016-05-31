module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        jasmine: {
            test: {
                src: 'js/app.js',
                options: {
                    '--web-security': false,
                    '--local-to-remote-url-access': true,
                    '--ignore-ssl-errors': true,
                    keepRunner: true,
                    specs: 'jasmine/spec/feedreader.js',
                    vendor: ["bower_components/jquery/dist/jquery.js",
                        "bower_components/jasmine-jquery/lib/jasmine-jquery.js",
                        "http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js",
                        "http://google.com/jsapi"
                    ]
                }
            }
        }
    });
    grunt.registerTask('default', [
        'jasmine'
    ]);
}
