import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2FlNWE2MzBiNjIxNzE3MDcxNjRjZTkzNWI0ZGQ5YSIsInN1YiI6IjYzMjE5YWI1ZmQ0YTk2MDA3YTI3YTdmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6-e0WCScfwciKbMPIQtK2kmRA-Vgrz6UxgYVYJRqlH8";

export const httpService = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});
