// 处理路由分发
const express = require('express');
const router = express.Router();
//引入控制器文件
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

// 渲染登录页
router.get('/signin',c_user.showSignin);
// 监听登录的表单请求
router.post('/signin',c_user.handleSignin);
// 渲染话题列表页
router.get('/',c_topic.showTopic)
// 渲染添加新话题页
router.get('/topic/create',c_topic.createTopic)
// 新增新话题
router.post('/createTopic',c_topic.handleTopic)
// 用户退出
router.get('/signout', c_user.handleSignout)
//话题详情页
router.get('/topic/:topicId', c_topic.showDetile)
module.exports = router;