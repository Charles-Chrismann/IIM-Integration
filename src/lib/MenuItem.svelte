<script>
    export let src;
    export let name;
</script>

<li>
    <a href="#">
        <img {src} alt="" height="32" width="32">
        <span>{name}</span>
    </a>
</li>

<style lang="scss">
li {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 44px;
    
    a {
        gap: 10px;
        display: flex;
        align-items: center;
    }
}
</style>