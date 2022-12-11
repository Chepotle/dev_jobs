import { createStore } from "vuex";
import { jobsModule } from "./jobsModule";
import { themeModule } from "./themeModule";

export default createStore({
	modules: {
		jobs: jobsModule,
		theme: themeModule,
	}
})