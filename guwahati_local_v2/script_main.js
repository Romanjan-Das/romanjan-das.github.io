 

var featured_ad_id_0 = {
    "image_url": "images/images(1).jpg",
    "image1": "images/images(1).jpg",
    "image2": "images/images(2).jpg",
    "image3": "images/images(3).jpg",

    "map_link": "https://goo.gl/maps/1v5xGdKZfNuKv9hA7",

    "wind_content": " - Email us to publish your event <br>- Email us to advertise your business <br>- We advertise all kinds of business",

    "phone_link_1" : "mailto:romanjandas@outlook.com",
    "phone_link_text_1" : "romanjandas@outlook.com",
    "phone_link_2" : " ",
    "phone_link_text_2" : " ",
    
    

    "text_t1" : "Welcome to Guwahati Local",
    "text_t2" : "Location : Noonmati,Guwahati ",
    "text_t3" : "Email : romanjandas@outlook.com",
    "text_t4" : "Published On : 17-March-2020",
    "text_t5" : " ",
    "text_t6" : " ",
};


var featured_ad_id_1 = {
    "image_url": "images/images(2).jpg",
    "image1": "images/images(1).jpg",
    "image2": "images/images(2).jpg",
    "image3": "images/images(3).jpg",

    "map_link": "https://goo.gl/maps/1v5xGdKZfNuKv9hA7",

    "wind_content": " - Email us to publish your event <br>- Email us to advertise your business <br>- We advertise all kinds of business",

    "phone_link_1" : "mailto:romanjandas@outlook.com",
    "phone_link_text_1" : "romanjandas@outlook.com",
    "phone_link_2" : " ",
    "phone_link_text_2" : " ",
    
    

    "text_t1" : "Welcome to Guwahati Local",
    "text_t2" : "Location : Noonmati,Guwahati ",
    "text_t3" : "Email : romanjandas@outlook.com",
    "text_t4" : "Published On : 17-March-2020",
    "text_t5" : " ",
    "text_t6" : " ",
};



var featured_ad_id_2 = {
    "image_url": "images/images(3).jpg",
    "image1": "images/images(1).jpg",
    "image2": "images/images(2).jpg",
    "image3": "images/images(3).jpg",

    "map_link": "https://goo.gl/maps/1v5xGdKZfNuKv9hA7",

    "wind_content": " - Email us to publish your event <br>- Email us to advertise your business <br>- We advertise all kinds of business",

    "phone_link_1" : "mailto:romanjandas@outlook.com",
    "phone_link_text_1" : "romanjandas@outlook.com",
    "phone_link_2" : " ",
    "phone_link_text_2" : " ",
    
    

    "text_t1" : "Welcome to Guwahati Local",
    "text_t2" : "Location : Noonmati,Guwahati ",
    "text_t3" : "Email : romanjandas@outlook.com",
    "text_t4" : "Published On : 17-March-2020",
    "text_t5" : " ",
    "text_t6" : " ",
};



var featured_ad_id_3 = {
    "image_url": "images/images(1).jpg",
    "image1": "images/images(1).jpg",
    "image2": "images/images(2).jpg",
    "image3": "images/images(3).jpg",

    "map_link": "https://goo.gl/maps/1v5xGdKZfNuKv9hA7",

    "wind_content": " - Email us to publish your event <br>- Email us to advertise your business <br>- We advertise all kinds of business",

    "phone_link_1" : "mailto:romanjandas@outlook.com",
    "phone_link_text_1" : "romanjandas@outlook.com",
    "phone_link_2" : " ",
    "phone_link_text_2" : " ",
    
    

    "text_t1" : "Welcome to Guwahati Local",
    "text_t2" : "Location : Noonmati,Guwahati ",
    "text_t3" : "Email : romanjandas@outlook.com",
    "text_t4" : "Published On : 17-March-2020",
    "text_t5" : " ",
    "text_t6" : " ",
};




//////////////////////////////////////////////////////////////////////////////

var ad_num_limit = 100;
var ad_num = 0;
var onload_ad_to_load = 6;
var ad_gen_blocked_at = 26;  /// ad_num_limit is always should be greater than ad_gen_blocked_at


var category_selection = false;
var cat_selection_b = false;

var abcd = 0;
var function_evaluation = false;
/////////////////////////////////////////////////////////////////////////////
function app_update_screen_function()
{
    if(false)
    {
        document.getElementById('app_update_screen').style.display = 'block';
    }
    
}
function app_update_screen_link_function()
{
    location.href = "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=en_IN";
}
////////////////////////////////////////////////////////////////////////////////
var state = {
    demo : ""
}
var title = "";
var url = "index.html";

function funcHistory(){
    history.pushState(state,title,url);
    document.getElementById('modal_window').style.display = 'block';

}

window.onpopstate = function(){
    document.getElementById('modal_window').style.display = 'none';
};
/////////////////////////////////////////////////////////////////////////////////
function close_modal_window_x()
{
    document.getElementById('modal_window').style.display = 'none';
}
function show_call_numbers(){
    document.getElementById('number_display').style.display = 'block';
}
function hide_number_function(){
    document.getElementById('number_display').style.display = 'none';
}

//////////////////////////////////////////////////////////////////////////////////

function myfffff(){
    document.body.style.overflow = "hidden";
}
function myfffffxx(){
    document.body.style.overflow = "scroll";
}


function window_top_ad_function(ad_Id) {

    document.getElementById('img_x_1').setAttribute('src', ad_Id.image1);
    document.getElementById('img_x_4').setAttribute('src', ad_Id.image1);
    document.getElementById('img_x_2').setAttribute('src', ad_Id.image2);
    document.getElementById('img_x_3').setAttribute('src', ad_Id.image3);
    

    document.getElementById('map_linkk').setAttribute('href', ad_Id.map_link);

    document.getElementById('ad_details_para_x').innerHTML = ad_Id.wind_content;
    

    /// newly added
    document.getElementById('phone_num_1').setAttribute('href', ad_Id.phone_link_1);
    document.getElementById('phone_num_2').setAttribute('href', ad_Id.phone_link_2);
    

    document.getElementById('phone_num_x_1').innerText = ad_Id.phone_link_text_1;
    document.getElementById('phone_num_x_2').innerText = ad_Id.phone_link_text_2;
    

    document.getElementById('text_t1').innerText = ad_Id.text_t1;
    document.getElementById('text_t2').innerText = ad_Id.text_t2;
    document.getElementById('text_t3').innerText = ad_Id.text_t3;
    document.getElementById('text_t4').innerText = ad_Id.text_t4;
    document.getElementById('text_t5').innerText = ad_Id.text_t5;
    document.getElementById('text_t6').innerText = ad_Id.text_t6;




    /// display
    //document.getElementById('modal_window').style.display = 'block';
    funcHistory();

}



////////////////////////////////////////////////////////////////////////////////////





function func_catg_hide() {
    var x = document.getElementsByClassName("ads");
    for (i = 0; i < document.getElementsByClassName("ads").length; i++) {
        x[i].style.display = "none";
    }
}

function func_catg_show(xyz) {
    var x = document.getElementsByClassName(xyz);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "inline";
    }
}

function function_darken_onclicked(element_number) {

    document.getElementById('main_ad_structure').style.display = 'none';

    for (i = 0; i < 4; i++) {
        document.getElementsByClassName('bottom_footer')[0].children[i].style.backgroundColor = 'rgb(0, 0, 0, 0)';
    }
    document.getElementsByClassName('bottom_footer')[0].children[element_number].style.backgroundColor = 'rgb(129, 128, 128)';
    /* 
    if ((element_number == 2)||(element_number == 0)) {
        document.getElementById('tort').style.display = 'block';
        for (i = 0; i < 7; i++) {
            document.getElementById('tort').children[i].style.display = 'none';
        }
        document.getElementById('tort').children[0].style.display = 'block';
        document.getElementById('tort').style.height = '10vw';
        category_selection = true;
    }
    else {
        document.getElementById('tort').style.display = 'none';
    }
    */

}


 
function cat_span_generator() {
    /*
    var efgh = document.getElementsByClassName('cat_span_2');
    efgh[0].innerText = 'Select Category';
    efgh[1].innerText = 'All Offers';
    efgh[2].innerText = 'Restaurants';
    efgh[3].innerText = 'Shops';
    efgh[4].innerText = 'Saloons';
    efgh[5].innerText = 'Tution';
    efgh[6].innerText = 'Others';
    
    */
}

{

/*

function funx(x) {
    if (category_selection == true) {
        funcccc(x);
        category_selection = false;
        func_catg_hide();
        if (x == 1) {
            func_catg_show('offer');
        }
        if (x == 2) {
            func_catg_show('restaurants');
        }
        if (x == 3) {
            func_catg_show('shop');
        }
        if (x == 4) {
            func_catg_show('saloon');
        }
        if (x == 5) {
            func_catg_show('tution');
        }
        if (x == 6) {
            func_catg_show('others');
        }
        



    }
    else if (category_selection == false) {
        funcccc(101);
        category_selection = true;
    }
}


function funcccc(x) {
    if (x == 101) {
        document.getElementById('tort').style.height = '70vw';
        for (i = 0; i < 7; i++) {
            document.getElementById('tort').children[i].style.display = 'block';
            if((cat_selection_b == false) && (ad_gen_blocked_at >= ad_num ))
            {
                onload_ad_to_load = ad_gen_blocked_at - ad_num;
                onload_load_ads();
                cat_selection_b = true;
            }
        }
    }
    if (x != 101) {
        for (i = 0; i < 7; i++) {
            document.getElementById('tort').children[i].style.display = 'none';
        }

        document.getElementById('tort').children[x].style.display = 'block';
        document.getElementById('tort').style.height = '10vw';
    }
}

*/

}


//////////////////////////////////////////////////////////////////////////////////


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


    //////////////////////////////////////////////////////////////////////////////////////

    

        function home_func() {
            func_catg_show('ads');
            function_darken_onclicked(0);
        }

        function event_func() {
            if ((function_evaluation == false) && (ad_gen_blocked_at >= ad_num )){
                onload_ad_to_load = ad_gen_blocked_at - ad_num;
                onload_load_ads();
                function_evaluation = true;
            }

            func_catg_hide();
            func_catg_show('event');
            function_darken_onclicked(1);
        }

        function offer_func() {
            if ((function_evaluation == false) && (ad_gen_blocked_at >= ad_num )){
                onload_ad_to_load = ad_gen_blocked_at - ad_num;
                onload_load_ads();
                function_evaluation = true;
            }
            func_catg_hide();
            func_catg_show('offer');
            function_darken_onclicked(2);
        }

        function job_func() {
            if ((function_evaluation == false) && (ad_gen_blocked_at >= ad_num )){
                onload_ad_to_load = ad_gen_blocked_at - ad_num;
                onload_load_ads();
                function_evaluation = true;
            }
            func_catg_hide();
            func_catg_show('job');
            function_darken_onclicked(3);
        }

        ////////////////////////////////////////////////////////////////
        document.getElementsByClassName("logo")[0].remove();
        document.getElementsByClassName("loader")[0].remove();
        document.getElementById("banner").style.display = "block";
        document.getElementsByClassName("scrollmenu")[0].style.display = "block";
    document.body.onload = function(){
        read_ad_numbers(); 
        app_update_screen_function(); 
        onload_load_ads(); 
        scroll_menu_function(); 
        cat_span_generator();
        function_darken_onclicked(0);
    }

    
    