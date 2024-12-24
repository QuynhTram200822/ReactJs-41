// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalToast } from "./Utils/utils"; 
import StudentList from "./pages/StudentTable";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <GlobalToast >
    
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
    </GlobalToast >
  );
}

export default App;
