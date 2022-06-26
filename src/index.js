import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

// the first very simple and recommended way:
const LionImage = () => {
  const [image] = useImage("https://konvajs.org/assets/lion.png");
  return <Image image={image} />;
};
const UrlImage = () => {
  const [image] = useImage("https://konvajs.org/assets/yoda.jpg");
  return <Image x={150} image={image} />;
};

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <LionImage />
        <UrlImage />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
