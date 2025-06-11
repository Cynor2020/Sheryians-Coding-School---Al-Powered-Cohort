import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex justify-center items-center gap-x-10 text-sm mb-10">
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 bg-red-900 rounded ${isActive ? 'text-red-300' : ''}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 bg-red-900 rounded ${isActive ? 'text-red-300' : ''}`
        }
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 bg-red-900 rounded ${isActive ? 'text-red-300' : ''}`
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 bg-red-900 rounded ${isActive ? 'text-red-300' : ''}`
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 bg-red-900 rounded ${isActive ? 'text-red-300' : ''}`
        }
        to="/create"
      >
        Create
      </NavLink>
    </div>
  );
}

export default Navbar;