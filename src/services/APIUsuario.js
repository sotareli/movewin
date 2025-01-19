import { axiosInstance, axiosInstanceExercises } from "./axiosInstance";

const host = {
	exercises: "/api/exercises",
	users: "/usuarios",
};

export const api = {
	exercises: {
		list: () => {
			return axiosInstanceExercises.get(`${host.exercises}`);
		},
	},
	users: {
		login: (body) => {
			return axiosInstance.post(`${host.users}/login`, body);
		},
		list: () => {
			return axiosInstance.get(`${host.users}`);
		},
	},
};
