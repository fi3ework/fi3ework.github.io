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

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    document.getElementsByClassName('container')[0].classList.remove('container-unloaded');
    document.getElementsByClassName('footer')[0].classList.remove('footer-unloaded');
    document.getElementsByClassName('loading')[0].style.display = 'none';
}, false);

exports.init = init;