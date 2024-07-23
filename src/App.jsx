import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import MDmessage from "./Pages/MDmessage";
import ContactUs from "./Pages/ContactUs";
import BOD from "./Pages/BOD";
import BusinessUnits from "./Pages/BusinessUnits";
import News from "./Pages/News";
import Media from "./Pages/Media";
import Careers from "./Pages/Careers";
import BusinessUnit from "./Pages/BusinessUnit";
import CommitteeOfAdministration from "./Pages/CommitteeOfAdministration";

import "./App.css";
import { Suspense } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/mdmessage" element={<MDmessage />} />
            <Route path="/boardofdirector" element={<BOD />} />
            <Route
              path="/committeeofadministration"
              element={<CommitteeOfAdministration />}
            />
            <Route path="/business-units" element={<BusinessUnits />} />
            <Route path="/business-units/:id" element={<BusinessUnit />} />
            <Route path="/news" element={<News />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
