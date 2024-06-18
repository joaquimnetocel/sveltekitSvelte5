<script>
	let numberA = $state(5);
	let numberB = $state(3);
</script>

<h1>SUM OPERATION</h1>

<div>
	<button onclick={() => (numberA = numberA - 1)}>-</button>
	<span>A</span>
	<button onclick={() => (numberA = numberA + 1)}>+</button>
</div>
<div>
	<button onclick={() => (numberA = numberB - 1)}>-</button>
	<span>B</span>
	<button onclick={() => (numberA = numberB + 1)}>+</button>
</div>

<div>A+B={numberA}+{numberB}={numberA + numberB}</div>
