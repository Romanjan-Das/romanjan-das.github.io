<?php
$script_main_content = " ";


$main_ad_ids = fopen("main_ad_ids.js","r");
$script_main_content = $script_main_content . fread($main_ad_ids,filesize("main_ad_ids.js"));
fclose($main_ad_ids);

$ad_numbers = fopen("ad_numbers.js","r");
$script_main_content = $script_main_content . fread($ad_numbers,filesize("ad_numbers.js"));
fclose($ad_numbers);

$script_main_content = $script_main_content . " ";

$script_main = fopen("script_main.js","r");
$script_main_content = $script_main_content . fread($script_main,filesize("script_main.js"));
fclose($script_main);



$script = fopen("script.js","w");
fwrite($script,$script_main_content);
fclose($script);

