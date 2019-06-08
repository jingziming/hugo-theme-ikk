module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            'cssSrcDir': 'src/sass',
            'cssTargetDir': 'static/css'
        },
        sass: {
            build: {
                options: {
                    sourceMaps: false,
                    outputStyle: 'compressed',
                },
                files: {
                    '<%=  config.cssTargetDir %>/styles.css': '<%=  config.cssSrcDir %>/**/*.scss'
                }
            }
        },
        watch: {
            css: {
                files: '<%=  config.cssSrcDir %>/**/*.scss',
                tasks: ['sass:build']
            }
        }
    });
    grunt.registerTask('default', [
        'sass:build',
        'watch'
    ]);
};