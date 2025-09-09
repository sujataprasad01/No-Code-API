// CRUD Logic

const Connector=require("../models/Connector");

// create connector
exports.createConnector=async(req, res)=>{
    try{
        const connector=await Connector.create({
            userId:req.auth.userId,
            ...req.body
        });
        res.status(201).json(connector);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}

// Gte all 
exports.getConnectors=async(req, res)=>{
    const connectors=await Connector.find({userId:req.auth.userId});
    res.json(connectors);
}

// Update

exports.updateConnector=async(req, res)=>{
    const connector=await Connector.findOneAndUpdate({
        _id:req.params.id,
        userId:req.auth.userId
    },req.body,
    {new:true}
    );
    res.json(connector);
}

// Delete

exports.deleteConnector=async(req, res)=>{
    await Connector.findOneAndDelete({
        __id:req.params.id,
        userId:req.auth.userId
    });
    res.json({message:"Connector deleted"})
}