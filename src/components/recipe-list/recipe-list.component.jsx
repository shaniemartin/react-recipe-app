import React, { Component } from 'react';
import Recipe from '../recipe/recipe.component';
import './recipe-list.styles.css';


export class RecipeList extends Component {
    render() {
        return (
            <div className="recipe-list-container">
                {this.props.recipes.map((recipe) => (
                    <Recipe key={recipe.id} {...recipe} />
                ))}  
            </div>
        )
    }
}


RecipeList.defaultProps = {
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
        ]
}

export default RecipeList;
