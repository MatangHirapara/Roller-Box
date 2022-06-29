import RollSides from './RollSides';
import React from 'react';
import Demo from './Demo';
import { Routes, Route } from "react-router-dom";
import Addlist from './Addlist';


function App() {
  return (
    <div>
      {/* <RollSides /> */}
      <Routes>
        <Route path='/' element={<Demo />} />
        <Route path='/addList' element={<Addlist />} />
      </Routes>
    </div>
  );
}

export default App;
