const path=require('path');

module.exports.anasayfa=function(req,res){
   
    res.sendFile(path.join(__dirname, '../public', 'kopek.html'));
    
};
module.exports.pitbull=function(req,res){
   
    res.sendFile(path.join(__dirname, '../public', 'pitbull.html'));
    
};
module.exports.boxer=function(req,res){
   
    res.sendFile(path.join(__dirname, '../public', 'boxer.html'));
    
};