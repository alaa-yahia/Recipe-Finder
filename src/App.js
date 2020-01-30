import React, {useState} from 'react'
import './App.css';

function App() {
  const appId = '5e2bfbae';
  const appKey = '08a8bc2749ab58dc89085f5d6a95df5e';
  const [recipeName, setRecipeName] = useState('');
  const [recipeDetails, setRecipeDetails] = useState('');

  console.log(recipeDetails);
  function handleClick() {
    fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${appId}&app_key=${appKey}`)
    .then(data => data.json())
    .then((data) => setRecipeDetails(data));

  }

  function handleChange(e) {
    const value = e.target.value;
    setRecipeName(value);
  }
  return (
    <div className="App">
      <input type='text' value={recipeName} onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default App;
