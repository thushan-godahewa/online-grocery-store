import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:1337",
  timeout: 40000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

async function getCategories(): Promise<Category[]> {
  const response = await axiosClient.get("/api/categories?populate=*");
  return response.data.data;
}

export { getCategories };
