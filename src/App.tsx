import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import LandingPage from "./components/LandingPage";
import Camera from "./components/practice/Camera";
import "./App.css";

const App = () => {
  const [imageDimensions, setImageDimensions] = useState<
    "fullscreen" | "1:1" | "4:3" | "3:4" | ""
  >("");

  useEffect(() => {
    if (isMobile) {
      document.documentElement.requestFullscreen();
    }
  }, []);
  return (
    <div>
      {imageDimensions ? (
        <Camera imageDimensions={imageDimensions} />
      ) : (
        <LandingPage setImageDimensions={setImageDimensions} />
      )}
    </div>
  );
};

export default App;
