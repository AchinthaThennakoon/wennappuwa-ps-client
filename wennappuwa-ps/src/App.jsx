import "./App.css";
import PrimaryNavBar from "./components/PrimaryNavBar/PrimaryNavBar";

import SecondaryNavBar from "./components/SecondaryNavBar/SecondaryNavBar";

import Home from "./pages/Home/Home";

import "./utils/i18n";

function App() {
  return (
    <>
      <PrimaryNavBar />
      <SecondaryNavBar />
      <Home />
    </>
  );
}

export default App;
