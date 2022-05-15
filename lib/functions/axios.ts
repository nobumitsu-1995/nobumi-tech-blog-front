import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});