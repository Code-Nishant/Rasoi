// import axios from "axios";

// const BASE_URL = "https://api.edamam.com/api/recipes/v2";

// const APPLICATION_ID = "46cc9b6c";
// const APPLICATION_kEY = "637a014f03b5e2eebe7f54344af63c6c";
// const TYPE="public";


// const fetchDataFromApi=async (queryStr)=>{
    
//     try {
//         const {data}=await axios.get(BASE_URL+"?type="+TYPE+"&app_id="+APPLICATION_ID+"&app_key="+APPLICATION_kEY+"&"+queryStr);
//         // console.log(data);
//         return data;
//     } catch (error) {
//         console.log(error)
//         return error;
//     }
// }
// export default fetchDataFromApi


import axios from "axios";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const APPLICATION_kEY = import.meta.env.VITE_APP_APPLICATION_kEY
const apiKey="apiKey="+APPLICATION_kEY;


const fetchDataFromApi=async (type, queryStr)=>{
    
    try {
        // console.log(BASE_URL+type+apiKey+"&"+"excludeIngredients=beef, bear, wine, cocktail"+"&"+queryStr);
        const {data}=await axios.get(BASE_URL+type+apiKey+"&"+"excludeIngredients=beef, bear, wine, cocktail"+"&"+queryStr +"&number=20");
        //uppar wala code sirf uncomment kar dena
        

        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}
export default fetchDataFromApi