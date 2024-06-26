import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: "q_ilJfeXbJ7aLVkUf1TArJA5EUScrQgLm08H3UJvYpI",
  },
});

export const fetchImages = async (query, page, per_page = 12) => {
  const { data } = await api.get("/search/photos", {
    params: { query, page, per_page, orientation: "landscape" },
  });

  return data;
};
