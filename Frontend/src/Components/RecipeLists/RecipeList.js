import "./Recipes.css";
import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";
export default function RecipeList({ endpoint }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.err(err));
  }, [endpoint]);

  if (!dishes) {
    return <p>Loading...</p>;
  }
  return (
    <div className="recipe-list-container">
      <div className="recipe-list-layer"></div>
      <div className="scroll">
        {dishes.map((dish) => {
          return (
            <RecipeCard
              key={dish.id}
              src={dish.image_url}
              description={dish.description}
              path={`/${dish.id}`}
              name={dish.name}
            />
          );
        })}
      </div>
    </div>
  );
}
