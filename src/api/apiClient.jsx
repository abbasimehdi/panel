import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/auth',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Content_Type':'application/json',
    'Accept_Charset': 'utf-8'
    // Do NOT include header values with non‑Latin‑1 characters (e.g., Persian/Arabic text)
  },
  withCredentials: false, // enable if you need cookies
});

export default apiClient;
