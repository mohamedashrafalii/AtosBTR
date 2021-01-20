const Target = require("../../models/product.model");
var unirest = require("unirest");
//Create 
const create =async (req, res) => {
 const target = await Target.create(req.body)

  .then(createdTarget => {
        res.json({
            msg:"Created successfully",
            id:createdTarget._id,
            data:createdTarget
          });
         
    },
    
    )
    .catch(error => {
      res.json({
        err: error.message
      });
    });
    
   
    //req.body={targetName:}
};



//read all
get= async (req, res) => {
  try{
  const target = await Target.find()

  if(target.length===0)
  res.json({msg : "empty"})
  else
  res.json({ data: target })
}
catch(error){res.json({err:error.message})}
};


update = async  (req, res) => {
  try{
    // const {error} = editTargetValidation(req.body)
    // if(error) return res.send(error.details[0].message) 
    
  const targetId = req.params.id;
  
  const target =  await Target.findById(targetId)
  if(!target) return res.status(404).send({error:  'Request does not exist'})
  

  const updateTarget = await Target.updateOne({'_id':targetId},req.body)
  res.json({msg: 'Request updated successfully' , data: target });
  }
  catch(error)
  {
    console.log(error)
  }
}
deletee =  async (req, res) => {
  try{ 
  const id = req.params.id;
  const deletedTarget = await Target.findByIdAndRemove(id) 
 
  res.json({msg:'deleted successfully', data: deletedTarget });
  }
  catch(error){
    console.log(error)
  }
}

module.exports = {
    create,
    update,
    deletee
  };
  