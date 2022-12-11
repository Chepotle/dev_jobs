import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView';
import JobInfo from '@/views/JobView';


const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/job-info/:id',
		name: 'jobInfo',
		component: JobInfo,
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { top: 0 }
	},
})

export default router