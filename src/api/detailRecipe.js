const axios = require('axios');

// Get detailed recipe
async function getDetailRecipe(id){
    try{
        const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f697474cd25d4553b2b768541bf5fb6e`)
        return result.data;
    }catch(error){
        return false;
    }
}

module.exports = {
    getDetailRecipe
}
