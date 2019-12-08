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
    for (var t21 = 0; t21 < separator1.length; t21++) {
        separator1[t21].style.display = "none";
    }
    for (var t22 = 0; t22 < separator2.length; t22++) {
        separator2[t22].style.display = "none";
    }
    for (var t23 = 0; t23 < separator3.length; t23++) {
        separator3[t23].style.display = "none";
    }
    first_title.style.textDecoration = "none";
    second_title.style.textDecoration = "none";
    third_title.style.textDecoration = "none";
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
var separator1 = document.getElementsByClassName('separator1');
var separator2 = document.getElementsByClassName('separator2');
var separator3 = document.getElementsByClassName('separator3');

var second_line = document.getElementById('second_line');


first_title.addEventListener("mouseenter", function () {
    all_del();
    for (var i2 = 0; i2 < first_links.length; i2++) {
        first_links[i2].style.display = "table-cell";
    }
    first_title.style.textDecoration = "underline";
    for (var t2 = 0; t2 < separator1.length; t2++) {
        separator1[t2].style.display = "table-cell";
    }
});

second_title.addEventListener("mouseenter", function () {
    all_del();
    for (var i3 = 0; i3 < second_links.length; i3++) {
        second_links[i3].style.display = "table-cell";
    }
    second_title.style.textDecoration = "underline";
    for (var t3 = 0; t3 < separator2.length; t3++) {
        separator2[t3].style.display = "table-cell";
    }
});
third_title.addEventListener("mouseenter", function () {
    all_del();
    for (var i4 = 0; i4 < third_links.length; i4++) {
        third_links[i4].style.display = "table-cell";
    }
    third_title.style.textDecoration = "underline";
    for (var t4 = 0; t4 < separator3.length; t4++) {
        separator3[t4].style.display = "table-cell";
    }
});
second_line.addEventListener("mouseleave", function () {
    all_del();
    setTimeout(function () {
        second_line.style.opacity = "0";
    }, 0);
    second_line.style.visibility = "hidden";
});
