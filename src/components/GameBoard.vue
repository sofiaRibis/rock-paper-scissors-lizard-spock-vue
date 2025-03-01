<template lang="">
	<div class="game-board">
		<p v-if="nameTop" class="heading computerPlayer">{{ nameTop }}</p>

		<div class="game-board__moves">
			<!-- @pointerup instead of @click to avoid pressing Enter to change a move -->
			<button @pointerup="rockChoice" class="heading rock">👊</button>
			<button @pointerup="paperChoice" class="heading paper">🖐</button>
			<button @pointerup="scissorsChoice" class="heading scissors">✌️</button>
			<button @pointerup="lizardChoice" class="heading lizard">🐍</button>
			<button @pointerup="spockChoice" class="heading spock">🖖</button>
		</div>

		<p v-if="nameBottom" class="heading accent personPlayer">
			{{ nameBottom }}
		</p>
	</div>
</template>

<script>
export default {
	props: ["name-top", "name-bottom"],

	emits: ["get-choice"],

	setup(props, context) {
		const rockChoice = () => {
			context.emit("get-choice", "rock");
		};

		const paperChoice = () => {
			context.emit("get-choice", "paper");
		};

		const scissorsChoice = () => {
			context.emit("get-choice", "scissors");
		};

		const lizardChoice = () => {
			context.emit("get-choice", "lizard");
		};

		const spockChoice = () => {
			context.emit("get-choice", "spock");
		};

		return {
			rockChoice,
			paperChoice,
			scissorsChoice,
			lizardChoice,
			spockChoice,
		};
	},
};
</script>

<style lang="scss">
.game-board {
	text-align: center;
	position: relative;

	.computerPlayer {
		padding-bottom: 1.5rem;
	}

	.personPlayer {
		padding-top: 1.5rem;
	}

	&__moves {
		max-width: 600px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}
}
</style>
