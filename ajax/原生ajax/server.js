//引入expres

const express = require('express');

//创建应用对象
const app = express();
//创建路由规则
//request对请求报文的封装
//response对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello AJAX GET');
});
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //允许设置自定义响应头信息
    response.setHeader('Access-Control-Allow-Header', '*');
    response.send('hello AJAX POST');
});
app.all('/json-server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Header', '*');
    //设置响应体
    const data = {
        name: 'crj'
    };
    let str = JSON.stringify(data);
    response.send(str);
});

//ie缓存问题专用
app.get('/ie', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('hello AJAX ie-6');
});

//监听端口启动服务
app.listen(8000, () => {
    console.log("服务器已经启动了,8000端口正在监听中...");
})