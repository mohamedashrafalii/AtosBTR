const Receipt = require("../../models/receipt.model");
const StoresInfo = require("../../models/storesInfo.model");
// const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SGKEY)
//Create 
var QRCode = require('qrcode')


   
     
    
const Create = async (req, res) => {
     await Receipt.create(req.body)
    .then(createdReceipt => {
          let Qr=null
          QRCode.toDataURL('www.youtube.com',  (err, url) => {
            req.body.qrCode=url
            
            Receipt.updateOne({'_id':createdReceipt._id},req.body)
            .then(()=>{
              let receipt=null
              Receipt.findById(createdReceipt._id).then((x)=>
              {
                receipt=x
                res.json({receipt:receipt})
              })
             
            }
             
              )
            
          })
          
    })
    .catch(error => {
      res.json({
        err: error.message
      });
    });

};

//Read by id
const Read = (req, res) => {
    Receipt.findById(req.params.id)
    .then(foundReceipt => {
      res.json({
        msg: "This Receipt information",
        data: foundReceipt.receipt
      });
    })
    .catch(error => {
      res.json({
        err: error.message
      });
    });
};

// read all receipts
const ReadAll = (req, res) => {
  Receipt.findOne()
  .then(foundReceipt => {
    res.json({
      msg: "This Receipt information",
      data: foundReceipt.receipt
    });
  })
  .catch(error => {
    res.json({
      err: error.message
    });
  });
};




const SendMail =async (req,res)=> {



receipt=await Receipt.findById(req.body.receiptId)

  storeInfo=await StoresInfo.findById(receipt.storeId)

  var itemNames =``
  var itemPrice =``
  var itemQuantity=``
  var itemTotalPrice= ``

  const qrCodeLink = 'beat-the-receipt.herokuapp.com'
  
  
  receipt.receipt.items.map((item) => {
      itemNames = itemNames + `</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1" data-mc-module-version="2019-10-22">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">${item.name}</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>`
  
      itemPrice=itemPrice+` </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1" data-mc-module-version="2019-10-22">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$${item.price}</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>`
  
      itemQuantity = itemQuantity+`</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.2" data-mc-module-version="2019-10-22">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">${item.quantity}</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>`
  
      itemTotalPrice = itemTotalPrice +`</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.1" data-mc-module-version="2019-10-22">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$${item.quantity*item.price}</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>` 
  
  })
  
  
  
  
  const msg = {
    to: req.body.mail, // Change to your recipient
    from: `${storeInfo.storeName} RECEIPT🧾 <beatthereceipt@gmail.com>`, // Change to your verified sender
    subject: 'Your Receipt🧾',
  //   text: 'a',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=Edge">
          <!--<![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {width: 600px;margin: 0 auto;}
        table {border-collapse: collapse;}
        table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
        img {-ms-interpolation-mode: bicubic;}
      </style>
    <![endif]-->
          <style type="text/css">
        body, p, div {
          font-family: trebuchet ms,helvetica,sans-serif;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #0055B8;
          text-decoration: none;
        }
        p { margin: 0; padding: 0; }
        table.wrapper {
          width:100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        @media screen and (max-width:480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .social-icon-column {
            display: inline-block !important;
          }
        }
      </style>
          <!--user entered Head Start-->
        
         <!--End Head user entered-->
        </head>
        <body>
          <center class="wrapper" data-link-color="#0055B8" data-body-style="font-size:14px; font-family:trebuchet ms,helvetica,sans-serif; color:#000000; background-color:#F7F7F7;">
            <div class="webkit">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#F7F7F7">
                <tr>
                  <td valign="top" bgcolor="#F7F7F7" width="100%">
                    <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="100%">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <!--[if mso]>
        <center>
        <table><tr><td width="600">
      <![endif]-->
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                          <tr>
                                            <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
        <tr>
          <td role="module-content">
            <p>Please view your receipt.</p>
          </td>
        </tr>
      </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="8929" data-end-index="9069" data-muid="q474Ek34Y7QfbLCmneBcKz">
          <tbody><tr data-start-index="9076" data-end-index="9080">
            <td style="font-size:6px; line-height:10px; background-color:#FFFFFF; padding:0px 0px 0px 0px;" valign="top" align="left" data-start-index="9089" data-end-index="9208"><img class="max-width" width="600" src="http://cdn.mcauto-images-production.sendgrid.net/c8d1ad2965539c5b/b61400b2-a3e9-46c0-b859-60269adf2c8d/942x533.png" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" data-start-index="9219" data-end-index="9528" height="" data-proportionally-constrained="false" data-responsive="false"></td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="9575" data-end-index="9713" data-muid="iKvU5CdNQaZE4RVi5AvEzz" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="9720" data-end-index="9724">
            <td style="padding:51px 20px 51px 20px; background-color:#479521; line-height:NaNpx;" height="100%" valign="top" bgcolor="#479521" data-start-index="9733" data-end-index="9880"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 72px">${storeInfo.storeName}</span></div>
    <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 36px">${storeInfo.address}</span></div>
    <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 36px">${storeInfo.phoneNumbers[0]}</span></div><div></div></div></td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:30px 20px 0px 20px; box-sizing:border-box;" bgcolor="" data-start-index="10299" data-end-index="10606" data-distribution="1,1,1,1">
          <tbody><tr role="module-content" data-start-index="10613" data-end-index="10639">
            <td height="100%" valign="top" data-start-index="10648" data-end-index="10679"><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
  
  
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="12129" data-end-index="12267" data-muid="fqWuyTMwoMZ4DGxXqSf8xV" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="12274" data-end-index="12278">
            <td style="padding:18px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="12287" data-end-index="12430"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Items</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
          </tr>
          ${itemNames}
  
  
  
  
      </table></td>
            </tr>
          </tbody>
        </table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="15377" data-end-index="15515" data-muid="owmGhLdZeET2HV2r1WKeu9" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="15522" data-end-index="15526">
            <td style="padding:18px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="15535" data-end-index="15678"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Price</span>&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><br></div>
    <div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
          </tr>
        </tbody>
        ${itemPrice}
      </table></td>
            </tr>
          </tbody>
        </table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Quantity</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
          </tr>
        </tbody>
  
        ${itemQuantity}
  
  
      
      </table></td>
            </tr>
          </tbody>
        </table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-3">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.1" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Total Price</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
          </tr>
        </tbody>
  
  
        ${itemTotalPrice}
      </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.1.1" data-mc-module-version="2019-10-22">
        <tbody>
          <tr>
            <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">$${receipt.receipt.totalPrice}</span></div>
    <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="24962" data-end-index="25179" data-muid="6dKhMuUDTxkUvLGAvkQ5mr">
          <tbody><tr data-start-index="25186" data-end-index="25190">
            <td style="padding:0px 0px 2px 0px;" role="module-content" bgcolor="#86B13B" data-start-index="25199" data-end-index="25300">
            </td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="1,1">
        <tbody>
          <tr role="module-content">
            <td height="100%" valign="top"><table width="290" style="width:290px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="code" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="wu37bbChMN3RoBtPdQAPta.1">
        <tbody>
          <tr>
            <td height="100%" valign="top" role="module-content"><!DOCTYPE html>
    <html>
        <head>
            <title>Testing QR code</title>
            
            
        </head>
        <body>
             
    
          <img id="barcode" src="https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeLink}&amp;size=100x100" alt="" title="Digital Receipt" width="100" height="100">
        </body>
    </html>
    </td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table><table width="290" style="width:290px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="code" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7b15db89-5f69-4f6d-a5d7-9ce7f33ae43c">
        <tbody>
          <tr>
            <td height="100%" valign="top" role="module-content"></td>
          </tr>
        </tbody>
      </table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody>
      </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="31375" data-end-index="31592" data-muid="q8yihTWW5RcBnUUSr8f491">
          <tbody><tr data-start-index="31599" data-end-index="31603">
            <td style="padding:0px 0px 2px 0px;" role="module-content" bgcolor="#86B13B" data-start-index="31612" data-end-index="31713">
            </td>
          </tr>
        </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" data-version="2" style="padding:35px 5px 80px 5px; background-color:#F7F7F7; box-sizing:border-box;" bgcolor="#F7F7F7" data-start-index="31760" data-end-index="32098" data-distribution="1,1">
          <tbody><tr role="module-content" data-start-index="32105" data-end-index="32131">
            <td height="100%" valign="top" data-start-index="32140" data-end-index="32171"><table width="295" style="width:295px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="33024" data-end-index="33162" data-muid="4B9t7Htois9ZYnvD3jmqzm" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="33169" data-end-index="33173">
            <td style="padding:18px 0px 18px 0px; background-color:#F7F7F7; line-height:NaNpx;" height="100%" valign="top" bgcolor="#F7F7F7" data-start-index="33182" data-end-index="33325"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
    <div style="font-family: inherit; text-align: inherit"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif">Thank you for not using paper receipt and being environmentally friendly&nbsp;</span></div>
    <div style="font-family: inherit; text-align: inherit">&nbsp;</div><div></div></div></td>
          </tr>
        </tbody></table></td>
            </tr>
          </tbody>
        </table><table width="295" style="width:295px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
          <tbody>
            <tr>
              <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="34875" data-end-index="35013" data-muid="2RC6fJy3N4BFUJLHgwHeGb" data-mc-module-version="2019-10-22">
          <tbody><tr data-start-index="35020" data-end-index="35024">
            <td style="padding:18px 0px 18px 0px; background-color:#F7F7F7; line-height:NaNpx;" height="100%" valign="top" bgcolor="#F7F7F7" data-start-index="35033" data-end-index="35176"><div><div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif">Beat The Receipt</span></div>
    <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif">beatthereceipt@gmail.com</span></div>
    <div style="font-family: inherit; text-align: right"><span style="color: #7f7f7f; font-family: arial, helvetica, sans-serif">Cairo, Egypt&nbsp;</span></div>
    <div style="font-family: inherit; text-align: right">&nbsp;</div><div></div></div></td>
          </tr>
        </tbody></table></td>
            </tr>
          </tbody>
        </table></td>
          </tr>
        </tbody></table></td>
                                          </tr>
                                        </table>
                                        <!--[if mso]>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                                <![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </center>
        </body>
      </html>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
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







// const SendMail =async (req,res)=> {


//   //let img = await QRCode.toDataURL('youtube.com');
  
//  var transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
   
//      user: "receiptreceipt2020@gmail.com",
//      pass: "receipt2020A"
//    }
//  });
 
//  var mailOptions = {
//    from: '"PHARMACYSTEM 🧾" <receiptreceipt2020@gmail.com>',
//    to:req.body.mail,
//    subject: 'Your Receipt',
//    text: req.body.mailBody
//  };
 
//  transporter.sendMail(mailOptions, function(error, info){
//    if (error) {
//     return res.status(400).send(error)
//    } else {
//     return res.send('Email sent: ' + info.response);
//    }
//  });
// };

module.exports = {
  Create,
  Read,
  SendMail,
  ReadAll
};
