const koa = require('koa')

const app = new koa();
//通过app.use注册一个中间件
//中间件本质也是一个函数
//context 上下文-当前请求的信息都在里面
app.use(async (context,next)=>{
    console.log('1')
    await next();
    console.log('4');
});
app.use(async (context,next)=>{
    console.log('2')
    await next();
    console.log('5');
});
app.use(async (context,next)=>{
    console.log('3')
    await next();
    console.log('6');
});

//开启一个http服务
//接受http请求并作处理.处理完后响应
app.listen(3000,()=>{
    console.log("启动成功");
})