const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const urlencoded=bodyparser.urlencoded({extended:false})
 
app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('index')

})

app.post('/body',urlencoded,function(req,res){
    res.send('welcome '+req.body.fname)
})


app.listen(3000,function(){
    console.log(`http://localhost:3000/`);
})
