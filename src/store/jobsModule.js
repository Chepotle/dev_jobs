import axios from "axios";

export const jobsModule = {
	state: () => ({
		jobsData: null,
		jobItem: null,
		clientWidth: null,
	}),
	getters: {

	},
	mutations: {
		setJobsData(state, jobsData) {
			state.jobsData = jobsData;
		},
		setJobItem(state, jobItem) {
			state.jobItem = jobItem;
		},
		getClientWidth(state) {
			state.clientWidth = document.documentElement.clientWidth;
		},
	},
	actions: {
		async getJobs({ commit }) {
			try {
				let response = await axios.get("/data.json");
				commit("setJobsData", response.data);

			} catch (e) {
				console.log(e);
				alert('Ошибка');
			}
		},
	},
	namespaced: true
}