import "./App.css";
import PrimaryNavBar from "./components/PrimaryNavBar/PrimaryNavBar";

import Home from "./pages/Home/Home";

import "./utils/i18n";

function App() {
  return (
    <>
      <PrimaryNavBar />
      <Home />
    </>
  );
}

export default App;
