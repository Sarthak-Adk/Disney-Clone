import { Route, Routes } from "react-router-dom";
import Home from './Component/Home/Home';
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Search from "./Component/Pages/Search";
import WatchList from "./Component/Pages/WatchList";
import Originals from "./Component/Pages/Originals";
import Movies from "./Component/Pages/Movies";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
