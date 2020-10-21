import React, { Component } from 'react';
import Recipe from '../recipe/recipe.component';
import './recipe-list.styles.css';


export class RecipeList extends Component {
    render() {
        const {recipes} = this.props;

        return (
            <div className="recipe-list-container">
                {recipes.map((recipe) => (
                    <Recipe onDelete={this.props.onDelete} key={recipe.id} {...recipe} />
                ))}  
            </div>
        )
    }
}



export default RecipeList;
