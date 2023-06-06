import { useState, useEffect } from "react";
import "./RecipeLayout.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
export default function RecipeLayout({ endpoint }) {
  const [dish, setDish] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState([]);

  useEffect(() => {
    console.log(endpoint);
    fetch(`http://localhost:8001/${endpoint}/data`)
      .then((res) => res.json())
      .then((data) => setDish(data))
      .catch((err) => console.err(err));
  }, [endpoint]);

  useEffect(() => {
    fetch(`http://localhost:8001/${endpoint}/ingredients`)
      .then((res) => res.json())
      .then((data) => setIngredients(data))
      .catch((err) => console.err(err));
  }, [endpoint]);

  useEffect(() => {
    fetch(`http://localhost:8001/${endpoint}/preparation`)
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
      <header className="recipe-layout scroll-recipe">
        <section className="img-and-description">
          {dish.length ? (
            dish.map((dish) => {
              return (
                <article className="img-desc">
                  <div className="recipe-description">
                    <p className="recipe-name">{dish.name}</p>
                    <p className="description">{dish.description}</p>
                  </div>
                  <div
                    className="recipe-img"
                    style={{ backgroundImage: `url(${dish.image_url})` }}
                  ></div>
                </article>
              );
            })
          ) : (
            <h3 className="loading">Loading...</h3>
          )}
        </section>
        <section className="ingredients">
          <p className="ingredients-title">INGREDIENTS:</p>
          <ol>
            {ingredients.length ? (
              ingredients.map((ingredient) => {
                return <li>{ingredient.name}</li>;
              })
            ) : (
              <h3 className="loading">Loading...</h3>
            )}
          </ol>
        </section>
        <section className="preparation">
          <p className="preparation-title">PREPARATION METHOD:</p>
          <ol>
            {preparation.length ? (
              preparation.map((step) => {
                return <li>{step.description}</li>;
              })
            ) : (
              <h3 className="loading">Loading...</h3>
            )}
          </ol>
        </section>
      </header>
    </div>
  );
}
{
  /* <section className="recipe-img-and-description">
          {dish.length ? (
            dish.map((dish) => {
              return (
                <article className="img-desc">
                  <div
                    className="recipe-img"
                    style={{ backgroundImage: `url(${dish.image_url})` }}
                  ></div>
                  <div className="recipe-description">
                    <p className="recipe-name">{dish.name}</p>
                    <p className="description">{dish.description}</p>
                  </div>
                </article>
              );
            })
          ) : (
            <LoadingSpinner />
          )}
          <article className="ingredients">
            <p className="ingredients-title">INGREDIENTS:</p>
            <ol>
              {ingredients.length ? (
                ingredients.map((ingredient) => {
                  return <li>{ingredient.name}</li>;
                })
              ) : (
                <p>Error 500. Internal Server Issue</p>
              )}
            </ol>
          </article>
        </section>
        <section className="preparation">
          <p className="preparation-title">PREPARATION METHOD:</p>
          <ol>
            {preparation.length ? (
              preparation.map((step) => {
                return <li>{step.description}</li>;
              })
            ) : (
              <p>Error 500. Internal Server Issue</p>
            )}
          </ol>
        </section> */
}
