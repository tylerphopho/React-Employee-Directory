import React from 'react';
import Navbar from "./components/layouts/Navbar";
import Add from "./components/layouts/Add";
import Table from "./components/layouts/Table";
import EmployeeList from "./components/layouts/EmployeeList";

function App() {
  return (
    <div>
      <Navbar />
      <Add />
      <Table />
      <EmployeeList />
    </div>
    
  );
}

export default App;
