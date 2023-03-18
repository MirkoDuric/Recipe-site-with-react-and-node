export default function RecipeCard(props) {
  return (
    <div className="recipe-card">
      {props.name}
      {props.description}
    </div>
  );
}
