<?php
/**
 * 用户服务端手写码同远程服务器进行二次验证demo
 * 版本：1.0
 * User: liushengzhou
 * Date: 2015/3/18
 * Time: 10:12
 */

//此处定义云服务器的地址
define("SERVICE_HOST", "http://vcode.360sht.com/");

//从客户端获取参数
$code = isset($_POST['code']) ? trim($_POST['code']) : trim($_POST['code']);
$tempId = isset($_POST['tempId']) ? trim($_POST['tempId']) : trim($_POST['tempId'])
if (!$code||!$tempId) {
    die("参数错误");
}

$appId = "13"; //应用id
$token = "da38ce71f74456fe06cb9de236937886";        //应用秘钥

//请求二次验证
require_once("service.php");
$service = new service();
$verifyUrl = $service->buildRequestPara($code, $token, $appId,$tempId);
$response = $service->getHttpResponse($verifyUrl);
var_dump($response);
