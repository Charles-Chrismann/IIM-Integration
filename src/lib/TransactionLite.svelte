<script>
  export let name;
  export let url;
  export let state;
  export let value;
  export let isGoodNews;
  export let date;
</script>

<li>
  <img src={url} alt={url}>
  <div>
    <p>{name}</p>
    <p>{state}</p>
  </div>
  <div>
    <p>{value}</p>
    <p>{date}</p>
  </div>
</li>