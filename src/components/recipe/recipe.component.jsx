import React, { Component } from 'react';
import './recipe.styles.css';

export class Recipe extends Component {
    render() {
        const {title, imageUrl, instructions, id, onDelete} = this.props;
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions</h4>
                    <p>{instructions}</p>
                    <button type="button" onClick={() => onDelete(id)}>DELETE</button>
                </div>

            </div>
        )
    }
}

export default Recipe;

