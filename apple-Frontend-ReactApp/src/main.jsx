import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'// used for routing in the app

import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* wrapping the App component with BrowserRouter to enable routing  and */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);



