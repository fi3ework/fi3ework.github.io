'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var init = function init() {
    var $introImg = $('.site-intro-img:first'),
        introPlaceholder = $('.site-intro-placeholder:first'),
        bgCSS = $introImg.css('background-image'),
        bgURL = bgCSS.match(/url\("(.*)"\)/)[1];

    var img = new Image();
    img.onload = function () {
        introPlaceholder.remove();
        console.info('PLACEHOLDER REMOVED');
    };
    img.src = bgURL;
};

exports.init = init;