<template>
	<div class="game-modal">
		<div class="game-modal-message">
			<div v-if="gameEndValue === 'win'">
				<p>
					This is a clear statistical anomaly. Rematch! Is impossible you beat
					me
				</p>
			</div>

			<div v-if="gameEndValue === 'loss'">
				<div v-html="handleLoseMessage"></div>
			</div>

			<p v-if="gameEndValue === 'drow'">
				A draw? Huh. Given our respective skill levels, that’s either a miracle
				for you… or a fluke for me.
			</p>
			<button @click="restartGame">PLAY AGAIN</button>
		</div>

		<div class="game-modal-overlay"></div>
	</div>
</template>

<script>
import { computed } from "vue";
export default {
	props: ["game-end-value"],
	emits: ["restart-game"],

	setup(props, context) {
		const loseMessages = [
			"<p class='game-modal-message--value'>*Knock* Penny <br> *Knock* Penny <br> *Knock* Penny</p><div>I WON!</div><div>(and you didn't)</div>",
			"<p>BAZINGA!<div>You lose</div></p>",
		];
		const handleLoseMessage = computed(() => {
			return loseMessages[Math.floor(Math.random() * loseMessages.length)];
		});

		const restartGame = () => {
			context.emit("restart-game");
		};

		return {
			handleLoseMessage,
			restartGame,
		};
	},
};
</script>

<style lang="scss">
@use "../web/scss/abstracts/variables" as *;
@use "../web/scss/abstracts/mixins" as *;
.game-modal {
	position: fixed;
	inset: 0;
	@include flex-box(column, 0, center, center);
	padding: 24px 16px;
	font-family: $heading-font;

	&-message {
		width: 100%;

		margin: auto;
		z-index: 2;
		padding: 24px 16px;
		background-color: $accent-color;
		color: #fff;
		border-radius: 6px;
		@include flex-box(column, 0, center, center);
		font-size: 28px;

		@media (min-width: 500px) {
			width: 70vw;
		}

		&--value + div:first-of-type {
			color: $yellow;
			font-size: 32px;
			text-align: center;
		}

		button {
			background-color: $yellow;
			padding: 6px 12px;
			border-radius: 6px;
			margin-top: 16px;
		}
	}

	&-overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		background-color: #78787823;
		backdrop-filter: blur(1px);
	}
}
</style>
