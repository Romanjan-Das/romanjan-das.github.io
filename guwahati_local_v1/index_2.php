<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Refresh" content="2; url=index_1.php" />
    <title>Document</title>
</head>
<body>
    <?php
    $data = fopen("main_ad_ids.txt","r");
    $string = fread($data,filesize("main_ad_ids.txt"));
    $pattern = "/\*/";
    $limit = 2;
    $for_loop_count = substr_count($string,"*")/2 ;

    for($i=0; $i<$for_loop_count; $i++)
    {
        $j = $for_loop_count - $i;
        $j = $j-1;
        $string = preg_replace($pattern,$j,$string,$limit);
    }
    
    

    $output_data = fopen("main_ad_ids.js","w");
    fwrite($output_data,$string);
    fclose($output_data);
    
    fclose($data);

    echo "<h1>Processing completed.</h1>" 
    ?>
</body>
</html>