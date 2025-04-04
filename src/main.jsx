import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import WebsiteRoutes from './websiteroutes';

import "./global.css"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebsiteRoutes />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
