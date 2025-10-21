const API_URL = "http://localhost:4000/tuors";

export const getTours = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getTour = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const createTour = async (tour: any) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tour),
  });
  return res.json();
};

export const updateTour = async (id: number, tour: any) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tour),
  });
  return res.json();
};

export const deleteTour = async (id: number) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
