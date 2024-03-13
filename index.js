import axios from 'axios';

const clientId = 'd1c4eed6-064d-464a-b3d7-d448ad30d036';
const clientSecret = '15tud2rgx8';
const redirectUri = 'http://localhost:3000';
const responseType='code';
const authCode = 'Q5o3iy';
const accessToken='eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiI2TUFFR1EiLCJqdGkiOiI2NWYxOGU1ODBiZmI5YzU3NThhOTgyOWUiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaXNBY3RpdmUiOnRydWUsInNjb3BlIjpbImludGVyYWN0aXZlIiwiaGlzdG9yaWNhbCJdLCJpYXQiOjE3MTAzMjk0MzIsImlzcyI6InVkYXBpLWdhdGV3YXktc2VydmljZSIsImV4cCI6MTcxMDM2NzIwMH0.F6mgvV9oDs9DiLSDAe0mgyiGh-RQ4hPPIrJSmTQ9210'
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