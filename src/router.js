import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "./pages/WelcomePage.vue";
import GamePage from "./pages/GamePage.vue";

const router = createRouter({
	routes: [
		{ path: "/", redirect: "/welcome", name: WelcomePage },
		{ path: "/welcome", component: WelcomePage },
		{ path: "/game", component: GamePage },
	],
	history: createWebHistory(),
});

export default router;
