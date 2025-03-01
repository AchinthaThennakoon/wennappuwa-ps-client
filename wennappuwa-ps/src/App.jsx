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

function App() {
  return (
    <>
      <PrimaryNavBar />
      <SecondaryNavBar />

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
