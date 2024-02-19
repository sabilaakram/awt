import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import MDmessage from "./Pages/MDmessage";
import AskeriFuel from "./Pages/AskeriFuel";
import ContactUs from "./Pages/ContactUs";
import BOD from "./Pages/BOD";
import FaujiSecurity from "./Pages/FaujiSecurity";
import AskariGuards from "./Pages/AskariGuards";
import BusinessUnits from "./Pages/BusinessUnits";
import News from "./Pages/News";
import AskariRealEstate from "./Pages/AskariRealEstate";
import Media from "./Pages/Media";
import Careers from "./Pages/Careers";

import "./App.css";
import BusinessUnit from "./Pages/BusinessUnit";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mdmessage" element={<MDmessage />} />
        <Route path="/bordofdirector" element={<BOD />} />
        <Route path="/business-units" element={<BusinessUnits />}>
          <Route path="business-unit/:id" element={<BusinessUnit />} />
        </Route>
        <Route path="/askari-fuel" element={<AskeriFuel />} />
        <Route path="/fauji-security" element={<FaujiSecurity />} />
        <Route path="/askari-guards" element={<AskariGuards />} />
        <Route path="/askari-realstate" element={<AskariRealEstate />} />
        <Route path="/news" element={<News />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/media" element={<Media />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
