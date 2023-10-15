import React from "react";
import Categories from "./Categories";
import PlaylistPage from "../pages/Playlist";
import {
  Routes,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const Main = () => {
  return (
    <div className="main">
      <div className="nav"></div>
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Categories />}></Route>
          <Route path="/search">Search</Route>
          <Route path="/libary">Library</Route>
          <Route path="/playlist/:id" element={<PlaylistPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
