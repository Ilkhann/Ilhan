import "./assets/css/style.css"
import Header from "./components/HeaderDota";
import HomePages from "./Pages/Dota2Pages"
import TourneyPages from "./Pages/TourneyPages";
import MenuHeader from "./components/MenuHeader";
import AuthPages from "./Pages/authPages";
import RegPages from "./Pages/regPages";
import MenuPages from "./Pages/MenuPages"
import Dota2Pages from "./Pages/Dota2Pages";
import CS2Pages from "./Pages/CS2Pages";
import TourneyCs2 from "./Pages/TourneyCs2";
import NewsPages from "./Pages/NewsPages";
import NewsDotaPages from "./Pages/NewsDotaPages";
import MenuPagesCS from "./Pages/MenuPagesCS";
import NewsInnerList from "./components/NewsInnerList";

import {Routes, Route} from "react-router-dom";




function App() {
  return (
    <>
     <Routes>
      <Route path="/cs2" element={<CS2Pages/>}/>
      <Route path="/Dota2" element={<Dota2Pages/>}/>
      <Route path="/menu" element={<MenuPages/>}/>
      <Route path="/auth" element={<AuthPages/>}/>
      <Route path="/reg" element={<RegPages/>}/>
      <Route path="/tourney" element={<TourneyPages/>}/>
      <Route path="/tourneyCs2" element={<TourneyCs2/>}/>
      <Route path="/news-CS/:id" element={<NewsPages/>}/>
      <Route path="/news-Dota/:id" element={<NewsDotaPages/>}/>
      <Route path="/menuCS2" element={<MenuPagesCS/>}/>
     </Routes>
    </> 
  );
}

export default App;