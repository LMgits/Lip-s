<?php 

$re = db_select($link,'id,name,ctime','car');

echo json_encode($re);