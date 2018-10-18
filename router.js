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
//渲染编辑按钮
router.get('/topic/:topicId/edit',c_topic.showEdit)
//修改编辑页面的数据
router.post('/topic/:topicId',c_topic.handleEdit)
// 删除话题
router.get('/topic/:topicId/delete',c_topic.deleteTopic);
// 渲染注册页面
router.get('/signup',c_user.showSignup);
// 处理注册页面的表单请求
router.post('/signup',c_user.handleSignup);
module.exports = router;