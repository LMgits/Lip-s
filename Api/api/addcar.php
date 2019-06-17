<?php 

$id = $_POST['id'];
//安全检查
if((int)$id<=0){
	$ajaxreturn = [
		"msg"=>'信息有误',
		'code'=>'2001'
	];
	echo json_encode($ajaxreturn);
	die;
}

if(empty($_POST['name'])){
	$ajaxreturn = [
		"msg"=>'信息为空',
		'code'=>'2002'
	];
	echo json_encode($ajaxreturn);
	die;
}
$name = $_POST['name'];
if(empty($_POST['ctime'])){
	$ajaxreturn = [
		"msg"=>'时间为空',
		'code'=>'2003'
	];
	echo json_encode($ajaxreturn);
	die;
}
$ctime = $_POST['ctime'];

//操作数据库
$data = [
	"id"=>$id,
	"name"=>$name,
	"ctime"=>$ctime,
];
$re = db_insert($link,'car',$data);
if($re==false){
	$err = get_error();
	$ajaxreturn = [
		"msg"=>$err['error'],
		'code'=>$err['errno']
	];
}else{
	$ajaxreturn = [
		"msg"=> '添加成功',
		'code'=> 200
	];
}

echo json_encode($ajaxreturn);