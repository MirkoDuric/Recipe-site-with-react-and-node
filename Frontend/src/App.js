import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/Recipes Inc" element={<Home />} />
        {/* <Route exact path="/Recipes Inc" element={<Home />} />
        <Route exact path="/Recipes Inc" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
