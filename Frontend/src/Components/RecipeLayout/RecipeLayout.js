import { useState, useEffect } from "react";
import "./RecipeLayout.css";
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
      <header className="recipe-layout">
        <section className="recipe-img-and-description">
          {dish.length ? (
            dish.map((dish) => {
              return (
                <div className="img-desc">
                  <div
                    className="recipe-img"
                    style={{ backgroundImage: `url(${dish.image_url})` }}
                  ></div>
                  <div className="recipe-description">
                    <p className="recipe-name">{dish.name}</p>
                    <p className="description">{dish.description}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Error</p>
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
        </section>
      </header>
    </div>
    // <div className="recipe-layout-container">
    //   <div className="recipe-layout-layer"></div>
    //   <section className="recipe-layout">
    //     {dish.length ? (
    //       dish.map((dish) => {
    //         return (
    //           <article className="recipe-img-and-description">
    //             <div
    //               className="recipe-img"
    //               style={{ backgroundImage: `url(${dish.image_url})` }}
    //             ></div>
    //             <div className="recipe-description">
    //               <p className="recipe-name">{dish.name}</p>
    //               <p className="description">{dish.description}</p>
    //             </div>
    //           </article>
    //         );
    //       })
    //     ) : (
    //       <p>Error</p>
    //     )}
    //     <article className="ingredients">
    //       <p className="ingredients-title">Ingredients</p>
    //       <ol>
    //         {ingredients.length ? (
    //           ingredients.map((ingredient) => {
    //             return <li>{ingredient.name}</li>;
    //           })
    //         ) : (
    //           <p>Error 500. Internal Server Issue</p>
    //         )}
    //       </ol>
    //     </article>
    //     <article className="preparation">
    //       <p className="preparation-title">Preparation method</p>
    //       <ol>
    //         {preparation.length ? (
    //           preparation.map((step) => {
    //             return <li>{step.description}</li>;
    //           })
    //         ) : (
    //           <p>Error 500. Internal Server Issue</p>
    //         )}
    //       </ol>
    //     </article>
    //   </section>
    // </div>
  );
}
