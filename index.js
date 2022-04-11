//Backup1

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000
// let PayStack = require('paystack-node')
// let APIKEY = 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
// const paystack = new PayStack('Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224')

// //var Paystack = require('paystack')('Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224')
// const axios = require("axios")
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const helmet = require("helmet");


// reference = '' + Math.floor((Math.random() * 1000000000) + 1);
// console.log(reference)

// /* 
//     Incase you are using mongodb atlas database uncomment below line
//     and replace "mongoAtlasUri" with your mongodb atlas uri.
// */
// // mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// //(1)list banks
// app.get('/list_banks', (req, res) => {
//   // console.log(req)
//   var options = {
//     method: 'GET',
//     url: 'https://api.paystack.co/bank',
//     // params: {i: 'Gin'},
//     headers: {
//       //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//       //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
//       Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//       //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
//       //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'
//     }
//   };
//   axios.request(options).then(function (response) {
//     console.log(response.data.data[0].name);

//   //})
// //})


//     //(2)verify account

//     //const user_bnk_code=response.data.data.bank_code
//     //const account_no="0049505600"
//     //const url="https://api.paystack.co/bank/resolve?account_number="+account_no+"&bank_code="+user_bnk_code
//     var options2 = {
//       method: 'GET',
//       //url: url,
//       url: 'https://api.paystack.co/bank/resolve?account_number=0049505600&bank_code=058',
//       headers: {
//         //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//         //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
//         Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//         //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
//         //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'

//       }
//     };
  
//     axios.request(options2).then(function (response3) {
//       console.log(response3.data);
//       const user_account_number = (response3.data.data.account_number);
//       const user_account_name = (response3.data.data.account_name);
//       //res.json(response)

// //     })
// //   })
// })
//       //(3)create transfer recipient
//       var options3 = {
//         method: 'POST',
//         url: 'https://api.paystack.co/transferrecipient',
//         //params: {
//         //FormData
//         data: {
//           //"name": user_account_name,
//           //"account_number":user_account_number
//           //"bank_code":user_bnk_code,
//           "type": "nuban",
//           "name": "Kayode Joel Fakorede",
//           "account_number": user_account_number,
//           "bank_code": "058",
//           "currency": "NGN"
//         },
//         headers: {
//           hostname: 'api.paystack.co',
//           //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//           //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224' 
//           Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//           //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'

//         }
//       };
//       axios.request(options3).then(function (response7) {
//         console.log(response7.data)
//         const recipient_code_data = (response7.data.data.recipient_code)
//         //res.json(response7.data[0])
//       })
//     })
//   })
        
// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`)
// })




const express = require('express')
const app = express()
const port = process.env.PORT || 3000
let PayStack = require('paystack-node')
let APIKEY = 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
const paystack = new PayStack('Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224')

//var Paystack = require('paystack')('Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224')
const axios = require("axios")
const bodyParser = require('body-parser');
const cors = require("cors");
const helmet = require("helmet");


reference = '' + Math.floor((Math.random() * 1000000000) + 1);
console.log(reference)

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


//(1)list banks
app.get('/list_banks', (req, res) => {
  // console.log(req)
  var options = {
    method: 'GET',
    url: 'https://api.paystack.co/bank',
    // params: {i: 'Gin'},
    headers: {
      //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
      //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
      Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
      //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
      //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data.data[0].name);

  //})
//})


    //(2)verify account

    //const user_bnk_code=response.data.data.bank_code
    //const account_no="0049505600"
    //const url="https://api.paystack.co/bank/resolve?account_number="+account_no+"&bank_code="+user_bnk_code
    var options2 = {
      method: 'GET',
      //url: url,
      url: 'https://api.paystack.co/bank/resolve?account_number=0049505600&bank_code=058',
      headers: {
        //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
        //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
        Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
        //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
        //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'

      }
    };
  
    axios.request(options2).then(function (response3) {
      console.log(response3.data);
      const user_account_number = (response3.data.data.account_number);
      const user_account_name = (response3.data.data.account_name);
      //res.json(response)

//     })
//   })
})
      //(3)create transfer recipient
      var options3 = {
        method: 'POST',
        url: 'https://api.paystack.co/transferrecipient',
        //params: {
        //FormData
        data: {
          //"name": user_account_name,
          //"account_number":user_account_number
          //"bank_code":user_bnk_code,
          "type": "nuban",
          "name": "Kayode Joel Fakorede",
          //"account_number": user_account_number,
          "account_number": "0049505600",
          "bank_code": "058",
          "currency": "NGN"
        },
        headers: {
          hostname: 'api.paystack.co',
          //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
          //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224' 
          Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
          //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'

        }
      };
      axios.request(options3).then(function (response7) {
        console.log(response7.data)
        const recipient_code_data = (response7.data.data.recipient_code)
        //res.json(response7.data[0])
      })
    })
  })
        
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})







// app.post('/textbelt', (req, res) => {
//   res.send('Hello Welcome to My World!')
// })

// //(1)list banks
// app.get('/list_banks', (req, res) => {
//   // console.log(req)
//   var options = {
//     method: 'GET',
//     url: 'https://api.paystack.co/bank',
//     // params: {i: 'Gin'},
//     headers: {
//       //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//       //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
//       Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//       //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
//       //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'
//     }
//   };
//   axios.request(options).then(function (response) {
//     console.log(response.data.data[0].name);

//     //(2)verify account

//     //const user_bnk_code=response.data.data.bank_code
//     //const account_no="0049505600"
//     //const url="https://api.paystack.co/bank/resolve?account_number="+account_no+"&bank_code="+user_bnk_code
//     var options2 = {
//       method: 'GET',
//       //url: url,
//       url: 'https://api.paystack.co/bank/resolve?account_number=0049505600&bank_code=058',
//       headers: {
//         //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//         //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
//         Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//         //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
//         //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'

//       }
//     };
  
//     axios.request(options2).then(function (response3) {
//       console.log(response3.data);
//       const user_account_number = (response3.data.data.account_number);
//       const user_account_name = (response3.data.data.account_name);
//       //res.json(response)


//       //(3)create transfer recipient
//       var options3 = {
//         method: 'POST',
//         url: 'https://api.paystack.co/transferrecipient',
//         //params: {
//         //FormData
//         data: {
//           //"name": user_account_name,
//           //"account_number":user_account_number
//           //"bank_code":user_bnk_code,
//           "type": "nuban",
//           "name": "Kayode Joel Fakorede",
//           "account_number": user_account_number,
//           "bank_code": "058",
//           "currency": "NGN"
//         },
//         headers: {
//           hostname: 'api.paystack.co',
//           //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//           //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224' 
//           Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//           //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'

//         }
//       };
//       axios.request(options3).then(function (response7) {
//         console.log(response7.data)
//         const recipient_code_data = (response7.data.data.recipient_code)
//         //res.json(response7.data[0])
//       })
        
//         });
//       })
//     })
//   })
// })














// let PayStack = require('paystack-node')
// let APIKEY = 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
// const paystack = new PayStack('Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224')

// //var Paystack = require('paystack')('Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224')
// const axios = require("axios")
// const express = require("express");
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const helmet = require("helmet");
// const app = express();
// //const port= 1000;
// /**
//  * Fake database of our products. Replace with your database query.
//  */

// reference = '' + Math.floor((Math.random() * 1000000000) + 1);
// console.log(reference)

// const products = [
//   {
//     id: 1,
//     name: "iPhone 11",
//     price: 1500000,
//     quantityAvailable: 6
//   },
//   {
//     id: 2,
//     name: "JBL speaker",
//     price: 300000,
//     quantityAvailable: 6
//   },
//   {
//     id: 3,
//     name: "New King James Bible",
//     price: 6000000
//   }
// ];

// //use helmet
// app.use(helmet());

// //use the body parser


// //next enable cors for all requests
// app.use(cors());

// app.get("/", (request, response) => {
//   response.send(products).status(200);

//   const getBreeds = async () => {
//     try {
//       return await axios.get('https://dog.ceo/api/breeds/list/all')
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const countBreeds = async () => {
//     const breeds = await getBreeds()

//     if (breeds.data.message) {
//       console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
//     }
//   }

//   countBreeds()

// });


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));



// app.post("/monnifyussd", (req, res) => {
//   var optionsA = {
//     method: 'POST',
//     url: ('https://sandbox.monnify.com/api/v1/auth/login'),
//     headers: {
//       Authorization: "Basic TUtfVEVTVF9VVU05TEpMRkdKOkNCREcwUkYxS0I0MFI4N1k2RzNNMDcxOFFYOFVLSkxT",
//     }
//   };
// axios.request(optionsA).then(function (responseA) {
//   console.log(responseA)
//   //let tok = accesTokdata.data.responseBody.accessToken
//   let tok = responseA.data.responseBody.accessToken
//   let toke = (tok.replace(/['"]+/g, ''));
//   let token = ("Bearer" + " " + toke);
//   console.log(token)

//   var optionsB = {
//     method: 'POST',
//     url: (('https://sandbox.monnify.com/api/v2/bank-transfer/reserved-accounts')),
//     dataB: {
//       "accountReference": Math.floor((Math.random() * 1000000000) + 1),
//       "accountName": "Test Reserved Account",
//       "currencyCode": "NGN",
//       "contractCode": "6565800670",
//       "customerEmail": "abidemiakorede@gmail.com",
//       "bvn": "22156707060",
//       "customerName": "olukayode Akorede",
//       // "getAllAvailableBanks": true,
//       "getAllAvailableBanks": false,
//       "preferredBanks": ["035"]
//     },
//     headers: {
//       Authorization: token,
//       'Content-Type': 'application/json'
//     },
//     data: dataB
//   };
//   axios.request(optionsB).then(function (responseC) {
//   }
//   )
//   var monnifyanswer = reponseC
//   // var  monnifyanswer2=res4.data
//   // console.log("reserved acct res1",res4);
//   // console.log("reserved acct bankName1",res4.data.responseBody.accounts[0].bankName);
//   // console.log("reserved acct accountName1",res4.data.responseBody.accounts[0].accountName);
//   // console.log("reserved acct accountNumber1",res4.data.responseBody.accounts[0].accountNumber);
// })
// })
// //////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////




// app.post('/sms', (request, response) => {
//   var options = {
//     method: 'POST',
//     url: 'https://afilnet-sms.p.rapidapi.com/',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'X-RapidAPI-Host': 'afilnet-sms.p.rapidapi.com',
//       'X-RapidAPI-Key': '321abdfc93msh110058fec28805bp1c6121jsned9d068b37e8'
//     },
//     data: {
//       user: 'Kayode4371',
//       from: 'Olukayode',
//       to: '2347035517578',
//       sms: 'Okay all is well',
//       method: 'sendsms',
//       class: 'sms',
//       password: 'bidemi'
//     }
//   };

//   axios.request(options).then(function (response) {
//     //console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// })

// //email notification
// app.post('/sms2', (request, response) => {
//   var options = {
//     method: 'POST',
//     url: 'https://afilnet-sms.p.rapidapi.com/',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'X-RapidAPI-Host': 'afilnet-sms.p.rapidapi.com',
//       'X-RapidAPI-Key': '321abdfc93msh110058fec28805bp1c6121jsned9d068b37e8'
//     },
//     data: {
//       user: 'Kayode4371',
//       from: 'Olukayode',
//       to: '2347035517578',
//       sms: 'Okay all is well',
//       method: 'sendsms',
//       class: 'sms',
//       password: 'bidemi'
//     }
//   };

//   axios.request(options).then(function (response) {
//     //console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// })

// //if okra okays the loan start the transfer process transfer loan

// //(1)list banks
// app.get('/list_banks', (req, res) => {
//   // console.log(req)
//   var options = {
//     method: 'GET',
//     url: 'https://api.paystack.co/bank',
//     // params: {i: 'Gin'},
//     headers: {
//       //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//       //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
//       Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//       //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
//       //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'
//     }
//   };
//   axios.request(options).then(function (response) {
//     console.log(response.data.data[0].name);

//     //(2)verify account

//     //const user_bnk_code=response.data.data.bank_code
//     //const account_no="0049505600"
//     //const url="https://api.paystack.co/bank/resolve?account_number="+account_no+"&bank_code="+user_bnk_code
//     var options2 = {
//       method: 'GET',
//       //url: url,
//       url: 'https://api.paystack.co/bank/resolve?account_number=0049505600&bank_code=058',
//       headers: {
//         //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//         //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
//         Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//         //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
//         //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'

//       }
//     };
//     axios.request(options2).then(function (response3) {
//       console.log(response3.data);
//       const user_account_number = (response3.data.data.account_number);
//       const user_account_name = (response3.data.data.account_name);
//       //res.json(response)


//       //(3)create transfer recipient
//       var options3 = {
//         method: 'POST',
//         url: 'https://api.paystack.co/transferrecipient',
//         //params: {
//         //FormData
//         data: {
//           //"name": user_account_name,
//           //"account_number":user_account_number
//           //"bank_code":user_bnk_code,
//           "type": "nuban",
//           "name": "Kayode Joel Fakorede",
//           "account_number": user_account_number,
//           "bank_code": "058",
//           "currency": "NGN"
//         },
//         headers: {
//           hostname: 'api.paystack.co',
//           //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//           //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224' 
//           Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//           //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'

//         }
//       };
//       axios.request(options3).then(function (response7) {
//         console.log(response7.data)
//         const recipient_code_data = (response7.data.data.recipient_code)
//         //res.json(response7.data[0])

//         //(4)finalize transfer of funds

//         var options4 = {
//           method: 'POST',
//           url: 'https://api.paystack.co/transfer',
//           data: {
//             "source": "balance",
//             "amount": "644",
//             // "recipient": "RCP_mv6gwu2t7tp82i5",
//             // "recipient":'RCP_mv6gwu2t7tp82i5',
//             "recipient": (recipient_code_data),
//             //"recipient":'RCP_soyz6l7aezsg2rr',
//             // "recipient":'RCP_mzzb2pl1g4szuu2',
//             "reason": "Inspiron Pay Day Loan"
//           },

//           headers: {
//             hostname: 'api.paystack.co',
//             //Authorization: 'Bearer sk_test_fca5cae7aea953d0f654450eb9fffae8f9b6d84b',
//             //Authorization: 'Bearer sk_test_7c1ab162a0b49023db3c0ba7dbc49c3219ab7224'
//             Authorization: 'Bearer sk_test_1a52de41c06e67ebeca555742efb3420827026db'
//             //Authorization: 'Bearer sk_test_006d65b35bec0871ca3e405283d5e78ec0034236'
//             //Authorization: 'Bearer sk_test_26480200585eab05a3770fdffbd059344512a781'
//           }
//         };


//         axios.request(options4).then(function (response8) {
//           // console.log(response8.data);
//           // res.json(response8.data)

//           //(5)verify payment using webhook here! and if payment is successful (1)send sms to user(2)give feedback to clientside app(3)save transaction to mongodb,firestore etc
//           //send sms to tell them the loan has been sent if it has been sent

//           //confirm transfer using webhook
//           app.post("/confirm_transfer", function (req, res) {
//           }
//           )
//           //notify user of disbursed funds
//           options = {
//             method: 'POST',
//             'url': 'https://http-api.d7networks.com/send?username=aart6601&password=CIFhaltW&dlr-method=POST&dlr-url=https://4ba60af1.ngrok.io/receive&dlr=yes&dlr-level=3&from=smsinfo&content=This is the sample content sent to test &to=+2348148323290',
//             headers: {
//               'content-type': 'application/json',
//             },
//             //data:'{"messages":[{"content":"Bulk SMSContent","from":"D7-Rapid","to":["Destination1","Destination2"]}]}'
//             data: '{"messages":[{"content":"Bulk SMSContent","from":"D7-Rapid","to":["+2347035517578","+2348148323290"]}]}'
//           };
//           axios.request(options).then(function (response) {
//             console.log(response.data);
//           }).catch(function (error) {
//             console.error(error)
//           })
//         });

//         app.post("/miscellenous", function (req, res) {
//           var options = {
//             method: 'POST',
//             url: 'https://afilnet-sms.p.rapidapi.com/',
//             headers: {
//               'content-type': 'application/x-www-form-urlencoded',
//               'X-RapidAPI-Host': 'afilnet-sms.p.rapidapi.com',
//               'X-RapidAPI-Key': '321abdfc93msh110058fec28805bp1c6121jsned9d068b37e8'

//             },
//             data: {
//               user: 'Kayode4371',
//               from: 'Olukayode',
//               to: '2347035517578',
//               sms: 'Okay all is well',
//               method: 'sendsms',
//               class: 'sms',
//               password: 'bidemi'
//             }
//           };

//           axios.request(options).then(function (response) {
//             // console.log(response.data);
//           }).catch(function (error) {
//             console.error(error);
//           });

//         })
//       })
//     })
//   })


