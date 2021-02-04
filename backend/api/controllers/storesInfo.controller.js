const Target = require("../../models/storesInfo.model");
var unirest = require("unirest");
const jwt = require("jsonwebtoken")
const {storeCredentialsHTML} = require("../../mailHTML/mail.HTML.js")
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SGKEY)


//Create 
const create =async (req, res) => {
 const target = await Target.create(req.body)

  .then(createdTarget => {
    const token = jwt.sign({_id:createdTarget._id},process.env.TOKEN)
    
        res.json({
            msg:"Created successfully",
            id:createdTarget._id,
            token:token
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

//Read by id
const Read = (req, res) => {
  Target.findById(req.params.id)
  .then(foundTarget => {
    res.json({
      msg: "This Target information",
      data: foundTarget
    });
  })
  .catch(error => {
    res.json({
      err: error.message
    });
  });
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


const SendMail =async (req,res)=> {
    const msg = {
      to: req.body.mail, 
      from: `BEAT THE RECEIPT🧾 <beatthereceipt@gmail.com>`, 
      subject: 'Beat the Receipt Subscription',
      html:storeCredentialsHTML(req.body.storeInfo,req.body.key,req.body.token),
    }
    sgMail
      .send(msg)
      .then(() => {
        res.json({
          msg: "Email Sent"
        });
      })
      .catch((error) => {
        console.error(error)
        res.json({
          msg: "ERROR"
        });
      })
    
  };

module.exports = {
    create,
    update,
    deletee,
    Read,
    SendMail
  };
  