
function fx100(){
    document.getElementById("weather_data").innerHTML = "Current Temp : " + temparature + "&#8451;<br>Feels like : " + feels_like + "&#8451;<br>Current Weather : " + x.weather[0].main;
    document.getElementById("anim").setAttribute("src", "images/weather_icons/" + x.weather[0].icon + "@2x.png");
}

/*
var data;
var xmlhttp_2 = new XMLHttpRequest();
xmlhttp_2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        fx200();
    }
};
//xmlhttp_2.open("GET", "https://test-site-romanjandas.000webhostapp.com/guwahati_local/glv2/data.json", true);
xmlhttp_2.open("POST", "data.json", true);
xmlhttp_2.send();
*/
////////////////////////////////////////////////////////////////
var data_script = document.createElement("script");
function load_data_script(){
    data_script.src="https://test-site-romanjandas.000webhostapp.com/guwahatievents/guwahati_events_serverside/data_script.php";
    data_script.setAttribute("onload","fx200();");
    document.body.appendChild(data_script);
}



var obj_ads_array = new Array();
var i = 0;
var obj;
function fx200(){
    i = Object.keys(data).length - 2;
    top_banner.style.display = "block";
    top_ad.style.display = "block";
    while (i >= 0) {
        obj = eval("data.data_obj_" + i);

        ad_image.src = obj.ad_img_thumbnail;
        ad.append(ad_image);

        ad_type.innerHTML = obj.ad_typex;
        ad.append(ad_type);

        ad_title.innerHTML = obj.ad_titlex;
        ad.append(ad_title);

        ad_date.innerHTML = obj.ad_datex;
        ad.append(ad_date);

        obj_ads_array[i] = ad.cloneNode(true);
        document.body.append(obj_ads_array[i]);
        obj_ads_array[i].id = i;
        i -= 1;
    }
    document.body.append(bottom_buffer);
    top_ad.innerHTML = data.xhtmlx;
    fx300();
    funcDateTime();
    document.getElementsByClassName('logo')[0].remove();
    document.getElementsByClassName('loader')[0].remove();

}


var xxstring = "";
var xstring = "";


var top_banner = document.createElement("div");
top_banner.classList.add("top_banner");
top_banner.innerHTML = "Guwahati Events";
top_banner.style.display = "none";
document.body.append(top_banner);

var top_banner_buffer = document.createElement("div");
top_banner_buffer.classList.add("top_banner_buffer");
document.body.append(top_banner_buffer);

var ad = document.createElement("div");
ad.classList.add("ad");
ad.setAttribute("onclick", "funcOnClick(this);");///"funcAdClick(this);");

/////////////////////////////////////////////////////////////////////////////////////////

var ad_image = document.createElement("img");
ad_image.classList.add("ad_image");

var ad_type = document.createElement("p");
ad_type.classList.add("ad_type");


var ad_title = document.createElement("p");
ad_title.classList.add("ad_title");


var ad_date = document.createElement("p");
ad_date.classList.add("ad_date");


var bottom_buffer = document.createElement("div");
bottom_buffer.classList.add("bottom_buffer");

var bottom_menu = document.createElement("div");
bottom_menu.classList.add("bottom_menu");

var top_ad = document.createElement("div");
top_ad.classList.add("top_ad");
///top_ad.innerHTML = top_ad_html.html;
top_ad.style.display = "none";
document.body.append(top_ad);
/*
var loading_div = document.createElement("div");
loading_div.classList.add("loading_div");
document.body.append(loading_div);

var inside_loading_div = document.createElement("div");
inside_loading_div.classList.add("loader");
loading_div.append(inside_loading_div);
*/

/*------------------------------------------------------------------------------*/
var obj_2;
var obj_3;
var obj_4;
var obj_5;
var modal;
var boolAdClickCheck = true;
function funcAdClick(param) {
    if (boolAdClickCheck == true) {
        boolAdClickCheck = false;
        ///loading_div.style.display = "block";

        obj_2 = eval("data.data_obj_" + param.id + ".modal_html");
        obj_3 = eval("data.data_obj_" + param.id + ".ad_imgx");
        obj_4 = eval("data.data_obj_" + param.id + ".modal_contact");
        obj_5 = eval("data.data_obj_" + param.id + ".modal_location");

        modal = document.createElement("div");
        modal.classList.add("modal");

        var modal_loader = document.createElement("div");
        modal_loader.classList.add("modal_loader");
        modal.append(modal_loader);

        var modal_img = document.createElement("img");
        modal_img.classList.add("modal_img");
        modal_img.src = "images/blank_image.png";
        modal.append(modal_img);

        var modal_icon_phone = document.createElement("img");
        modal_icon_phone.classList.add("modal_icon");
        modal_icon_phone.src = "images/phone.png";
        modal_icon_phone.setAttribute("onclick", "window.open(\"" + obj_4 + "\",\"_blank\");");

        var modal_icon_location = document.createElement("img");
        modal_icon_location.classList.add("modal_icon");
        modal_icon_location.src = "images/location.png";
        modal_icon_location.setAttribute("onclick", "window.open(\"" + obj_5 + "\",\"_blank\");");

        modal.append(modal_icon_location);
        modal.append(modal_icon_phone);

        var modal_text = document.createElement("div");
        modal_text.classList.add("modal_text");
        modal_text.innerHTML = obj_2;
        modal.append(modal_text);

        document.body.style.overflow = "hidden";
        modal.style.overflow = "scroll";
        document.body.append(modal);
        setTimeout(function(){
            modal_img.src = obj_3;
        },200);
    }

}

var boolShowInfoCheck = true;
function funcShowMoreInfo(param) {
    if (boolShowInfoCheck) {
        param.innerHTML = "	&darr; scroll down";
        document.getElementsByClassName("x2")[0].style.display = "block";
        boolShowInfoCheck = false;
    }
    else if (boolShowInfoCheck == false) {
        param.innerHTML = "	Click for more";
        document.getElementsByClassName("x2")[0].style.display = "none";
        boolShowInfoCheck = true;
    }

}

////////////////////////////////////////////////////////////
var state = {
    demo: ""
}
var title = "";
var url = "index.html";

function funcHistory() {
    history.pushState(state, title, url);

}

window.onpopstate = function () {
    
    modal.style.transform = "translate(0px,100vh)";
    modal.style.transition = "400ms";
    setTimeout(function () { modal.remove(); }, 700);
    document.body.style.overflow = "auto";
    boolAdClickCheck = true;
    boolShowInfoCheck = true;
};

function funcOnClick(param) {
    funcHistory();
    funcAdClick(param);
}


function funcDateTime() {
    var date = new Date();
    var day;
    var month;
    var minutes;
    var hours;
    var theDate;
    switch (date.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    switch (date.getMonth()) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun";
            break;
        case 6:
            month = "Jul";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
    }

    if (date.getMinutes() < 10) {
        minutes = "0" + date.getMinutes();
    }
    else if (date.getMinutes() > 9) {
        minutes = date.getMinutes();
    }

    if (date.getHours() > 12) {
        hours = date.getHours() - 12;
        minutes = minutes + " PM";
    }
    else if (date.getHours() < 12) {
        hours = date.getHours();
        minutes = minutes + " AM";
    }
    else if (date.getHours() == 12) {
        hours = date.getHours();
        minutes = minutes + " PM";
    }


    theDate = day + ", " + month + " " + date.getDate() + ", " + hours + ":" + minutes;
    document.getElementById("theDate").innerHTML = theDate;

}

setInterval(funcDateTime, 30000);

/////////////////////////////////////////////////////////////
var x;
var temparature = 0;
var feels_like = 0;
var xmlhttp = new XMLHttpRequest(); 
function fx300(){
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            x = JSON.parse(this.responseText);
            temparature = parseInt(x.main.temp) - 273;
            feels_like = parseInt(x.main.feels_like) - 273;
            fx100();
        }
    };
    xmlhttp.open("POST", "https://api.openweathermap.org/data/2.5/weather?id=1271476&appid=035cf1717d9603db270d122b7f3b6483", true);
    xmlhttp.send();
}



