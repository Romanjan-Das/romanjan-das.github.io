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
    document.getElementById('modal_window').style.display = 'block';

}