var category_selection = false;
var cat_selection_b = false;



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
