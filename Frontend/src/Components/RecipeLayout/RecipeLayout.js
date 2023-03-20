import { useState, useEffect } from "react";

export default function RecipeLayout({ endpoint }) {
  const [dish, setDish] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState([]);

  useEffect(() => {
    console.log(endpoint);
    fetch(`http://localhost:8000/${endpoint}/data`)
      .then((res) => res.json())
      .then((data) => setDish(data))
      .catch((err) => console.err(err));
  }, [endpoint]);

  useEffect(() => {
    fetch(`http://localhost:8000/${endpoint}/ingredients`)
      .then((res) => res.json())
      .then((data) => setIngredients(data))
      .catch((err) => console.err(err));
  }, [endpoint]);

  useEffect(() => {
    fetch(`http://localhost:8000/${endpoint}/preparation`)
      .then((res) => res.json())
      .then((data) => setPreparation(data))
      .catch((err) => console.err(err));
  }, [endpoint]);

  if (!dish || !ingredients || !preparation) {
    return <p>Loading...</p>;
  }
  return (
    <div className="recipe-layout-container">
      <div className="recipe-layout-layer"></div>
      <section className="recipe-layout">
        {dish.length ? (
          dish.map((recipe) => {
            return (
              <article className="recipe-img-and-description">
                <div
                  className="resipe-img"
                  style={{ backgroundImage: `url(${recipe.image_url})` }}
                ></div>
                <div className="recipe-description">
                  <p className="recipe-name">{recipe.name}</p>
                  <p className="description">{recipe.description}</p>
                </div>
              </article>
            );
          })
        ) : (
          <p>Error</p>
        )}
        <article className="ingredients-and-preparation">
          <div className="ingredients">
            <p>Ingredients</p>
            <ol>
              {ingredients.length ? (
                ingredients.map((ingredient) => {
                  return <li>{ingredient.name}</li>;
                })
              ) : (
                <p>Error 500. Internal Server Issue</p>
              )}
            </ol>
          </div>
          <div className="preparation">
            <p>Preparation method</p>
            <ol>
              {preparation.length ? (
                preparation.map((step) => {
                  return <li>{step.description}</li>;
                })
              ) : (
                <p>Error 500. Internal Server Issue</p>
              )}
            </ol>
          </div>
        </article>
      </section>
    </div>
  );
}
