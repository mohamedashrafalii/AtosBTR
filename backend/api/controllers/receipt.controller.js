const Receipt = require('../../models/receipt.model')
const StoresInfo = require('../../models/storesInfo.model')
// const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SGKEY)
//Create
var QRCode = require('qrcode')

const {
  receiptCreateValidation,
} = require('../../validations/receipt.validation')
const { receiptHTML2 } = require('../../mailHTML/mail.HTML.js')

const Create = async (req, res) => {
  const { error } = receiptCreateValidation(req.body)
  if (error) return res.send(error.details[0].message)
  const store = await StoresInfo.findById(req.body.storeId)
  if (!store)
    return res.status(404).send({ error: 'No Store exist with this key' })

  await Receipt.create(req.body)
    .then((createdReceipt) => {
      let Qr = null
      QRCode.toDataURL(
        `${process.env.FRONTENDURL}/receipt/${createdReceipt._id}`,
        (err, url) => {
          req.body.qrCode = url

          Receipt.updateOne({ _id: createdReceipt._id }, req.body).then(() => {
            res.json({
              qrCode: url,
            })
          })
        }
      )
    })
    .catch((error) => {
      res.json({
        err: error.message,
      })
    })
}

//Read by id
const Read = (req, res) => {
  Receipt.findById(req.params.id)
    .then((foundReceipt) => {
      res.json({
        msg: 'This Receipt information',
        data: foundReceipt,
      })
    })
    .catch((error) => {
      res.json({
        err: error.message,
      })
    })
}

// read all receipts
const ReadAll = (req, res) => {
  Receipt.findOne()
    .then((foundReceipt) => {
      res.json({
        msg: 'This Receipt information',
        data: foundReceipt.receipt,
      })
    })
    .catch((error) => {
      res.json({
        err: error.message,
      })
    })
}

// const SendMail =async (req,res)=> {

// receipt=await Receipt.findById(req.body.receiptId)

//   storeInfo=await StoresInfo.findById(receipt.storeId)

//   var itemNames =``
//   var itemPrice =``
//   var itemQuantity=``
//   var itemTotalPrice= ``

//   const qrCodeLink = 'beat-the-receipt.herokuapp.com'

//   receipt.receipt.items.map((item) => {
//       itemNames = itemNames + `</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1" data-mc-module-version="2019-10-22">
//       <tbody>
//         <tr>
//           <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
//   <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">${item.name}</span></div>
//   <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
//         </tr>
//       </tbody>`

//       itemPrice=itemPrice+` </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1" data-mc-module-version="2019-10-22">
//       <tbody>
//         <tr>
//           <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
//   <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$${item.price}</span></div>
//   <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
//         </tr>
//       </tbody>`

//       itemQuantity = itemQuantity+`</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.2" data-mc-module-version="2019-10-22">
//       <tbody>
//         <tr>
//           <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
//   <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">${item.quantity}</span></div>
//   <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
//         </tr>
//       </tbody>`

//       itemTotalPrice = itemTotalPrice +`</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.1" data-mc-module-version="2019-10-22">
//       <tbody>
//         <tr>
//           <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
//   <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$${item.quantity*item.price}</span></div>
//   <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
//         </tr>
//       </tbody>`

//   })

//   const msg = {
//     to: req.body.mail, // Change to your recipient
//     from: `${storeInfo.storeName} RECEIPT🧾 <beatthereceipt@gmail.com>`, // Change to your verified sender
//     subject: 'Your Receipt🧾',
//   //   text: 'a',
//     html:receiptHTML2(storeInfo,itemNames,itemPrice,itemQuantity,itemTotalPrice,qrCodeLink) ,
//   }
//   sgMail
//     .send(msg)
//     .then(() => {
//       res.json({
//         msg: "Email Sent"
//       });
//     })
//     .catch((error) => {
//       console.error(error)
//       res.json({
//         msg: "ERROR"
//       });
//     })

// };

const SendMail = async (req, res) => {
  receipt = await Receipt.findById(req.body.receiptId)
  storeInfo = await StoresInfo.findById(receipt.storeId)


  const qrCodeLink = `${process.env.FRONTENDURL}/receipt/${receipt._id}`

  

  const msg = {
    to: req.body.mail, // Change to your recipient
    from: `${storeInfo.storeName} RECEIPT🧾 <beatthereceipt@gmail.com>`, // Change to your verified sender
    subject: 'Your Receipt🧾',
    //   text: 'a',
    html: receiptHTML2(storeInfo, receipt, qrCodeLink),
  }
  sgMail
    .send(msg)
    .then(() => {
      res.json({
        msg: 'Email Sent',
      })
    })
    .catch((error) => {
      console.error(error)
      res.json({
        msg: 'ERROR',
      })
    })
}

module.exports = {
  Create,
  Read,
  SendMail,
  ReadAll,
}
