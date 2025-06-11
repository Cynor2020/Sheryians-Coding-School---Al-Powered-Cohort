import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import Favorites from '../pages/Favorites';
import About from '../pages/About';
import Create from '../pages/Create';
import SingleRecipe from '../pages/SingleRecipe';

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<SingleRecipe />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default Mainroutes;