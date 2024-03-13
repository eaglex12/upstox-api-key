import axios from 'axios';

const clientId = '';
const clientSecret = '';
const redirectUri = '';
const responseType='code';
const authCode = '';
const accessToken=''
const instrumentKeys = 'NSE_EQ:NHPC'; 


let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.upstox.com/v2/market-quote/quotes?instrument_key=NSE_EQ|INE467B01029',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
    },
    // params: {
    //     'instrument_key': instrumentKeys,
    //   },
    
      
  };
  
  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
