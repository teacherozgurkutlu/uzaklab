const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const ejsLayout=require('express-ejs-layouts');
const mongoose=require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();     //process.env.API_KEY  ile ulaşılabilir
require('./config/passport')(passport);
const app=express();
const db=require('./config/keys').MongoURI; //heroku env ile değiştirildi
//const db=process.env.MongoURI;
mongoose.connect(db,{useNewUrlParser:true})
.then(()=>console.log('MongoDB Baglandı'))
.catch(err=>console.log(err));

const port=process.env.PORT || 3000;

app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'/views'));
app.use(ejsLayout);

const indexroute=require('./routes/index');
const kediroute=require('./routes/kedi');
const kopekroute=require('./routes/kopek');
const userroute=require('./routes/users');

app.listen(port,()=>{
    console.log('Server Çalışıyor port $ {port}');
});

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(function(req,res,next){
    //console.log("url:"+req.url);
    //console.log("Zaman:"+Date.now());
    next();

});
app.use(express.static('public'));
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    
});
app.get('/favicon.ico', (req, res) => res.status(204));
app.use('/',indexroute);
app.use('/user',userroute);
app.use('/kedi',kediroute);
app.use('/kopek',kopekroute);
app.use((req,res,next)=>{
    const error=new Error("Sayfa bulunamadı");
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status=(error.status||500);
    res.json({
        error:{message:error.message}
    });
});




/*
app.get('/',function(req,res){
   
    res.sendFile(path.join(__dirname, './public', 'anasayfa.html'));
    
});
app.get('/login',function(req,res){
   
    res.sendFile(path.join(__dirname, './public', 'login.html'));
    
});
app.get('/kediler',function(req,res){
   
    res.sendFile(path.join(__dirname, 'kediler.html'));
    
});
*/












 
