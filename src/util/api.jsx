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

const BASE_URL = "https://api.spoonacular.com/recipes/";

const APPLICATION_kEY_1 = "c8ba721c9c8a4f18b3deb65979d27e47";
const APPLICATION_kEY_2="6824ed253cde42a1b69ac426dfe768a0"
const apiKey="apiKey="+APPLICATION_kEY_2;


const fetchDataFromApi=async (queryStr ,type)=>{
    
    try {
        console.log(BASE_URL+type+apiKey+"&"+"excludeIngredients=beef, bear, wine, cocktail"+"&"+queryStr);
        const {data}=await axios.get(BASE_URL+type+apiKey+"&"+"excludeIngredients=beef, bear, wine, cocktail"+"&"+queryStr);

        // https://api.spoonacular.com/recipes/complexSearch?apiKey=c8ba721c9c8a4f18b3deb65979d27e47&query=gulab jamun

        // {{baseUrl}}/recipes/complexSearch?diet=breakfast
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}
export default fetchDataFromApi