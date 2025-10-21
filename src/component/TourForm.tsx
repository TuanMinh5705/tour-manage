
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTour, getTour, updateTour } from "../services/TourService";
import { Tour } from "../types/Types";

const TourForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState<Tour>({
    id: 0,
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (isEdit && id) {
      getTour(Number(id)).then(setFormData);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit && id) {
      await updateTour(Number(id), formData);
    } else {
      await createTour(formData);
    }
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">
        {isEdit ? "Cập nhật Tour" : "Thêm Tour mới"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Tên tour</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Nhập tên tour"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Giá</label>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Nhập giá tour"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mô tả</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Nhập mô tả tour"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            {isEdit ? "Sửa" : "Thêm mới"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourForm;
