import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourList from "./component/TourList";
import TourDetail from "./component/TourDetail";
import { Tour } from "./types/Types";

const App: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([
    { id: 1, title: "Tour Đà Lạt", price: "2500000", description: "Thành phố ngàn hoa" },
    { id: 2, title: "Tour Nha Trang", price: "3000000", description: "Biển xanh cát trắng" },
    { id: 3, title: "Tour Hạ Long", price: "3500000", description: "Kỳ quan thiên nhiên thế giới" },
  ]);

  const handleDelete = (id: number) => {
    setTours((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Router>
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<TourList tours={tours} onDelete={handleDelete} />} />
          <Route path="/tours/:id" element={<TourDetail tours={tours} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
