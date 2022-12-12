import axios from "axios";

export const jobsModule = {
	state: () => ({
		jobsData: null,
		clientWidth: null,
	}),
	getters: {

	},
	mutations: {
		setJobsData(state, jobsData) {
			state.jobsData = jobsData;
		},
		getClientWidth(state) {
			state.clientWidth = document.documentElement.clientWidth;
		},
	},
	actions: {
		async getJobs({ commit }) {
			try {
				let response = await axios.get("https://api.jsonbin.io/v3/b/63970b762d0e0021081ac21e", { headers: { 'X-Master-Key': '$2b$10$7CwsFbKb.BLW1kd8jKK7teW5dEX4qa9NxaWIayCWwQWirol8YktBu' } });
				commit("setJobsData", response.data.record);

			} catch (e) {
				console.log(e);
				alert('Ошибка');
			}
		},
	},
	namespaced: true
}