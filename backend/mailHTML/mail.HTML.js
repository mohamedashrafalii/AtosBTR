
const listItems = (receipt) => {
  let itemNames= ``
  let itemPrice=``
  let itemQuantity=``
  let itemTotalPrice=``

  let subtotal = 0
  receipt.receipt.items.map((item) => {
    subtotal += item.quantity*item.price
    itemNames = itemNames + `</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">${item.name}</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
      </tr>
    </tbody>`

    itemPrice=itemPrice+`</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1" data-mc-module-version="2019-10-22">
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

return({itemNames,itemPrice,itemQuantity,itemTotalPrice,subtotal})

}

 
const receiptHTML = (storeInfo,receipt,qrCodeLink) => {
  let valuesHTML=listItems(receipt)
  return(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
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
          
        </td>
      </tr>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="9575" data-end-index="9713" data-muid="iKvU5CdNQaZE4RVi5AvEzz" data-mc-module-version="2019-10-22">
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
      </tbody>
      
      
     ${valuesHTML.itemNames}



    </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="abd17192-ff19-4c1c-8955-420c52d9ed33">
      <tbody>
        <tr>
          <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
              <tbody>
                <tr>
                  <td style="padding:0px 0px 10px 0px;" bgcolor="#479521"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
          </tr>
        </tbody>
      </table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="15377" data-end-index="15515" data-muid="owmGhLdZeET2HV2r1WKeu9" data-mc-module-version="2019-10-22">
        <tbody><tr data-start-index="15522" data-end-index="15526">
          <td style="padding:18px 0px 18px 0px; background-color:#ffffff; line-height:NaNpx;" height="100%" valign="top" bgcolor="#ffffff" data-start-index="15535" data-end-index="15678"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Quantity</span>&nbsp;</div>
  <div style="font-family: inherit; text-align: inherit"><br></div>
  <div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
        </tr>
      </tbody>
      
      
      
      ${valuesHTML.itemQuantity}



    </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="02f68985-bfbb-4ccd-ad70-1230b2ac073b">
      <tbody>
        <tr>
          <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
              <tbody>
                <tr>
                  <td style="padding:0px 0px 10px 0px;" bgcolor="#479521"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
          </tr>
        </tbody>
      </table><table width="140" style="width:140px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2" data-mc-module-version="2019-10-22">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 22px">Price</span></div>
  <div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
        </tr>
      </tbody>
    
    
    
      ${valuesHTML.itemPrice}



    </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="39447a8f-d6e9-4320-b11b-df1db1ac90b5">
      <tbody>
        <tr>
          <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
              <tbody>
                <tr>
                  <td style="padding:0px 0px 10px 0px;" bgcolor="#479521"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
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
    
    
    
      ${valuesHTML.itemTotalPrice}




    </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="bff8a0d9-cff1-4b69-8399-e83b8aef6e81">
      <tbody>
        <tr>
          <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
            <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
              <tbody>
                <tr>
                  <td style="padding:0px 0px 10px 0px;" bgcolor="#479521"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
          </tr>
        </tbody>
      </table></td>
        </tr>
      </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="1,1,1">
      <tbody>
        <tr role="module-content">
          <td height="100%" valign="top"><table width="186" style="width:186px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1.1">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">Subtotal</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1.1.2">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">VAT</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1.1.2.1">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="color: #606060; font-size: 36px">Total</span></div><div></div></div></td>
        </tr>
      </tbody>
    </table></td>
          </tr>
        </tbody>
      </table><table width="186" style="width:186px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1.1.1">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: inherit"><br></div>
  <div style="font-family: inherit; text-align: inherit"><br></div>
  <div style="font-family: inherit; text-align: inherit"><br></div>
  <div style="font-family: inherit"><br></div><div></div></div></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1.1.1.2">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><br></div>
  <div style="font-family: inherit; text-align: inherit">&nbsp;<span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 36px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #606060; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial">${receipt.receipt.vatPercentage}%</span></div>
  <div style="font-family: inherit; text-align: start"><br></div><div></div></div></td>
        </tr>
      </tbody>
    </table></td>
          </tr>
        </tbody>
      </table><table width="186" style="width:186px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1.1.1.1">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 36px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; text-align: center; color: #606060; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial">$${(valuesHTML.subtotal).toFixed(2)}</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1.1.1.1.2">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 36px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; text-align: center; color: #606060; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial">$${(valuesHTML.subtotal * (receipt.receipt.vatPercentage/100)).toFixed(2) }</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="owmGhLdZeET2HV2r1WKeu9.2.1.3.1.1.1.1.1">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:NaNpx; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit">&nbsp;</div>
  <div style="font-family: inherit; text-align: center"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 36px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; text-align: center; color: #606060; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial">$${(valuesHTML.subtotal + valuesHTML.subtotal * (receipt.receipt.vatPercentage/100)).toFixed(2) }</span></div>
  <div style="font-family: inherit; text-align: center"><br></div><div></div></div></td>
        </tr>
      </tbody>
    </table></td>
          </tr>
        </tbody>
      </table></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="24962" data-end-index="25179" data-muid="6dKhMuUDTxkUvLGAvkQ5mr">
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
        <br>
        Scan to get receipt<br>
        <a href="${qrCodeLink}">or press here</a>
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
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="cdf8a0d4-f940-4831-ae91-784c6f34dd31">
      <tbody>
        <tr>
          <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
            <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="290" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/c8d1ad2965539c5b/b61400b2-a3e9-46c0-b859-60269adf2c8d/942x533.png">
          </td>
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
    </html>`)
};



const storeCredentialsHTML = (storeInfo,key,token) => {
  return(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
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
          
        </td>
      </tr>
    </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="8929" data-end-index="9069" data-muid="q474Ek34Y7QfbLCmneBcKz">
        <tbody><tr data-start-index="9076" data-end-index="9080">
          <td style="font-size:6px; line-height:10px; background-color:#FFFFFF; padding:0px 0px 0px 0px;" valign="top" align="left" data-start-index="9089" data-end-index="9208"><img class="max-width" width="600" src="http://cdn.mcauto-images-production.sendgrid.net/c8d1ad2965539c5b/b61400b2-a3e9-46c0-b859-60269adf2c8d/942x533.png" alt="" border="0" style="display:block; color:#000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" data-start-index="9219" data-end-index="9528" height="" data-proportionally-constrained="false" data-responsive="false"></td>
        </tr>
      </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="9575" data-end-index="9713" data-muid="iKvU5CdNQaZE4RVi5AvEzz" data-mc-module-version="2019-10-22">
        <tbody><tr data-start-index="9720" data-end-index="9724">
          <td style="padding:51px 20px 51px 20px; background-color:#479521; line-height:NaNpx;" height="100%" valign="top" bgcolor="#479521" data-start-index="9733" data-end-index="9880"><div><div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 72px">Subscription</span></div>
  <div style="font-family: inherit; text-align: center"><br></div>
  <div style="font-family: inherit; text-align: center"><br></div>
  <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 48px">${storeInfo.storeName}&nbsp;</span></div>
  <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 36px">${storeInfo.address}</span></div>
  <div style="font-family: inherit; text-align: center"><span style="color: #ffffff; font-size: 36px">+${storeInfo.phoneNumbers[0]}</span></div><div></div></div></td>
        </tr>
      </tbody></table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="1,3">
      <tbody>
        <tr role="module-content">
          <td height="100%" valign="top"><table width="145" style="width:145px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f820fca7-0bb0-4c89-9007-fb4e7d440819">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit"><span style="font-size: 24px">KEY :</span></div><div></div></div></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="f820fca7-0bb0-4c89-9007-fb4e7d440819.1">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit"><span style="font-size: 24px">TOKEN :</span></div><div></div></div></td>
        </tr>
      </tbody>
    </table></td>
          </tr>
        </tbody>
      </table><table width="435" style="width:435px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
        <tbody>
          <tr>
            <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="3d06f243-d02d-40f2-a58c-52cebc6c08a7">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit">${key}</div><div></div></div></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="836bb588-af37-4b0d-b2d6-d7c2dcf1bb2d">
      <tbody>
        <tr>
          <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit">${token}</div><div></div></div></td>
        </tr>
      </tbody>
    </table></td>
          </tr>
        </tbody>
      </table></td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-start-index="24962" data-end-index="25179" data-muid="6dKhMuUDTxkUvLGAvkQ5mr">
        <tbody><tr data-start-index="25186" data-end-index="25190">
          <td style="padding:0px 0px 2px 0px;" role="module-content" bgcolor="#86B13B" data-start-index="25199" data-end-index="25300">
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
    </html>`)
};



module.exports = {
    receiptHTML,
    storeCredentialsHTML
  };
  