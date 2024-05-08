import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashBoard";
import LandingPage from "./components/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              darkMode={darkMode}
              toggleDisplayMode={toggleDisplayMode}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} toggleDisplayMode={toggleDisplayMode}/>} />
      </Routes>
    </>
  );
}

export default App;
