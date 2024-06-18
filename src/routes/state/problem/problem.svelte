<script>
	let numberA = 5;
	let numberB = 3;

	function functionIncreaseA() {
		numberA = numberA + 1;
		let element = document.getElementById('idA');
		if (element !== null) {
			element.innerHTML = numberA.toString();
		}
		element = document.getElementById('idResult');
		if (element !== null) {
			element.innerHTML = (numberA + numberB).toString();
		}
	}
	function functionDecreaseA() {
		numberA = numberA - 1;
		let element = document.getElementById('idA');
		if (element !== null) {
			element.innerHTML = numberA.toString();
		}
		element = document.getElementById('idResult');
		if (element !== null) {
			element.innerHTML = (numberA + numberB).toString();
		}
	}
	function functionIncreaseB() {
		numberB = numberB + 1;
		let element = document.getElementById('idB');
		if (element !== null) {
			element.innerHTML = numberB.toString();
		}
		element = document.getElementById('idResult');
		if (element !== null) {
			element.innerHTML = (numberA + numberB).toString();
		}
	}
	function functionDecreaseB() {
		numberB = numberB - 1;
		let element = document.getElementById('idB');
		if (element !== null) {
			element.innerHTML = numberB.toString();
		}
		element = document.getElementById('idResult');
		if (element !== null) {
			element.innerHTML = (numberA + numberB).toString();
		}
	}
</script>

<h1>SUM OPERATION</h1>

<div>
	<button onclick={functionDecreaseA}>-</button>
	<span>A</span>
	<button onclick={functionIncreaseA}>+</button>
</div>
<div>
	<button onclick={functionDecreaseB}>-</button>
	<span>B</span>
	<button onclick={functionIncreaseB}>+</button>
</div>

<div>A+B=<span id="idA">5</span>+<span id="idB">3</span>=<span id="idResult">8</span></div>
