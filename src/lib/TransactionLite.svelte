<script>
  export let name;
  export let src;
  export let state;
  export let value;
  export let isGoodNews;
  export let date;
</script>

<li>
  <img {src} alt={src}>
  <div>
    <p>{name}</p>
    <p>{state}</p>
  </div>
  <div>
    <p>{value}</p>
    <p>{date}</p>
  </div>
</li>