import axios from "axios";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const APPLICATION_kEY = import.meta.env.VITE_APP_APPLICATION_kEY
const apiKey="apiKey="+APPLICATION_kEY;


const fetchDataById=async (payload)=>{
    
    try {
      
        console.log(payload);
        const {data}= await axios.get(`${BASE_URL}${payload}/information?${apiKey}`);
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}
export default fetchDataById