<script>
  import Menu from '$lib/Menu.svelte';
  import Header from '$lib/Header.svelte';
  import TransactionLite from '$lib/TransactionLite.svelte';
  import Asset from '$lib/Asset.svelte';

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
      <div class="recents">
          <h4>Recent Transactions</h4>
          {#await getUser()}
          <p>Waiting 4 user</p>
          {:then user}
          <ul>
            {#each user.recentsLite as transaction (transaction.id)}
              <TransactionLite {...transaction} />
            {/each}
          </ul>
          {:catch error}
          <p style="color: red">{error.message}</p>
          {/await}
      </div>
      <div class="assets">
        <h4>Assets</h4>
          {#await getUser()}
          <p>Waiting 4 user</p>
          {:then user}
          <ul>
            {#each user.assets as asset (asset.id)}
              <Asset {...asset} />
            {/each}
          </ul>
          {:catch error}
          <p style="color: red">{error.message}</p>
          {/await}
      </div>
    </aside>
</div>

<style lang="scss">
.App {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "aside" "main";
  margin-left: 0;
  grid-template-columns: 100%;


  @media screen and (min-width: 868px) {
    margin-left: 0;
    grid-template-areas: "header header" "main aside";
    grid-template-columns: 1fr 340px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 240px;
    // grid-template-areas: "header header" "main aside";
    grid-template-columns: 1fr 360px;
  }

  aside {
    grid-area: aside;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    

    @media screen and (max-width: 868px) {
      flex-direction: row;
      justify-content: space-between;
    }

    @media screen and (max-width: 640px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    .recents {
      @media screen and (max-width: 868px) {
        width: 45%;
      }
      @media screen and (max-width: 640px) {
        width: 100%;
      }
      h4 {
        margin-bottom: 42px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 38px;
      }
    }
    .assets {
      @media screen and (max-width: 868px) {
        width: 45%;
      }
      @media screen and (max-width: 640px) {
        width: 100%;
      }
      h4 {
        margin-bottom: 1rem;
        @media screen and (max-width: 868px) {
          margin-bottom: 42px;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 28px;
      }
    }
  }
}
</style>