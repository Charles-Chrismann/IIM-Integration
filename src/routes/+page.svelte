<script>
    import { onMount } from 'svelte';

    async function getUser() {
		const res = await fetch(`/api`);
		const user = await res.json();

		if (res.ok) {
			return user;
		} else {
			throw new Error(user);
		}
	}

    let promise;
    onMount(async () => {
        promise = getUser()
	});
</script>

<main>
	{#await promise}
	<p>Waiting 4 user</p>
	{:then user}
	<p>{user}</p>
	{:catch error}
	<p style="color: red">{error.message}</p>
	{/await}
</main>

<style>
main {
	grid-area: main;
}
</style>