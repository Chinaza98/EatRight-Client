import recipes from "../../data/recipes.json";
import { Link } from "react-router-dom";

function HomePage() {
  console.log(recipes);
  return (
    <>
      <p className="header">EatRight</p>
      <img
        src="../../src/assets/images/hero-image.jpeg"
        className="header__hero"
      />
      <div>
        <strong>Dietary Restriction:</strong>
        {recipes.restriction}
      </div>
      <div className="recipes">
        {recipes.map((recipe) => {
          return (
            <Link
              to={`/recipedetails/${recipe.id}`}
              key={recipe.id}
              className="recipe__card"
            >
              <img
                src={recipe.photo}
                alt={recipe.name}
                className="recipe__photo"
              />
              <h2>{recipe.name}</h2>
            </Link>
          );
          <div key={recipe.id} className="recipe__card">
            <img
              src={recipe.photo}
              alt={recipe.name}
              className="recipe__photo"
            />
            <h2>{recipe.name}</h2>
            {/* return (
            <Link to={`/recipedetails/${recipe.id}`} key={recipe.id}></Link>
            ); */}
            {/* <ol>
              {recipe.step.map((step) => (
                <li key={step.stepNumber}>{step.description}</li>
              ))}
            </ol> */}
          </div>;
        })}
      </div>
    </>
  );
}

export default HomePage;
