// Mongoose schema

const mongoose=require('mongoose');

const connectorSchema=new mongoose.Schema({
    userId:{
        type:String, 
        required:true
    },
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    method:{
        type:String,
        default:"GET"
    },
    headers:{
        type:Object,
        default:{}
    },
    params:{
        type:Object,
        default:{}
    },
    scheduleCron:{
        type:String,
        default:null
    },
    active:{
        type:Boolean,
        default:true
    }
}, {timestamps:true});

module.exports=mongoose.model('Connector', connectorSchema);