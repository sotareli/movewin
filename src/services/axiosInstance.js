import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:3002",
	headers: { "Content-Type": "application/json" },
});

export const axiosInstanceExercises = axios.create({
	baseURL: "http://localhost:3001",
	headers: { "Content-Type": "application/json" },
});
