const express = require('express');
const path = require('path');
const port= process.env.PORT || 4260;
const app = express(); 
const destinationdir = path.join(__dirname,'../dist/product-mart');
//hosting from dist folder
app.use(express.static(destinationdir));
console.log(`express hosting from ${destinationdir}`);

//serving index.html
app.get('*',(req,res)=>{
    res.sendFile(path.join(destinationdir,'index.html'));
});
console.log(`Serving index.html`);

//initialize app and listen to port
app.listen(port,() => console.log(`Server is Runing from port ${port}`)
);