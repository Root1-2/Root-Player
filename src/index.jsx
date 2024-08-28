import { createRoot } from "react-dom/client";
import * as React from "react";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(<App />);
