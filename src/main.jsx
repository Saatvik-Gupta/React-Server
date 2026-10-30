import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Homepage from "./component.struct.jsx";

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
root.render(<Homepage></Homepage>);

/*
"scripts": {
    "dev": "vite", ---> { npm run dev } if use start then do not need to write run simply--> npm start
    "build":"vite build", ---> { npm run build } to make the app ready for production level
    "preview":"vite preview" ---> { npm run preview } to see our production site on browser
  }
 */
