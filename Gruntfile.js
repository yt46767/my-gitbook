var path = require("path");
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-shell');
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      'http-server': {
        'dev': {
                // port: 4000,
                // root: "_book",
                logFn: function(req, res, error) {},
                runInBackground: true //wait or not for the process to finish
            }
        },
        open: {
            all: {
                path: 'http://localhost:4000/index.html'
                // path: '_book/index.html'
            }
        }, 
        watch: {
            css: {
                files: ['**/*.md'],
                tasks: ['shell:gitbook'],
                options: {
                    spawn: false, 
                    livereload: true,
                },
            },
        },
        shell: {
            gitbook: {
                command: "gitbook build --gitbook=3.2.2"
            }
        }
    });
    grunt.event.on('http-server', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.event.on('open', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.registerTask('test', [
        'shell:gitbook',
        'http-server:dev',
        'open:all',
        'watch',    
    ]);
}