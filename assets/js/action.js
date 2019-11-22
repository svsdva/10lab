"use strict";

function all_del() {
    for (var i = 0; i < first_links.length; i++) {
        first_links[i].style.display = "none";
    }
    for (var i1 = 0; i1 < second_links.length; i1++) {
        second_links[i1].style.display = "none";
    }
    for (var i5 = 0; i5 < third_links.length; i5++) {
        third_links[i5].style.display = "none";
    }
    second_line.style.visibility = "visible";
    setTimeout(function () {
        second_line.style.opacity = "1";
    }, 0);
}
var first_title = document.getElementById('first_title');
var second_title = document.getElementById('second_title');
var third_title = document.getElementById('third_title');


var first_links = document.getElementsByClassName('menu_s1');
var second_links = document.getElementsByClassName('menu_s2');
var third_links = document.getElementsByClassName('menu_s3');

var second_line = document.getElementById('second_line');


first_title.addEventListener("mouseenter", function () {
    all_del();
    for (var i2 = 0; i2 < first_links.length; i2++) {
        first_links[i2].style.display = "table-cell";
    }
});

second_title.addEventListener("mouseenter", function () {
    all_del();
    for (var i3 = 0; i3 < second_links.length; i3++) {
        second_links[i3].style.display = "table-cell";
    }
});
third_title.addEventListener("mouseenter", function () {
    all_del();
    for (var i4 = 0; i4 < third_links.length; i4++) {
        third_links[i4].style.display = "table-cell";
    }
});
second_line.addEventListener("mouseleave", function () {
    all_del();
    setTimeout(function () {
        second_line.style.opacity = "0";
    }, 0);
    second_line.style.visibility = "hidden";
});
