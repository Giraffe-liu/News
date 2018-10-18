// 引用数据库模块
const db = require('../tools/db');
// 处理数据库
// 验证邮箱
const checkEmail = function(email,callback){
    const sql = 'select * from `users` where email=?';
    db.query(sql, email, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null,data);
    })
}
// 验证昵称
const checkNickname = function(nickname,callback){
    const sql = 'select * from `users` where nickname=?'
    db.query(sql,nickname,(err,data)=>{
        if(err){
            return callback(err)
        }
        callback(null,data);
    })
}
const addUser = function(body,callback){
    const sql = 'INSERT INTO `users` SET ?'
    db.query(sql,body,(err,data)=>{
        if(err){
            return callback(err)
        }
        callback(null,data)
    })
}
module.exports = {
    checkEmail,
    checkNickname,
    addUser
}