export const environment = {
    production: false,
    apiUrl: 'http://192.168.1.143:8082',
    development:{
      apiAuthUrl: 'http://192.168.1.143:7000',
      apiEmailUrl: 'http://192.168.1.143:7001',
      apiClientUrl: 'http://192.168.1.143:8000',
      apiLinkUrl: 'http://192.168.1.143:3000',
      apiFileUploadUrl: 'http://192.168.1.143:5000',

      apiDriverLicense: 'http://192.168.1.143:8000',
      apiVehicule: 'http://192.168.1.143:8000',
      apiContract: 'http://192.168.1.143:8000',
    }
    
    // "defaultConfiguration": "development",
    //       "options": {
      //"proxyConfig":"src/proxy.conf.json"
    //       }
  };