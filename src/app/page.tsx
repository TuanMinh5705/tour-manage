

"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourCRUD from "./pages/TourCRUD";
import TourForm from "../component/TourForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TourCRUD />} />
        <Route path="/add" element={<TourForm />} />
        <Route path="/edit/:id" element={<TourForm />} />
      </Routes>
    </BrowserRouter>
  );
}




