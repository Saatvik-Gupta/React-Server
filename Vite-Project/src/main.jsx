// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx';
import App_Counter from './App_Counter.jsx'
import Counter_state from './Counter_state.jsx';

// createRoot(document.getElementById('root')).render(
//     <App /> )

const domroot=document.getElementById("root");

const root=createRoot(domroot);

// root.render(<App_Counter/>)

root.render(<Counter_state/>)

