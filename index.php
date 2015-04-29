<?php
define("DS", '/');
define("APP_PATH", dirname(__FILE__) . DS . '..' . DS . 'application' . DS);
define("VCODE_URL", "http://vcode.360sht.com/");
define("STATIC_PATH", DS . "app" . DS . "index.html");    //定义默认静态文件地址


session_start();

//加载配置文件
$environ = get_cfg_var("shtenv") ? get_cfg_var("shtenv") : "dev";
$app = new Yaf\Application(dirname(__FILE__) . DS . '..' . DS . "conf/application.{$environ}.ini");

try {
    $app->bootstrap()->run();
} catch (Yaf\Exception $e) {
    echo $e->getMessage(), "\n";
}

