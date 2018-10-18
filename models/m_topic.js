const db = require('../tools/db')
// 查询新话题
const getAllTopic = (callback)=>{
    const sql = 'select * from topics ORDER BY `createdAt` DESC'
    db.query(sql,(err,data)=>{
        if(err){
            return callback(err,null)
        }
        callback(null,data);
    })
}
// 新增新话题
const insertTopic = (body,callback)=>{
    const sql = 'INSERT INTO `topics` SET ?'
    db.query(sql,body,(err,data)=>{
        if(err){
            return callback(err,null);
        }
        callback(null,data)
    })
}
// 根据id查询数据
const findIdTopic = (topicId,callback)=>{
    const sql = 'select * from topics where id=?'
    db.query(sql,topicId,(err,data)=>{
        if(err){
           return callback(err);
        }
        callback(null,data);
    })
}
// 修改新话题
const editTopic = (body,topicId,callback)=>{
    const sql = "update `topics` set `title`=?,`content`=? where `id`=?";
    db.query(sql,[body.title,body.content,topicId],(err,data)=>{
        if(err){
            return callback(err);
        }
        callback(null,data);
    })
}
// 删除话题
const deleteTopic = (topicId,callback)=>{
    const sql = "delete from `topics` where id=?"
    db.query(sql,topicId,(err,data)=>{
        if(err){
            return callback(err);
        }
        callback(null,data);
    })
}
module.exports = {
    getAllTopic,
    insertTopic,
    findIdTopic,
    editTopic,
    deleteTopic
}