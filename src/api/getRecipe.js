const axios = require('axios');

// Get the recipe
async function getRecipe(recipeUrl) {
  try {
    const recipe = await axios.get(recipeUrl)
    return recipe;
  } catch (error) {
    return false;
  }
}

module.exports = {
  getRecipe
};
