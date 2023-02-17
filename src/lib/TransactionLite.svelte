<script>
  export let name;
  export let src;
  export let state;
  export let value;
  export let isGoodNews;
  export let date;
</script>

<li>
  <img {src} alt={src} height="56" width="56">
  <div>
    <div>
      <p>{name}</p>
      <p class="state">{state}</p>
    </div>
    <div>
      <p 
        class="value"
        class:danger={!isGoodNews}
        >{value}</p>
      <p class="date">{date}</p>
    </div>
  </div>
</li>

<style lang="scss">
li {
  list-style: none;
  display: flex;
  font-size: 19px;

  & > div {
    width: calc(100% - 56px - 28px);
    display: flex;
    justify-content: space-between;
  }
  & > div > div {
    display: flex;
    flex-direction: column;
  }
  img {
    margin-right: 28px;
  }

  .value {
    color: #4AD619;
  }

  .value.danger {
    color: #D61919;
  }

  .state, .date {
    opacity: 0.7;
  }
}
</style>