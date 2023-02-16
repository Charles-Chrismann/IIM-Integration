<script>
  import Menu from '$lib/Menu.svelte';
  import Header from '$lib/Header.svelte';

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

<div class="App">
    <Menu />
    <Header />
    <slot />
    <aside>
      alo
        <div class="recents">
          {#await promise}
          <p>Waiting 4 user</p>
          {:then user}
          <p>{user}</p>
          {:catch error}
          <p style="color: red">{error.message}</p>
          {/await}
        </div>
        <div class="assets"></div>
    </aside>
</div>

<style lang="scss">
.App {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "aside" "main";


  @media screen and (min-width: 768px) {
    margin-left: 0;
    grid-template-areas: "header header" "main aside";
  }
  @media screen and (min-width: 1024px) {
    margin-left: 360px;
  }
}
</style>