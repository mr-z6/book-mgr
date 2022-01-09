const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});

const UserModal =mongoose.model('User',UserSchema);

const connect = () =>{
    //链接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
    //当数据库链接成功后，做一些事情
    mongoose.connection.on('open',()=>{
    console.log('链接成功');
    //创建文档
    const user = new UserModal({
        nickname:'小hong',
        password:'123456',
        age:12,

    });
    user.age = 13;
    //同步到数据库
    user.save();
    });

}

connect();