import "./Recipes.css";
import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";

export default function RecipeList({ endpoint }) {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const handleRefresh = () => {
      setTimestamp(Date.now());
    };

    window.addEventListener("load", handleRefresh);

    return () => {
      window.removeEventListener("load", handleRefresh);
    };
  }, []);

  useEffect(() => {
    fetch(`https://recipeinc-backend.onrender.com/${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        setDishes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setError(true);
      });
  }, [endpoint, timestamp]);

  return (
    <div className="recipe-list-container">
      <div className="recipe-list-layer"></div>
      <div className="scroll">
        {loading ? (
          <h2 className="loading">Loading...</h2>
        ) : error ? (
          <h3 className="error">Error!</h3>
        ) : (
          dishes.map((dish) => (
            <RecipeCard
              key={dish.id}
              src={dish.image_url}
              description={dish.description}
              path={`/${dish.id}`}
              name={dish.name}
            />
          ))
        )}
      </div>
    </div>
  );
}
