const imgUpload = require('../db/storeImage');
const { saveHistory, saveRecipe } = require('../db/dbConfig');

const { getRecipe } = require('../api/getRecipe');
const { getDetailRecipe } = require('../api/detailRecipe')

let resultImage = '';

// Handle scan image
async function handleImage(req, res) {
    try {
      if (!req.file || !req.body.title || !req.body.description) {
        throw new Error('Bad Request');
      }
  
      resultImage = await imgUpload.uploadToGcs(req, res);
      if (resultImage === undefined || resultImage === false) {
        throw new Error('Error uploading image');
      }
  
      const arr = mlRes.map(item => item);
      const ingredients = arr.join(',');

      const recipeUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=f697474cd25d4553b2b768541bf5fb6e&ingredients=${ingredients}&number=2`;
      const recipeRes = await getRecipe(recipeUrl);

      let recipeArr = [];
      for (const recipeData of recipeRes.data) {
        const detailRecipe = await getDetailRecipe(recipeData.id);
        if (!detailRecipe) {
          throw new Error('No recipe found');
        }
  
        const recipe = {
          recipeId: recipeData.id,
          title: recipeData.title,
          image: recipeData.image,
          usedIngredients: recipeData.usedIngredients.map(ingredient => ingredient.name).join(", "),
          missedIngredients: recipeData.missedIngredients.map(ingredient => ingredient.name).join(", "),
          amount: detailRecipe.extendedIngredients.map(ingredient => ingredient.original),
          instruction: detailRecipe.instructions,
          owner: req.userId,
        };
        recipeArr.push(recipe);
      }

      const data = {
        owner: req.userId,
        title: req.body.title,
        description: req.body.description,
        imageUrl: resultImage,
        createdAt: new Date().getTime(),
        ingredients: ingredients,
      };
  
      const save = await saveHistory(data);
      if (save === false) {
        throw new Error('Failed to save history');
      }

      for (const recipe of recipeArr) {
        recipe.idHistory = save.id;
        const addRecipe = await saveRecipe(recipe);
        if (!addRecipe) {
          throw new Error('Cannot save recipe');
        }
      }
  
      return res.status(200).json({ error: false, message: 'success', idHistory: save.id });
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }
  

module.exports = {
    handleImage
};