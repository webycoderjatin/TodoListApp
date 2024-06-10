import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
      <h1><span>ToDo</span> App</h1>
      <ul>
        <li className='active'>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="todos">Your Tasks</Link>
          </li>
      </ul>
    <Outlet/>
    </div>

  );
}

export default Navbar;
