import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import IndexPage from './pages/index';
import Layout from './pages/layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
