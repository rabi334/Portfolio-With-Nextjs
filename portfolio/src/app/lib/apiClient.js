import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.dev.yenegetse.com/yenegetse/api",
  headers: {
    accept: "*/*",
    "x-api-key": "CO1tfl8xcSbtmQD3054dc1a-301c-45ff-90eb-900b5e67ecc3",
    "x-user-key": "a27f9ada-8cd6-4d64-9c8f-36a86153d9a3",
  },
});
