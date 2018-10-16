// 处理路由分发
const express = require('express');
const router = express.Router();
//引入控制器文件
const c_user = require('./controllers/c_user');

// 渲染登录页
router.get('/signin',c_user.showSignin);
// 监听登录的表单请求
router.post('/signin',c_user.handleSignin);
module.exports = router;