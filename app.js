// 程序入口文件

// 导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();
app.engine('html', require('express-art-template'));
// 处理静态资源
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));
app.use(bodyParser.urlencoded({
    extended: false
}));

// 使用路由分发模块
app.use(router);
//监听端口
app.listen('12312',()=>{
    console.log('^O^~@_@');
})
