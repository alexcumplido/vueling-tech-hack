import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GridSection } from "./components/GridSection/GridSection.jsx";

function App() {
  return (
    <StrictMode>
      <GridSection />
    </StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
