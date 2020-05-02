import React from 'react';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Add from "./components/layouts/Add";
import Table from "./components/layouts/Table";

function App() {
  return (
    <div>
      <Navbar />
      <Add />
      <Table />
    </div>
    
  );
}

export default App;
