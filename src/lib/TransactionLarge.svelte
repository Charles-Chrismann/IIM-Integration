<script>
    export let name;
    export let min;
    export let src;
    export let marketCap;
    export let change24h;
    export let isGoodNews;
    export let curve;
  </script>
  
<li>
  <img {src} alt="">
  <div>
    <span>{name}</span>
    <span>{min}</span>
  </div>
  <div>
    <span>Market Cap</span>
    <span>{marketCap}</span>
  </div>
  <div>
    <span>24h change</span>
    <span
    class:danger={!isGoodNews}
    class="value"
    >{change24h}</span>
  </div>
  <img src={curve} alt="">
  <span>Trade</span>
  <div class="bg"></div>
</li>

<style lang="scss">
li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    height: 80px;
    margin-bottom: 20px;

    & > div {
        display: flex;
        flex-direction: column;
    }

    & > span {
        background: #000000;
        border-radius: 9999px;
        padding: 0.5rem 1rem;
    }

    .bg {
        position: absolute;
        inset: 0;
        background: rgba(32, 35, 43, 0.7);
        filter: blur(4px);
        border-radius: 30px;
        z-index: -1;
    }

    .value {
    color: #4AD619;
  }

  .value.danger {
    color: #D61919;
  }
}
</style>