import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import RecipeLayout from "./Components/RecipeLayout/RecipeLayout";
import RecipeList from "./Components/RecipeLists/RecipeList";
function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route index path="" element={<Home />} />
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
        <Route exact path="/1" element={<RecipeLayout endpoint={"1"} />} />
        <Route exact path="/2" element={<RecipeLayout endpoint={"2"} />} />
        <Route exact path="/3" element={<RecipeLayout endpoint={"3"} />} />
        <Route exact path="/4" element={<RecipeLayout endpoint={"4"} />} />
        <Route exact path="/5" element={<RecipeLayout endpoint={"5"} />} />
        <Route exact path="/6" element={<RecipeLayout endpoint={"6"} />} />
        <Route exact path="/7" element={<RecipeLayout endpoint={"7"} />} />
        <Route exact path="/8" element={<RecipeLayout endpoint={"8"} />} />
        <Route exact path="/9" element={<RecipeLayout endpoint={"9"} />} />
      </Routes>
    </div>
  );
}

export default App;
