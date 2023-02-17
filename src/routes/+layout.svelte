<script>
  import Menu from '$lib/Menu.svelte';
  import Header from '$lib/Header.svelte';
  import TransactionLite from '$lib/TransactionLite.svelte';

  async function getUser() {
		const res = await fetch(`/api`);
		const user = await res.json();
    console.log(user)

		if (res.ok) {
			return user;
		} else {
			throw new Error(user);
		}
	}
</script>

<div class="App">
    <Menu />
    <Header />
    <slot />
    <aside>
      alo
        <div class="recents">
          {#await getUser()}
          <p>Waiting 4 user</p>
          {:then user}
          <ul>
            oe
            {JSON.stringify(user)}
            {user.username}
            <!-- {user['username']} -->
            <!-- {JSON.parse(JSON.stringify(user)).username} -->
            <!-- {JSON.parse(user).username} -->
            {#each user.recentsLite as transaction (transaction.id)}
              <TransactionLite {...transaction} />
            {/each}
          </ul>
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

  aside {
    grid-area: aside;
  }
}
</style>