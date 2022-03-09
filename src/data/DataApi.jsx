const axios = require('axios');

// function wite data from api -mocky.io
export const dataApi = async ()=>{
    try{
        let data = await axios.get("https://run.mocky.io/v3/e58f4b22-e0fa-48a3-9fcf-a75a14d471ce")
        data= [...Object.keys(data.data).map((key) => data.data[key])]
        return data
    }catch(err){
        throw err
    }
}



