<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Refresh" content="2; url=https://test-site-romanjandas.000webhostapp.com/guwahati_local/glv1_modified/index_1.php" />
    <title>Document</title>
</head>
<body>
    <?php
if($_SERVER["REQUEST_METHOD"]=="GET"){
    $ad_lim = $_GET["ad_limit"];
    $new_file = fopen("ad_numbers.js","w");
    $string3 = "function read_ad_numbers(){ad_num_limit =" . $ad_lim . ";}";
    fwrite($new_file,$string3);
    fclose($new_file);
}
?>
    
</body>
</html>