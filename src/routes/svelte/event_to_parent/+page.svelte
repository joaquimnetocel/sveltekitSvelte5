<script lang="ts">
	import AnswerButton from './AnswerButton.svelte';

	let isHappy = $state(true);

	function onAnswerNo() {
		isHappy = false;
	}

	function onAnswerYes() {
		isHappy = true;
	}
</script>

<a href="/">BACK</a>

<h1>EFFECT</h1>

<p>Are you happy?</p>
<AnswerButton
	onYes={onAnswerYes}
	onNo={onAnswerNo}
/>
<p style="font-size: 50px;">{isHappy ? '😀' : '😥'}</p>
