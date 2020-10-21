import React from 'react';
import './App.css';
import Nav from './components/nav/nav.component';
import RecipeList from './components/recipe-list/recipe-list.component';

function App() {
  return (
    <div className="App">
      <Nav />
      <RecipeList />
    </div>
      
  );
}

export default App;
