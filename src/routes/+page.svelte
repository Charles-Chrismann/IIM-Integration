<script>
    import Chart from 'chart.js/auto';
    import { onMount, tick } from 'svelte';

	let totalBalanceBTC = 0.97894652;
	let totalBalanceDlr = 40123.56;

	let ctx;
	let chart = null

	function renderChart() {
		if(chart) chart.destroy()
		chart = new Chart(ctx, {
			type: 'bar',
			data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				borderWidth: 1
			}]
			},
			options: {
			scales: {
				y: {
				beginAtZero: true
				}
			}
			}
		});
	}

	onMount(async () => {
		window.addEventListener('resize', renderChart)
		renderChart()
	});
		
</script>

<main>
	<div class="balances">
		<div>
			<h4>Total Balance</h4>
			<p class="pbtc"><span>{totalBalanceBTC}</span><span class="btc">BTC</span></p>
			<p class="dlr">${totalBalanceDlr}</p>
		</div>
		<div>
			<ul>
				<li>Portfolio</li>
				<li>Funding</li>
				<li>Assets</li>
				<li>P2P</li>
			</ul>
		</div>
	</div>
	<div class="canvas">
		<canvas bind:this={ctx}></canvas>
	</div>
	<div class="transactionsLarge">

	</div>
</main>

<style lang="scss">
main {
	grid-area: main;

	.balances {
		width: 100%;
		display: flex;
		justify-content: space-between;

		& > div:first-child {
			h4, .dlr {
				opacity: 0.8;
				font-size: 22px;
				font-weight: 900;
			}

			.pbtc {
				font-size: 29px;
				font-weight: 700;

				.btc {
					background: #FAFF00;
					font-size: 1rem;
					padding: 2px;
					border-radius: 0.5rem;
					color: #000000;
				}
			}
		}
	}

	.canvas {
		
		canvas {
			width: 100%;
		}
	}
}
</style>