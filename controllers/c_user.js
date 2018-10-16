const m_user = require('../models/m_user');
// 处理函数
// 渲染登录页面
const showSignin = function(req,res){
    res.render('signin.html');
}
// 处理用户登录表单数据
const handleSignin = function(req,res){
    // 1、接收前台传入的数据
    const body = req.body;
    // 验证邮箱
    m_user.checkEmail(body.email,(err,data)=>{
        if(err){
            return res.send({
                code:500,
                message:'服务器错误'
            });
        }
        // 邮箱不存在
        if(!data[0]){
            return res.send({
                code:1,
                message:'邮箱不存在，快注册'
            })
        }
        // 验证密码
        if(body.password !== data[0].password){
            return res.send({
                code:2,
                message: '密码错误'
            });
        }
        // 使用express-session将用户信息保存
        req.session.user = data[0];
        res.send({
            code:200,
            message:'可以跳转了'
        })
    })
}
// 处理用户退出
const handleSignout = function(req,res){
    delete req.session.user;
    res.redirect('/signin');
}
module.exports = {
    showSignin,
    handleSignin,
    handleSignout
}