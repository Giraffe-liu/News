// 程序入口文件
// 导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'news'
};

const sessionStore = new MySQLStore(options);
const app = express();
app.engine('html', require('express-art-template'));
// 处理静态资源
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));
app.use(bodyParser.urlencoded({
    extended: false
}));

// 配置express-mysql-session
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));
// 使用路由分发模块
app.use(router);
//监听端口
app.listen('12312',()=>{
    console.log('^O^~^O^~^O^~^O^~^O^~^O^');
})
