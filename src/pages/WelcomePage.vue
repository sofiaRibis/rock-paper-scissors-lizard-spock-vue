<template lang="">
	<main>
		<h1>
			the
			<br />
			<span class="accent"> ROCK PAPER SCISSORS</span>
			<br />
			LIZARD SPOCK
		</h1>

		<div class="start-game-button">
			<img
				src="../assets/big-bang-theory-couch.png"
				alt="sheldon's couch"
				usemap="#startgame"
			/>

			<router-link to="/game"
				><button><p>start</p></button></router-link
			>
			<p>Click Sheldon's spot to start</p>
		</div>
	</main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
	padding-block: 6rem;
}
.start-game-button {
	position: relative;
	width: fit-content;
	margin: 0 auto;

	button {
		position: absolute;
		right: 0;
		top: 0;
		aspect-ratio: 1;
		width: 30vw;

		p {
			visibility: hidden;
		}
	}

	> p {
		text-align: center;
	}
}
</style>
