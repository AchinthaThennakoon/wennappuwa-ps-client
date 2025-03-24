import { Route, Routes } from "react-router";
import "./App.css";
import PrimaryNavBar from "./components/PrimaryNavBar/PrimaryNavBar";
import SecondaryNavBar from "./components/SecondaryNavBar/SecondaryNavBar";
import Home from "./pages/Home/Home";
import OnlinePayment from "./pages/Online Payment/OnlinePayment";
import HaveAComplaint from "./pages/Have A Complaint/HaveAComplaint";
import Inquiry from "./pages/Inquiry/Inquiry";
import Emergency from "./pages/Emergency/Emergency";
import Feedback from "./pages/Feedback/Feedback";
import "./utils/i18n";
import Downloads from "./pages/Downloads/Downloads";
import VideoGallery from "./pages/Video Gallery/VideoGallery";
import Footer from "./components/Footer/Footer";
import EnvironmentAndWater from "./pages/Service/EnvironmentAndWater/EnvironmentAndWater";
import EducationAndRecreation from "./pages/Service/EducationAndRecreation/EducationAndRecreation";
import AnimalsAndPets from "./pages/Service/AnimalsAndPets/AnimalsAndPets";
import GullyBowserService from "./pages/Service/EnvironmentAndWater/GullyBowserService/GullyBowserService";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md ">
        <PrimaryNavBar />
        <SecondaryNavBar />
      </div>

      <div className="mt-[170px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/online-payment" element={<OnlinePayment />} />
          <Route path="/have-a-complaint" element={<HaveAComplaint />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/video-gallery" element={<VideoGallery />} />

          <Route path="/environment-water" element={<EnvironmentAndWater />} />
          <Route
            path="/education-recreation"
            element={<EducationAndRecreation />}
          />
          <Route path="/animals-pets" element={<AnimalsAndPets />} />

          <Route path="/gully-bowser" element={<GullyBowserService />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
