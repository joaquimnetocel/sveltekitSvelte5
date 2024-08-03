<script lang="ts">
	let {
		propImage,
		propCorrection,
		...propRest
	}: {
		propImage: string;
		propImageSize: number;
		class?: string;
		propCorrection: boolean | undefined;
	} = $props();
</script>

<div
	class="flex flex-col gap-2 p-4 rounded-3xl"
	class:bg-slate-300={propCorrection === undefined}
	class:bg-red-600={propCorrection === false}
	class:bg-green-600={propCorrection === true}
>
	<div class="grid items-center grid-cols-3 gap-2">
		<div class="justify-self-end">
			<img
				class={propRest.class}
				alt="FIGURA"
				src={propImage}
			/>
		</div>
		<div class="justify-self-start">
			<img
				class={propRest.class}
				alt="FIGURA"
				src={propImage}
			/>
		</div>
		<div class="justify-self-start">
			<img
				class={propRest.class}
				alt="FIGURA"
				src={propImage}
			/>
		</div>
	</div>
	<div class="text-xl font-bold text-center">3</div>
</div>
