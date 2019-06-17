<?php 
$config = include 'config/config.php';
include 'common/mysqli.php';
include 'common/funcs.php';

$model = 'index';
$action = 'index';
if(isset($_GET['m'])){
  $model = $_GET['m'];  
}
//允许ajax跨域
if($model=='api'){
	header('Access-Control-Allow-Origin:*');
}
if(isset($_GET['a'])){
  $action = $_GET['a'];  
}

$link = db_connect($config['mysql']['host'],$config['mysql']['user'],$config['mysql']['password'],'vue');
include $model.'/' . $action . '.php';
