const Store = require("../../models/storesInfo.model")
const jwt = require("jsonwebtoken")
Login=async(req,res)=>{
        try{
        const store=await Store.findOne({_id:req.body.id})
        if(!store)
        return res.send("Store not found!")
      
        const token = jwt.sign({_id:store._id},process.env.TOKEN)
        res.header('authToken',token).send(token);
      }  catch(error){res.json({err:error.message})}
    
    }
   
    module.exports = {Login}