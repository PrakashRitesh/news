import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Atom/Header";
import Home from "./component/pages/Home";
import India from "./component/pages/India";
import Sports from "./component/pages/Sports";
import Business from "./component/pages/Business";
import AllPage from "./component/pages/AllPage";

function App() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/india" element={<India />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/business" element={<Business />} />
          <Route path="/:page" element={<AllPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
