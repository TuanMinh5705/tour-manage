
import React from "react";
import { Link } from "react-router-dom";
import { Tour } from "../types/Types";

interface Props {
  tours: Tour[];
  onDelete: (id: number) => void;
}

const TourList: React.FC<Props> = ({ tours, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Danh sách Tour</h2>
      <Link
        to="/add"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Thêm
      </Link>

      {tours.length === 0 ? (
        <p className="text-gray-500 mt-4">Chưa có tour nào.</p>
      ) : (
        <table className="w-full table-auto border mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">#</th>
              <th className="p-2 text-left">Tên</th>
              <th className="p-2 text-left">Giá</th>
              <th className="p-2 text-left">Mô tả</th>
              <th className="p-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="border-t hover:bg-gray-50">
                <td className="p-2">{tour.id}</td>
                <td className="p-2">
                  {/* 🟢 Tên tour giờ là Link */}
                  <Link
                    to={`/detail/${tour.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {tour.title}
                  </Link>
                </td>
                <td className="p-2">{tour.price}</td>
                <td className="p-2">{tour.description}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <Link
                      to={`/edit/${tour.id}`}
                      className="px-3 py-1 border text-blue-600 border-blue-600 rounded hover:bg-blue-100"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => onDelete(tour.id)}
                      className="px-3 py-1 border text-red-600 border-red-600 rounded hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TourList;
