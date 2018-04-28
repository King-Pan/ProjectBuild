module.exports = function(grunt) {

    // Project configuration.
    //1. 初始化插件配置
    grunt.initConfig({
        //主要编码处


        //concat任务名
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'build/js/build.js',
            },
        }
    });

    //2. 加载插件任务  当grunt任务执行的时候去加载对应的任务插件
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //3. 注册构建任务
    grunt.registerTask('default', ['uglify']);

};
