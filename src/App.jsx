import "./App.css";
import Header from "./component/Atom/Header";
import Home from "./component/Home";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Home />
    </div>
  );
}

export default App;
