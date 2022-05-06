var ad_num_limit = 100;
var ad_num = 0;
var onload_ad_to_load = 6;
var ad_gen_blocked_at = 26;  /// ad_num_limit is always should be greater than ad_gen_blocked_at

function onload_load_ads() {
    for (ii = 0; ii < onload_ad_to_load; ii++) {
        clone_ad();
    }
}


function main_ad_attributes(xx) {
    var c = document.getElementById(xx).childNodes;
    var d = c[3].childNodes;
    var yy = xx;
    xx = eval(xx);
    document.getElementById(yy).setAttribute('class', ('ads ' + xx.class_id));
    document.getElementById(yy).setAttribute('onclick', 'window_top_ad_function(ad_id_' + (ad_num - 1) + '); myfffff();');
    c[1].setAttribute('src', xx.image_source);
    d[1].innerText = xx.text_1;
    d[2].innerText = xx.text_1_cat;
    d[4].innerText = xx.text_2;
    d[6].innerText = xx.text_3;
    document.getElementById(yy).style.display = 'block';

}



function clone_ad() {
    if (ad_num < ad_num_limit) {
        var original_ad = document.getElementById('main_ad_structure');
        var cloned_ad = original_ad.cloneNode(true);
        cloned_ad.id = 'ad_id_main_' + ad_num;
        ad_num++;
        original_ad.parentNode.appendChild(cloned_ad);
        main_ad_attributes(cloned_ad.id);
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

var abcd = 0;

window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight + abcd)) {
        if (window.scrollY > abcd) {
            abcd = window.scrollY;
        }

        sleep(300);
        clone_ad();
    }
};

function scroll_menu_function(){
    document.getElementById('scroll_image_0').setAttribute('src',featured_ad_id_0.image_url);
    document.getElementById('scroll_image_1').setAttribute('src',featured_ad_id_1.image_url);
    document.getElementById('scroll_image_2').setAttribute('src',featured_ad_id_2.image_url);
    document.getElementById('scroll_image_3').setAttribute('src',featured_ad_id_3.image_url);
    }