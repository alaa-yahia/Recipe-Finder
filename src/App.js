import React, {useState} from 'react'
import './App.css';
//
function App() {
  const appId = '5e2bfbae';
  const appKey = '08a8bc2749ab58dc89085f5d6a95df5e';

  const [recipeName, setRecipeName] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [start, setStart] = useState(0);
  console.log(start);
  function getRecipes(){
    fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${appId}&app_key=${appKey}&from=${start}`)
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      const value = [...recipes, ...json.hits];
      setRecipes(value);
      setStart(start+10);
    }
    );
  }
  function handleClick() {
    getRecipes();

  }

  function handleChange(e) {
    const value = e.target.value;
    setRecipeName(value);
  }
  return (
    <div className="App">
      <form className="form">
        <input type='text' value={recipeName} onChange={handleChange}/>
        <button onClick={handleClick} type="button">Search</button>
      </form>
      <div className="recipes">
        { recipes.map((item, index) => (
            <div className="recipe" key={index}>
              <img src={item.recipe.image} alt={item.recipe.label}/>
              <p>{item.recipe.label}</p>
            </div>
            )
          ) 
        }
      </div>
      <p onClick={() => { getRecipes();}}>Loading More</p>
    </div>
  );
}

export default App;
