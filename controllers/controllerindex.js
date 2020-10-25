const path=require('path');

module.exports.index=function(req,res){
   
    //res.sendFile(path.join(__dirname, '../public', 'kedi.html'));
    //res.render('sablon',{mesaj:"Merhaba kedi"});
    res.render('index');
    
};
