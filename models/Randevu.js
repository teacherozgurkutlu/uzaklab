const mongoose=require('mongoose');
const RandevuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },   
    
    time:{
        type:Date,
        default:Date.now
    }
});

const Randevu = mongoose.model('Randevu',RandevuSchema);
module.exports = Randevu;