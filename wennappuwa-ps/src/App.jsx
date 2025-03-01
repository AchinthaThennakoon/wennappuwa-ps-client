import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import PrimaryNavBar from "./components/PrimaryNavBar/PrimaryNavBar";

import Home from "./pages/Home/Home";

import "./utils/i18n";

function App() {
  return (
    <>
      <PrimaryNavBar />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
