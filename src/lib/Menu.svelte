<script>
  import MenuItem from "./MenuItem.svelte";

  const items = [
    {
      src: "/images/menu/invoices.svg",
      name: 'Invoices'
    },
    {
      src: "/images/menu/clients.svg",
      name: 'Clients'
    },
    {
      src: "/images/menu/products.svg",
      name: 'Products'
    },
    {
      src: "/images/menu/messages.svg",
      name: 'Messages'
    },
    {
      src: "/images/menu/settings.svg",
      name: 'Settings'
    },
    {
      src: "/images/menu/help.svg",
      name: 'Help'
    },
  ];

  const logout = {
      src: "/images/menu/logout.svg",
      name: 'Log Out'
    };
</script>

<div class="menu">
  <div class="logo">
    <img src="/logo.svg" alt="logo">
    <span>inance</span>
  </div>

  <div>
    <a href="#">
      Dashboard
    </a>

    <nav>
      <ul>
        {#each items as item }
          <MenuItem {...item} />
        {/each}
      </ul>
    </nav>
  </div>

  <MenuItem {...logout} />
</div>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  border: solid 4px;
}
</style>