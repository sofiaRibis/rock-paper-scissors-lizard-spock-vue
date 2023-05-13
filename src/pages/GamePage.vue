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

		const resultsList = {
			"👊": {
				"👊": "draw",
				"🖐️": "loss",
				"✌️": "win",
				"🐍": "win",
				"🖖": "loss",
			},
			"🖐️": {
				"👊": "win",
				"🖐️": "draw",
				"✌️": "loss",
				"🐍": "loss",
				"🖖": "win",
			},
			"✌️": {
				"👊": "loss",
				"🖐️": "win",
				"✌️": "draw",
				"🐍": "win",
				"🖖": "loss",
			},
			"🐍": {
				"👊": "loss",
				"🖐️": "win",
				"✌️": "loss",
				"🐍": "draw",
				"🖖": "win",
			},
			"🖖": {
				"👊": "win",
				"🖐️": "loss",
				"✌️": "win",
				"🐍": "loss",
				"🖖": "draw",
			},
		};

		const pcChoice = () => {
			const choices = ["rock", "paper", "scissors", "lizard", "spock"];

			const choice = choices[Math.floor(Math.random() * choices.length)];

			pcMove.value = choice;

			choiceValues(choice, pcMove);
		};

		const playerChoice = (move) => {
			choiceValues(move, playerMove);
		};

		const results = () => {
			const player = playerMove.value;
			const pc = pcMove.value;
			const result = resultsList[player][pc];

			if (result === "win") {
				console.log("You won!");
			} else if (result === "loss") {
				console.log("You lost!");
			} else {
				console.log("It's a draw.");
			}
		};

		const game = (move) => {
			playerChoice(move);

			pcChoice();

			results();
			setTimeout(() => {}, 2000);
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
			resultsList,
			results,
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
