import axios from "axios";

const BASE_URL = "https://api.edamam.com/api/recipes/v2";

const APPLICATION_ID = "46cc9b6c";
const APPLICATION_kEY = "637a014f03b5e2eebe7f54344af63c6c";
const TYPE="public";


const fetchDataFromApi=async (queryStr)=>{
    
    try {
        const {data}=await axios.get(BASE_URL+"?type="+TYPE+"&app_id="+APPLICATION_ID+"&app_key="+APPLICATION_kEY+"&"+queryStr);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }
}
export default fetchDataFromApi


// https://api.edamam.com/api/recipes/v2?type=public&app_id=46cc9b6c&app_key=637a014f03b5e2eebe7f54344af63c6c&mealType=Breakfast
// BASE_URL+"?type="+TYPE+"&app_id="+APPLICATION_ID+"&app_key="+APPLICATION_kEY+"&mealType="....