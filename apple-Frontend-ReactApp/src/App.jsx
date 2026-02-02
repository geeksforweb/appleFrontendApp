import Four04 from "./Componets/404/Four04";
import Footer from "./Componets/Footer/Footer";
import Header from "./Componets/Header/Header";
import Mainpage from "./Componets/MainPage/Mainpage";
import SharedLayout from "./Componets/MainPage/SharedLayout";
import CartPage from "./Componets/NavBar/CartPage";
import IpadPage from "./Componets/NavBar/IpadPage";
import IphonePage from "./Componets/NavBar/IphonePage";
import MacPage from "./Componets/NavBar/MacPage";
import MusicPage from "./Componets/NavBar/MusicPage";
import SearchPage from "./Componets/NavBar/SearchPage";
import SupportPage from "./Componets/NavBar/SupportPage";
import TvPage from "./Componets/NavBar/TvPage";
import WatchPage from "./Componets/NavBar/WatchPage";
import YoutubeVideos from "./Componets/YoutubeVideos/YoutubeVideos";

import { Route, Routes } from "react-router-dom";
import SingleProductPage from "./Componets/NavBar/SingleProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Mainpage />} />
          <Route path="mac" element={<MacPage />} />
          <Route path="iphone" element={<IphonePage />} />

          {/* FIXED DYNAMIC ROUTE */}
          {/* <Route path="iphone/:productID" element={<SingleProductPage />} /> */}

          {/* <Route path="iphone/:productID" element={<SingleProductPage />} /> */}
          <Route path="/iphone/:id" element={<SingleProductPage />} />

          <Route path="ipad" element={<IpadPage />} />
          <Route path="watch" element={<WatchPage />} />
          <Route path="tv" element={<TvPage />} />
          <Route path="music" element={<MusicPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
