import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/recipes/";

const APPLICATION_kEY_1 = "c8ba721c9c8a4f18b3deb65979d27e47";
const APPLICATION_kEY_2="6824ed253cde42a1b69ac426dfe768a0"
const apiKey="apiKey="+APPLICATION_kEY_1;


const fetchDataById=async (payload)=>{
    
    try {
      
        // console.log(payload);
        const {data}= await axios.get(`${BASE_URL}${payload}/information?${apiKey}`);
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}
export default fetchDataById