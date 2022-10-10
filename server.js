const express = require('express');
const app = express();

app.use(express.static(__dirname+'/dist/shop-uicode'));

app.get('/*',(req, resp)=>{


    resp.sendFile(__dirname+'/dist/shop-uicode/index.html');
});

app.listen(process.env.PORT || 8080);