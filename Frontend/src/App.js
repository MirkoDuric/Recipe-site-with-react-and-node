import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import RecipeLayout from "./Components/RecipeLayout/RecipeLayout";
import RecipeList from "./Components/RecipeLists/RecipeList";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          exact
          path="/AllRecipes"
          element={<RecipeList endpoint={"AllRecipes"} />}
        />
        <Route
          exact
          path="/PeruvianDishes"
          element={<RecipeList endpoint={"PeruvianDishes"} />}
        />
        <Route
          exact
          path="/ZAFDishes"
          element={<RecipeList endpoint={"ZAFDishes"} />}
        />
        <Route
          exact
          path="/SerbianDishes"
          element={<RecipeList endpoint={"SerbianDishes"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
