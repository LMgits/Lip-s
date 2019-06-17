<?php 
$id = $_GET['id'];
//安全检查
if((int)$id<=0){
	$ajaxreturn = [
		"msg"=>'信息有误',
		'code'=>'2001'
	];
	echo json_encode($ajaxreturn);
	die;
}

$re = db_delete($link,'car','id='.$id);

if($re==false){
	$err = get_error();
	$ajaxreturn = [
		"msg"=>$err['error'],
		'code'=>$err['errno']
	];
}else{
	$ajaxreturn = [
		"msg"=> '删除成功',
		'code'=> 200
	];
}

echo json_encode($ajaxreturn);