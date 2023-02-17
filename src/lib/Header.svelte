<script>
  let username = 'Roger'; // j'ai eu la flemme
  let src = '/images/user/pp.png'; // j'ai eu la flemme
</script>

<header>
  <div class="main">
    <h2>
      Hi, {username}
    </h2>
  
    <div class="inputBx">
      <input type="text" placeholder="Search">
      <img src="/images/other/search.svg" alt="" width="32" height="32">
    </div>
  </div>

  <div class="settings">
    <div class="bell">
      <img src="/images/other/bell.svg" alt="" width="33" height="40">
      <img src="/images/other/dot.svg" alt="" width="8" height="10" class="dot">
    </div>
    <img {src} alt="">
  </div>
</header>

<style lang="scss">
header {
  grid-area: header;
  padding: 56px 0rem 56px 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  @media screen and (min-width: 768px) {
    margin-left: 0;
    grid-template-areas: "header header" "main aside";
  }

  .main {
    @media screen and (max-width: 1024px) {
      width: 100%;
      padding-right: 5%;
      padding-left: 5%;
    }
  }

  .inputBx {
    position: relative;
    

    input {
      border-radius: 16px;
      width: 20vw;
      height: 50px;
      padding-left: 5rem;
      color: #000000;
      outline: none;
      border: none;
    }

    img {
      position: absolute;
      left: 2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .main {
    display: flex;
  }

  .settings {
    @media screen and (max-width: 1024px) {
      display: none;
    }
    width: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    .bell {
      position: relative;
      height: fit-content;
      width: fit-content;

      .dot {
        position: absolute;
        transform: translate(50%, -50%);
        top: 0;
        right: 0;
      }
    }
  }
}
</style>