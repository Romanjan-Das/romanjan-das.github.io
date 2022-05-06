<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Entry Guwahati Local</title>
    <style>
    input{
        position:absolute;
        left: 5vw;
        width: 85vw;
    }
    .radio_class{
        position:relative;
        width: 10vw;
    }
    label{
        display:none;
    }
    .radio_abc{
        position:absolute;
        left:15vw;
    }
    
    </style>
    <script>
        function fcheck(x)
    {
        if(x==='ad_category_offer')
        {
            document.getElementById('image_source').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/offer_thumbnail.jpg";
            document.getElementById('image1').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/offer_slide_1.jpg";
            document.getElementById('image2').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/offer_slide_2.jpg";
            document.getElementById('image3').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/offer_slide_3.jpg";
        }
        else if(x==='ad_category_event')
        {
            document.getElementById('image_source').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/event_thumbnail.jpg";
            document.getElementById('image1').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/event_slide_1.jpg";
            document.getElementById('image2').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/event_slide_2.jpg";
            document.getElementById('image3').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/event_slide_3.jpg";
        }

        else if(x==='ad_category_job')
        {
            document.getElementById('image_source').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/job_thumbnail.jpg";
            document.getElementById('image1').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/job_slide_1.jpg";
            document.getElementById('image2').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/job_slide_2.jpg";
            document.getElementById('image3').value = "https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/job_slide_3.jpg";
        }
        else
        {

        }
    }
    </script>

</head>
<body>
<form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post" >
<div class="radio_abc">
<label>Select ad category:</label>
<input class="radio_class" type="radio" name="ad_category" value="offer" id="ad_category_offer" onclick="fcheck('ad_category_offer');">
<label for="ad_category_offer" style="display:inline;">offer</label>
<input class="radio_class" type="radio" name="ad_category" value="event" id="ad_category_event" onclick="fcheck('ad_category_event');" checked>
<label for="ad_category_event" style="display:inline;">event</label>
<input class="radio_class" type="radio" name="ad_category" value="job" id="ad_category_job" onclick="fcheck('ad_category_job');">
<label for="ad_category_job" style="display:inline;">job</label>
</div>
<br>
<br>
<label for="text_1">Enter the Title of Ad:</label>
<input type="text" name="text_1" id="text_1" value="The Title">
<br>
<label for="text_2">Enter the Red text of Ad:</label>
<input type="text" name="text_2" id="text_2" value="Red text...">
<br>
<label for="text_3">Enter the Small Text of Ad:</label>
<input type="text" name="text_3" id="text_3" value="Location and Date,Time">
<br>
<label for="image_source">Enter the image source(thumbnail):</label>
<input type="text" name="image_source" id="image_source" value="https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/event_thumbnail.jpg">
<br><br>

<label for="image1">Enter the image1 source:</label>
<input type="text" name="image1" id="image1" value="https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/event_slide_1.jpg"><br>
<label for="image2">Enter the image2 source:</label>
<input type="text" name="image2" id="image2" value="https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/event_slide_2.jpg"><br>
<label for="image3">Enter the image3 source:</label>
<input type="text" name="image3" id="image3" value="https://test-site-romanjandas.000webhostapp.com/guwahati_local/images/event_slide_3.jpg"><br>

<label for="map_link">Enter the map url:</label>
<input type="text" name="map_link" id="map_link" value="#"><br>

<label for="wind_content">Enter the window content:</label>
<input type="text" name="wind_content" id="wind_content" value="- <br>- <br>"><br>

<label for="phone_link_1">Enter the phone number 1:</label>
<input type="text" name="phone_link_1" id="phone_link_1" value=" "><br>

<label for="phone_link_2">Enter the phone number 2:</label>
<input type="text" name="phone_link_2" id="phone_link_2" value=" "><br>

<br>
<!---<label for="text_t1">Title:</label>
<input type="text" name="text_t1" id="text_t1" value="The Title"><br>--->
<label for="text_t2">Location:</label>
<input type="text" name="text_t2" id="text_t2" value="Location: "><br>
<!---<label for="text_t3">Contact:</label>
<input type="text" name="text_t3" id="text_t3" value="Contact: "><br>-->
<label for="text_t4">Published On:</label>
<input type="text" name="text_t4" id="text_t4" value="Published On: "><br>
<label for="text_t5">Event Date:</label>
<input type="text" name="text_t5" id="text_t5" value="Event Date: "><br>
<label for="text_t6">Event Time:</label>
<input type="text" name="text_t6" id="text_t6" value="Event Time: "><br>
<br>
<label for="ad_number">Enter ad number:</label>
<input type="text" name="ad_number" id="ad_number" value="*" readonly>
<br><br><br><input type="submit" value="Save to database" taget="_blank" style="color:white; background-color:mediumseagreen;"><br><br>
</form>

<br>
<form action="index_2.php" method="post">
    Generate javascript file ?<input style="width:15vw; left:45vw; color:white; background-color:blue;" type="submit" value="Yes">
</form>
<br>
<br>
<form action="set_limit.php" method="get">
    Ads to Load:
    <input style="width:15vw; left:30vw; " type="text" name="ad_limit" id="ad_limit" value="0">
    <input style="width:15vw; left:50vw; color:white; background-color:blue;" type="submit" value="OK">
</form>
<br>

<br><br><form action="clear_data.php" method="post">
<span style="padding:0.2vw;">Clear all data?<input style="width:15vw; left:30vw; color:white; background-color:red;" type="submit" value="Yes"></span>
</form>





<?php


if($_SERVER["REQUEST_METHOD"]=="POST"){
    $adsjs_file = fopen("main_ad_ids.txt","a+");
    
    $form_data = "\n\nvar ad_id_main_" . $_POST["ad_number"] . " = {";
    $form_data = $form_data . "\n\"text_1_cat\":\"" . $_POST["ad_category"] . "\",";
    $form_data = $form_data . "\n\"class_id\":\"" . $_POST["ad_category"] . "\",";
    $form_data = $form_data . "\n\"image_source\":\"" .  $_POST["image_source"] . "\",";
    $form_data = $form_data . "\n\"text_1\":\"" .  $_POST["text_1"] . "\",";
    $form_data = $form_data . "\n\"text_2\":\"" .  $_POST["text_2"] . "\",";
    $form_data = $form_data . "\n\"text_3\":\"" .  $_POST["text_3"] . "\",";
    $form_data = $form_data . "\n};" ; 

    $form_data = $form_data . "\n\nvar ad_id_" . $_POST["ad_number"] ." = {";
    $form_data = $form_data . "\n\"image1\":\"" .  $_POST["image1"] . "\",";
    $form_data = $form_data . "\n\"image2\":\"" .  $_POST["image2"] . "\",";
    $form_data = $form_data . "\n\"image3\":\"" .  $_POST["image3"] . "\",";

    $form_data = $form_data . "\n\"map_link\":\"" .  $_POST["map_link"] . "\",";

    $form_data = $form_data . "\n\"wind_content\":\"" .  $_POST["wind_content"] . "\",";

    $form_data = $form_data . "\n\"phone_link_1\":\"" . "tel:" .  $_POST["phone_link_1"] . "\",";
    $form_data = $form_data . "\n\"phone_link_text_1\":\"" .  $_POST["phone_link_1"] . "\",";
    $form_data = $form_data . "\n\"phone_link_2\":\"" . "tel:" .  $_POST["phone_link_2"] . "\",";
    $form_data = $form_data . "\n\"phone_link_text_2\":\"" .  $_POST["phone_link_2"] . "\",";


    //$form_data = $form_data . "\n\"text_t1\":\"" .  $_POST["text_t1"] . "\",";
    $form_data = $form_data . "\n\"text_t1\":\"" .  $_POST["text_1"] . "\",";
    $form_data = $form_data . "\n\"text_t2\":\"" .  $_POST["text_t2"] . "\",";
    $form_data = $form_data . "\n\"text_t3\":\"" . "Contact: " . $_POST["phone_link_1"] . "    " . $_POST["phone_link_2"] . "\",";
    $form_data = $form_data . "\n\"text_t4\":\"" .  $_POST["text_t4"] . "\",";
    $form_data = $form_data . "\n\"text_t5\":\"" .  $_POST["text_t5"] . "\",";
    $form_data = $form_data . "\n\"text_t6\":\"" .  $_POST["text_t6"] . "\",";

    $form_data = $form_data . "\n};" ; 



    fwrite($adsjs_file,$form_data); 
    fclose($adsjs_file);
    exit;
}

?>


<h1>
    <br><br><br>
    <a href="https://www.000webhost.com/cpanel-login" target="_blank">cpanel-login</a><br><br>
    <a href="index.html" target="_blank">index.html</a><br><br>
    <a href="index_1.php" target="_blank">index_1.php (data entry)</a><br><br>
    <a href="main_ad_ids.txt" target="_blank">main_ad_ids.txt (database)</a><br><br>
    <a href="main_ad_ids.js" target="_blank">main_ad_ids.js (ad id js file)</a><br><br>
</h1>
    
</body>
</html>