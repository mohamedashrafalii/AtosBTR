const Joi = require('joi')
var product = Joi.object().keys({
    name:Joi.string().required(),
            description:Joi.string(),
            quantity:Joi.number().positive().min(1).required(),
            price:Joi.number().positive().required()
  });
  
module.exports = {
    
receiptCreateValidation : Receipt => {
    const createSchema = {
        storeId:Joi.required(),
        barcode:Joi.number().positive(),
        receipt:{
            vatPercentage:Joi.number().positive().required(),
            items:Joi.array().items(product)
        },
      
        
        }
      
        return Joi.validate(Receipt,createSchema)
}}
