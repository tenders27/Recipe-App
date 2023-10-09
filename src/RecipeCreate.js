import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({addRecipes}) {

    const initialFormState = {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    };
  
    const [formData, setFormData] = useState({ ...initialFormState })
  
    const handleChange = ({ target }) => {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Recipe added: ", formData);
    addRecipes([formData]);
    setFormData({ ...initialFormState });
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleChange}
                  placeholder="Cuisine"
                  />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  placeholder="Photo"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea 
                  id="ingredients" 
                  name="ingredients" 
                  required={true} 
                  rows={2} 
                  value={formData.ingredients}
                  onChange={handleChange}
                  placeholder="Ingredients"
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea 
                    id="preparation" 
                    name="preparation" 
                    required={true} 
                    rows={2} 
                    value={formData.preparation}
                    onChange={handleChange}
                    placeholder="Preparation"
                  />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
