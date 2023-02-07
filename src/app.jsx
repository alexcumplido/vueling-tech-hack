import React from "react";
import { createRoot } from "react-dom/client";
import { GridSection } from "./components/GridSection/GridSection.jsx";

const App = () => {
  return (
    <main className="root">
      <GridSection />
    </main>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
