import React, { Component } from 'react';
import './new-recipe-form.styles.css';

export class NewRecipeForm extends Component {
    constructor(props) {
        super(props)   
        this.state = {
             title: '',
             instructions: '',
             ingredients: [''],
             img: ''
        }

    }


    // When you type into an input update the state matching the name of that input to the value you typed in
    // Arrow functions used here to stop the need for binding this.
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }


    // Add new ingredient input when you click the plus button
    handleNewIngredient = () => {
        const {ingredients} = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }



    // When you change an ingredient input, update the ingredient array.
    handleIngredientChange = (event) => {
        // We need to know which index of the ingredients array we are changing. We can do this by splitting off the index from the name property we gave it. 
        const index = Number(event.target.name.split('-')[1]);

        // map through the ingredients. If the index matched the index we have singled out above then change that value to the value we typed in, if it doesn't match then return the original value. 
        const ingredients = this.state.ingredients.map((ingredient, idx) => (
            idx === index ? event.target.value : ingredient
        ));

        // Set state to the new ingredients array created above containing our new value
        this.setState({ingredients});

    }



    handleSumbit = (event) => {
        event.preventDefault();
        // Pass all of the new values inside of state into the onSave method
        this.props.onSave({...this.state});
        // Reset the state so that the form can be used again
        this.setState({
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        })
    }



    
    render() {
        // Destructure state properties
        const {title, instructions, img, ingredients} = this.state;

        // For each ingredient in the array create an input - this is to be easily used later 
        let ingredientInputs = ingredients.map((ingredient, index) => (
            <div className="recipe-form-line" key={`ingredient-${index}`}>
                <label>{index + 1}.
                    <input 
                        type="text"
                        name={`ingredient-${index}`}
                        value={ingredient}
                        size={45}
                        autoComplete='off'
                        placeholder='Ingredient'
                        onChange={this.handleIngredientChange}
                    />
                </label>
            </div>
        ));




        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSumbit}>
                    <button className="close-button" type="button" onClick={this.props.onClose}>X</button>

                    <div className="recipe-form-line">
                        <label htmlFor="recipe-title-input">Title</label>
                        <input 
                            type="text"
                            id="recipe-title-input"
                            key="title"
                            name="title"
                            value={title}
                            size={42}
                            autoComplete="off"
                            onChange = {this.handleChange}
                        />
                    </div>

                    <label htmlFor="recipe-instructions-input" style={{marginTop: '5px'}}>Instructions</label>
                    <textarea 
                        type="Instructions"
                        id="recipe-instructions-input"
                        key="instructions"
                        name="instructions"
                        value={instructions}
                        rows="8"
                        cols="50"
                        autoComplete="off"
                        onChange={this.handleChange}
                    />
                    {ingredientInputs}
                    <button className="buttons" type="button" onClick={this.handleNewIngredient}>+</button>
                    <div className="recipe-form-line">
                        <label htmlFor="recipe-img-input">Image Url</label>
                        <input 
                            type="text"
                            id="recipe-img-input"
                            name="img"
                            placeholder=''
                            value={img}
                            size={36}
                            autoComplete="off"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="buttons" type="submit" style={{ alignSelf: 'flex-end', marginRight: 0 }}>SAVE</button>
                </form>
                
            </div>
        )
    }
}

export default NewRecipeForm;
