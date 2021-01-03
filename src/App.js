import React, {useState, useEffect} from "react"
import './App.css';
import Recipe from './Components/Recipe'
function App() {

  const {
    REACT_APP_ID,
    REACT_APP_KEY
  } = process.env;

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("chicken")
    useEffect(()=>{
      getRecipes()
    },[query])

  const getRecipes =async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data)
  };

  const updateSearch=e=>{
    setSearch(e.target.value)
  };

  const getSearch = e=>{
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-input" type="text" value={search} onChange={updateSearch} placeholder="Search for Recipes"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
            <Recipe key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    recipeURL={recipe.recipe.url}/>
        ))}
      </div>

    </div>
  );
}

export default App;
