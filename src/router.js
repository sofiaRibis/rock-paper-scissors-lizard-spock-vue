import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "./pages/WelcomePage.vue";
import GamePage from "./pages/GamePage.vue";

const routes = [
	{ path: "/", redirect: WelcomePage },
	{ path: "/welcome", component: WelcomePage },
	{ path: "/game", component: GamePage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
