import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/nav.component';
import NewRecipeForm from './components/new-recipe-form/new-recipe-form.component';
import RecipeList from './components/recipe-list/recipe-list.component';

export class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta sauce", "8 cups water", "1 box spaghetti"],
          imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          imageUrl: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
  }


  // Function that makes a new recipe from the props passed to it and sets the id number to next recipe id. It then adds this recipe to the recipes array and increments next recipe id by 1. 
  handleSave = (recipe) => {
  this.setState((prevState) => {
    const newRecipe = {... recipe, id: this.state.nextRecipeId};
    return {
      nextRecipeId: prevState.nextRecipeId + 1,
      recipes: [...this.state.recipes, newRecipe],
      showForm: false
    }
  })
}

// Delete recipe and update state recipes array
onDelete = (id) => {
  const recipes = this.state.recipes.filter((recipe) => recipe.id !== id);
  this.setState({recipes});
}


  
  render() {
    const {showForm} = this.state;
      return (
        <div className="App">

          <Nav onClickNewRecipe= {() => this.setState({showForm:true})}/>

          {showForm ? 
            <NewRecipeForm 
            onSave={this.handleSave} 
              onClose={() => this.setState({ showForm: false })}
            /> 
          : null }   

          <RecipeList recipes ={this.state.recipes} onDelete={this.onDelete}/>
        </div>

      );
    }
  }


export default App;
