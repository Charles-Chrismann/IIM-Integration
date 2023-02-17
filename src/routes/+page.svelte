<script>
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';
    import TransactionLarge from '../lib/TransactionLarge.svelte';

	let totalBalanceBTC = 0.97894652;
	let totalBalanceDlr = 40123.56;

	let ctx;
	let chart = null

	function renderChart() {
		if(chart) chart.destroy()
		chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['5 nov', '6 nov', '7 nov', '8 nov', '9 nov', '10 nov', '11 nov', '12 nov', '13 nov',  '14 nov'],
				datasets: [{
					label: 'My First Dataset',
					data: [100, 300, 400, 250, 100, 500, 600, 500, 600, 700],
					fill: false,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				}]
				}
		});
	}

	async function getUser() {
		const res = await fetch(`/api`);
		const user = await res.json();

		if (res.ok) {
			return user;
		} else {
			throw new Error(user);
		}
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
		<h4>Recent Transactions</h4>

		{#await getUser()}
          <p>Waiting 4 user</p>
          {:then user}
          <ul>
            {#each user.recentsLarge as transaction (transaction.id)}
              <TransactionLarge {...transaction} />
            {/each}
          </ul>
          {:catch error}
          <p style="color: red">{error.message}</p>
          {/await}
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

		ul {
			display: flex;
			gap: 5px;
			background: #292727;
			padding: 0.5rem 1rem;
			border-radius: 17px;
			align-items: center;
			justify-content: space-around;

			& > li:first-child {
				background: #0D0C0C;
				padding: 4px;
				border-radius: 999px;
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