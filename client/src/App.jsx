import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Article from "./Components/Article";
import ArticlePreview from "./Components/ArticlePreview";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/preview" element={<ArticlePreview />} />
            <Route path="/articles/page/:id" element={<Article />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
