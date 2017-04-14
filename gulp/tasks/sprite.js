'use strict';

module.exports = function() {
    $.gulp.task('sprite', function () {

        var spriteData = $.gulp.src('./source/sprite/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                imgPath: '/assets/img/sprite.png',
                cssFormat: 'css',
                padding: 2,
                algorithm: 'binary-tree'
            }));

        var imgStream = spriteData.img
            .pipe($.buffer())
            .pipe($.gulp.dest('./source/images/'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./source/style/common/'));

        // Return a merged stream to handle both `end` events
        return $.merge(imgStream, cssStream);
    })
};

