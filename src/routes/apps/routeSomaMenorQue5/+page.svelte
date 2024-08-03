<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	import type { PageData } from './$types';
	import ImageGroup from './ImageGroup.svelte';
	import { functionMove } from './functionMove';
	import { functionSample } from './functionSample';

	const { data }: { data: PageData } = $props();

	let stateA = $state(1);
	let stateB = $state(2);
	let stateImage = $state(data.stringFirstImage);
	let arrayLeft = $state([1, 2, 3, 4, 5]);
	let arrayRight = $state<number[]>([]);
	let stateCorrection = $state<boolean | undefined>(undefined);

	const [send, receive] = crossfade({});

	function functionMoveLeft(parItem: number) {
		const [aa, bb] = functionMove(parItem, arrayRight, arrayLeft);
		[arrayRight, arrayLeft] = [aa, bb.sort()];
		functionUpdateImage();
		const numberAanterior = stateA;
		const numberBanterior = stateB;
		stateA = functionSample(1, 4);
		stateB = functionSample(1, 5 - stateA);
		while (stateA === numberAanterior && stateB === numberBanterior) {
			stateA = functionSample(1, 5);
			stateB = functionSample(1, 5 - stateA);
		}
	}

	async function functionMoveRight(parItem: number) {
		[arrayLeft, arrayRight] = functionMove(parItem, arrayLeft, arrayRight);
	}

	async function functionUpdateImage() {
		const numberRandomInteger = functionSample(0, data.arrayImageFiles.length - 1);
		stateImage = (
			await import(`./images/children-apps/${data.arrayImageFiles[numberRandomInteger]}.png`)
		).default;
	}
</script>

<div class="flex flex-col items-center justify-center h-full gap-20 p-5 bg-slate-100">
	<div>
		<div class="flex items-center gap-4">
			<ImageGroup
				propQuantity={stateA}
				propImage={stateImage}
				class="h-14"
			/>
			<div>+</div>
			<ImageGroup
				class="h-14"
				propQuantity={stateB}
				propImage={stateImage}
			/>
			<div>=</div>
			<div>
				{#each arrayRight as item (item)}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<!-- class:bg-red-600={stateCorrection === false}
					class:bg-green-600={stateCorrection === true}
					class:hover:bg-red-600={stateCorrection === false}
					class:hover:bg-green-600={stateCorrection === true} -->
					<span
						class="cursor-pointer"
						animate:flip
						in:receive={{ key: item }}
						out:send={{ key: item }}
						onclick={() => functionMoveLeft(item)}
						onoutroend={() => {
							stateCorrection = undefined;
						}}
					>
						<ImageGroup
							class="h-14"
							propQuantity={item}
							propImage={stateImage}
							propCorrection={stateCorrection}
						/>
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
<br />
<div class="flex flex-col items-center justify-center h-full gap-20 p-5 bg-slate-100">
	<div class="flex items-center gap-2 text-center">
		{#each arrayLeft as item (item)}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span
				class="cursor-pointer"
				animate:flip
				in:receive={{ key: item }}
				out:send={{ key: item }}
				onclick={() => functionMoveRight(item)}
				onoutroend={() => {
					stateCorrection = item == stateA + stateB ? true : false;
				}}
			>
				<ImageGroup
					class="h-14"
					propQuantity={item}
					propImage={stateImage}
				/>
			</span>
		{/each}
	</div>
</div>
