import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Post from './components/Post';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
};