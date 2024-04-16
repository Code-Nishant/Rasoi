import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const APPLICATION_kEY = import.meta.env.VITE_APP_APPLICATION_kEY
const apiKey="apiKey="+APPLICATION_kEY;


const fetchDataByQuery=async (query)=>{
    
    try {
      
        // console.log(payload);
        // console.log(`${BASE_URL}/complexSearch?${apiKey}&query=${query}`);
        const {data}= await axios.get(`${BASE_URL}/complexSearch?${apiKey}&query=${query}&excludeIngredients=beef, bear, wine, cocktail`);
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}
export default fetchDataByQuery