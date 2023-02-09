import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Posts from "./posts/Post";
import Create from "./posts/Add";
import Edit from "./posts/Edit";

const Menu = () => {
  return (
    <div>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link fw-bolder text-muted" to="/posts">
                  Posts
                </Link>
              </li>
              <li class="nav-item text-muted">
                <Link class="nav-link fw-bolder" to="/create">
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/posts" element={<Posts />}  > </Route>
          <Route  path="/create"  element={<Create />}></Route>
          <Route  path="/edit/:id"  element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Menu;
