import React from "react"
import style from '../recipe.module.css'
const Recipe=({title,calories,image, ingredients, recipeURL})=>{
    const getRecipe=()=>{
        window.open(recipeURL);
    }
    return(
        <div className={style.recipe} >
            <h1 >{title}</h1>
            <h3>Ingredients</h3>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories.toFixed(2)}</p>
            <img src={image} alt="RecipeImage" className={style.image}/>
            <button className={style.link} onClick={getRecipe}>Full Recipe Link</button>

        </div>
    )
}
export default Recipe;
