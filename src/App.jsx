import "./App.css";
import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Import Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoadingSpinner from "./Components/LoadingSpinner";
//Pages
import BOD from "./Pages/BOD";
import News from "./Pages/News";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Careers from "./Pages/Careers";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import ContactUs from "./Pages/ContactUs";
import MDmessage from "./Pages/MDmessage";
import SingleMedia from "./Pages/SingleMedia";
import BusinessUnit from "./Pages/BusinessUnit";
import CommitteeOfAdministration from "./Pages/CommitteeOfAdministration";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Ensures the page scrolls to top on route change */}
        <ScrollToTop />
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
            <Route path="/business-units/:id" element={<BusinessUnit />} />
            <Route path="/news" element={<News />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/:slug" element={<SingleMedia />} />
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
