// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080/", // Base URL from environment variable
  timeout: 10000, // Timeout after 10 seconds
});

export default api;