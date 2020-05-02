import React from 'react';
import Navbar from "./components/layouts/Navbar";
import Add from "./components/layouts/Add";
import EmployeeList from "./components/layouts/EmployeeList";

function App() {
  return (
    <div>
      <Navbar />
      <Add />
      <EmployeeList />
    </div>
    
  );
}

export default App;
