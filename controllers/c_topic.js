const m_topic = require('../models/m_topic')
//引入时间包
const moment = require('moment');

// 展示列表页面
const showTopic = function(req,res){
    // 调用数据库返回的数据
    m_topic.getAllTopic((err,data)=>{
        if(err){
            res.send({
                code:500,
                message:'服务器错误'
            })
        }
        res.render('index.html',{
           list:data,
           user:req.session.user
        });
    })
}
// 展示新增话题页
const createTopic = function(req,res){
    res.render('topic/create.html');
}
// 处理新增话题表单
const handleTopic = function(req,res){
    //获取数据
    const body = req.body;
    // 添加创建时间
    body.createdAt = moment().format();
    // 添加userID
    body.userId = req.session.user.id;
    console.log(body);
    // 向数据库中新增数据
    m_topic.insertTopic(body, (err, data) => {
        if(err){
            res.send({
                code:500,
                message:'服务器错误'
            })
        }

        res.send({
            code:200,
            message:'发布新话题成功'
        })
    })
}

// 展示话题详情页
const showDetile = function(req,res){
    res.render('topic/show.html');
    // req中自带params属性，可以获取到地址中的参数
    const topicId = req.params.topicId;
    m_topic.findIdTopic(topicId,(err,data)=>{
        if(err){
            res.send({
                code:500,
                message:'服务器错误'
            })
        }
        res.render('topic/show.html',{
            list:data[0]
        });
    })
}
module.exports = {
    showTopic,
    createTopic,
    handleTopic,
    showDetile
}