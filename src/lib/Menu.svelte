<script>
  import MenuItem from "./MenuItem.svelte";

  export let menu;
  let isOpen = false;

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
</script>

<div class="btn" on:click={() => {isOpen = !isOpen}}>
  <span></span><span></span><span></span>
</div>


<div class="menu" 
    class:open={isOpen}  
    bind:this={menu}>
  <div class="logo">
    <img src="/logo.svg" alt="logo">
    <span>inance</span>
  </div>

  <div>
    <div class="dashboard">
      <a href="#">
        <img src="/images/menu/invoices.svg" alt="" height="32" width="32">
        <span>Dashboard</span>
      </a>
    </div>

    <nav>
      <ul>
        {#each items as item }
          <MenuItem {...item} />
        {/each}
      </ul>
    </nav>
  </div>

  <div class="logout">
    <a href="#">
      <img src="/images/menu/logout.svg" alt="" height="32" width="32">
      <span>Log Out</span>
    </a>
  </div>
</div>

<style lang="scss">
.btn {
  position: fixed;
  top: 1rem;
  left: 1rem;
  height: 2rem;
  width: 2rem;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: none;
  }
  
  span {
    display: block;
    background: #ffffff;
    width: 100%;
    height: 0.25rem;
  }
}

.menu {
  padding-top: 48px;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  background: #000000;
  z-index: 999;
  transition: 0.5s;
  transform: translateX(-100%);

  

  &.open {
    transform: translateX(0%);
  }

  @media screen and (min-width: 1024px) {
      transition: 0;
      transform: translate(0%);
    }

  .logo {
    display: flex;
    justify-content: center;
    align-items: end;
    width: 100%;
    margin-bottom: 112px;

    span {
      font-size: 30px;
    }
  }

  .dashboard {
    display: grid;
    place-items: center;
    margin-bottom: 36px;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      
      padding: 10px 30px;
      background: linear-gradient(266.37deg, #FAFF00 -5.82%, #FAFF00 15.95%, #1970D6 41.2%, #6C1182 72.88%);
      border-radius: 17px;
    }
  }

  .logout {
    position: absolute;
    bottom: 24px;
    left: 0;
    display: flex;
    align-items: center;
    padding-left: 44px;
    width: 100%;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>