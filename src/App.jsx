import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DietaryPage from "./pages/DietaryPage/DietaryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipedetails/:recipeId" element={<DietaryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
