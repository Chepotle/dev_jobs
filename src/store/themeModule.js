export const themeModule = {
	state: () => ({
		theme: false,
	}),
	getters: {

	},
	mutations: {
		setTheme(state) {
			state.theme = !state.theme
		}
	},
	actions: {

	},
	namespaced: true
}