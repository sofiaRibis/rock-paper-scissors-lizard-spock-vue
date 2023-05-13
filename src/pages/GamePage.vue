<template lang="">
	<main>
		<GameBoardVue :name-top="pcName" />

		<div class="heading choices">{{ pcMove }}</div>

		<p v-if="!playerMove">when you ready pick one</p>

		<div class="heading choices">{{ playerMove }}</div>

		<GameBoardVue :name-bottom="playerName" @get-choice="game" />
	</main>
</template>

<script>
import GameBoardVue from "@/components/GameBoard.vue";
import { ref } from "vue";
export default {
	components: {
		GameBoardVue,
	},

	setup() {
		const pcName = ref("Sheldon");
		const playerName = ref("you");
		const playerMove = ref("");
		const pcMove = ref("");

		const choiceValues = (string, valueOfMove) => {
			if (string === "rock") {
				return (valueOfMove.value = "👊");
			}

			if (string === "paper") {
				return (valueOfMove.value = "🖐️");
			}

			if (string === "scissors") {
				return (valueOfMove.value = "✌️");
			}

			if (string === "lizard") {
				return (valueOfMove.value = "🐍");
			}

			if (string === "spock") {
				return (valueOfMove.value = "🖖");
			}
		};

		const pcChoice = () => {
			const choices = ["rock", "paper", "scissors", "lizard", "spock"];

			const choice = choices[Math.floor(Math.random() * choices.length)];

			pcMove.value = choice;

			choiceValues(choice, pcMove);

			console.log(pcMove.value);
		};

		const playerChoice = (move) => {
			choiceValues(move, playerMove);

			console.log(playerMove.value);
		};

		const game = (move) => {
			playerChoice(move);

			setTimeout(() => {
				pcChoice();
			}, 2000);
		};

		return {
			pcName,
			playerName,
			playerMove,
			playerChoice,
			pcChoice,
			pcMove,
			game,
			choiceValues,
		};
	},
};
</script>

<style lang="scss" scoped>
main {
	padding-block: 4rem;
}
.choices {
	font-size: 4rem;
	text-align: center;
}
p {
	text-align: center;
}
</style>
