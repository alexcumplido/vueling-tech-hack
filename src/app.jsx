import React from "react";
import { createRoot } from "react-dom/client";
import { GridSection } from "./components/GridSection/GridSection.jsx";

const App = () => {
  return <GridSection />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
