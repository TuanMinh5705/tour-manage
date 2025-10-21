import React from "react";
import { useParams, Link } from "react-router-dom";
import { Tour } from "../types/Types";

interface Props {
  tours: Tour[];
}

const TourDetail: React.FC<Props> = ({ tours }) => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === Number(id));

  if (!tour) {
    return (
      <div className="p-6">
        <p className="text-red-500">Không tìm thấy tour.</p>
        <Link to="/" className="text-blue-600 underline">
          ← Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{tour.title}</h2>
      <p className="text-gray-700 mb-2">Giá: {tour.price} VNĐ</p>
      <p className="text-gray-600 mb-4">{tour.description}</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Quay lại danh sách
      </Link>
    </div>
  );
};

export default TourDetail;
