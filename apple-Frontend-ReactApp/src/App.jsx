import { Routes, Route } from "react-router-dom";

import SharedLayout from "./Componets/MainPage/SharedLayout";
import Mainpage from "./Componets/MainPage/Mainpage";
import Four04 from "./Componets/404/Four04";

import IphonePage from "./Componets/NavBar/IphonePage";
import MacPage from "./Componets/NavBar/MacPage";
import IpadPage from "./Componets/NavBar/IpadPage";
import WatchPage from "./Componets/NavBar/WatchPage";
import TvPage from "./Componets/NavBar/TvPage";
import MusicPage from "./Componets/NavBar/MusicPage";

import SingleProductPage from "./Componets/NavBar/SingleProductPage";
import CartPage from "./Componets/NavBar/CartPage";
import SearchPage from "./Componets/NavBar/SearchPage";
import SupportPage from "./Componets/NavBar/SupportPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Mainpage />} />

        {/* Category pages */}
        <Route path="iphone" element={<IphonePage />} />
        <Route path="mac" element={<MacPage />} />
        <Route path="ipad" element={<IpadPage />} />
        <Route path="watch" element={<WatchPage />} />
        <Route path="tv" element={<TvPage />} />
        <Route path="music" element={<MusicPage />} />

        {/* Single product (ALL categories) */}
        <Route path="product/:id" element={<SingleProductPage />} />

        {/* Others */}
        <Route path="cart" element={<CartPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="support" element={<SupportPage />} />

        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
