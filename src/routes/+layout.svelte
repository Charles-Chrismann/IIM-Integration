<script>
    import Menu from '$lib/Menu.svelte';
    import Header from '$lib/Header.svelte';
</script>

<div class="App">
    <Menu />
    <Header />
    <slot />
    <aside>
        <div class="recents"></div>
        <div class="assets"></div>
    </aside>
</div>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.App {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header" "recents" "main";


  @media screen and (min-width: 768px) {
    margin-left: 0;
    grid-template-areas: "header header" "main recents";
  }
  @media screen and (min-width: 1024px) {
    margin-left: 360px;
  }
}
</style>