const express = require('express');
const path    = require('path');
const hbs     = require('hbs');
const app     = express();
const port    = process.env.PORT || 8000;



// to set view engine
app.set('view engine','hbs');

// public static path
// built in middlewar
// relative path , absolute path
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));

// routing 
app.get('',(req,res)=>{
    res.render("index");  // index.hbs
 })

app.get('/about',(req,res)=>{
    // here we swap parameter so here first parametr is request & 2nd parameter is response
      res.send("hello world from about us page");
    //
 })

 app.get('/weather',(res,req)=>{
  // here we swap parameter so here first parametr is request & 2nd parameter is response
    req.send("hello world from about us page");
  //
})

 app.get('*',(req,res)=>{
  res.render('404',{
    errorcomment:"OOps page could not be found!"
  });
})

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})