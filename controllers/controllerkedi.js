const path=require('path');

module.exports.anasayfa=function(req,res){
   
    //res.sendFile(path.join(__dirname, '../public', 'kedi.html'));
    //res.render('sablon',{mesaj:"Merhaba kedi"});
    if (req.user.name=="alp") {
      res.render('kopek',{
        user: req.user
      });  
    }
    else{
    res.render('kedi',{
        user: req.user
      });
    }
    
};
module.exports.siyam=function(req,res){
   
    res.sendFile(path.join(__dirname, '../public', 'siyam.html'));
    
};
module.exports.york=function(req,res){
   
    res.sendFile(path.join(__dirname,'../public', 'york.html'));
    
};

module.exports.post=function(req,res){
   
    const bilgi={name:req.body.name,
        kind:req.body.kind
    
    };

    res.status(201).json({
        mesaj:'Kedi isteğiniz alındı',
        istek:bilgi
    });
    
};