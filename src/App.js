import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:todoId" element={<Detail />} />
    </Routes>
  );
}

export default App;
