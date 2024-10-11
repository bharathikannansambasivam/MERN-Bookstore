import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateBook />}></Route>
        <Route path="/edit/:id" element={<EditBook />}></Route>
        <Route path="/delete/:id" element={<DeleteBook />}></Route>
        <Route path="/details/:id" element={<ShowBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
