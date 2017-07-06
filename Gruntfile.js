module.exports = function (grunt) {
    var JSsrcFolder = "/path/to/js/src";
    var JSpubFolder = "/path/to/output/folder";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {

            options: {
                livereload: true,
            },livereload: {
                files: [JSsrcFolder + '**/*.js'],
                tasks: ['copy']
            },
           
        },
        copy: {
            main:{
                files:[
                    {expand: true, src: [JSsrcFolder + '/*.js'], dest: JSpubFolder, filter: 'isFile', flatten: true}
                ]
                
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
};
