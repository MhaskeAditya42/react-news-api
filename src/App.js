import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import NewsPage from "./components/NewsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
       
          <Route path="/new" element={<NewsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
