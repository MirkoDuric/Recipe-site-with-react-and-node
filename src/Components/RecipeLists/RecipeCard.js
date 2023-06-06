import { Link } from "react-router-dom";
export default function RecipeCard(props) {
  console.log(props.path);
  return (
    <section className="recipe-card">
      <h4>{props.name}</h4>
      <article
        className="card-img"
        style={{ backgroundImage: `url(${props.src})` }}
      ></article>
      <article className="description-section">
        <h5>Description</h5>
        <p>{props.description}</p>
      </article>
      <Link to={props.path}>RECIPE</Link>
    </section>
  );
}
