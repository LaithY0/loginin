<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

include_once('./conn.php');


if(isset($_POST)){

    $data = file_get_contents("php://input");

    $user = json_decode($data , true);

    $name = ($user['name']);
    $email = ($user['email']);
    $password = ($user['password']);
    $photo = ($user['photo']);
    $phone = ($user['phone']);



}else{
    echo 'falid ...';
}

if($name == null){

    return die ;
}

$sql = "INSERT INTO users (name , email , password , photo , phone )
 VALUES ('$name' , '$email' , '$password' , '$photo' , $phone) ";


$conn->exec($sql);

?>
