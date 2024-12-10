// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastProvider } from '../src/Context/ToastContext';
import StudentList from "./pages/StudentTable";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <ToastProvider> 
    <Router>
      <Routes>
        <Route
          index
          element={
              <StudentList />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </ToastProvider>
  );
}

export default App;
