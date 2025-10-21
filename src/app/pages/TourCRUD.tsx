"use client";
import React, { useEffect, useState } from "react";
import { getTours, deleteTour } from "../../services/TourService";
import TourList from "../../component/TourList";
import { Tour } from "../../types/Types";

const TourCRUD: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    loadTours();
  }, []);

  const loadTours = () => {
    getTours().then(setTours);
  };

  const handleDelete = async (id: number) => {
    await deleteTour(id);
    loadTours();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Quản lý Tour Du Lịch</h1>
      <TourList tours={tours} onDelete={handleDelete} />
    </div>
  );
};

export default TourCRUD;
