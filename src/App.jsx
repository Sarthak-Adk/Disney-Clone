import { Route, Routes } from "react-router-dom";
import Home from './Component/Home/Home';
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
