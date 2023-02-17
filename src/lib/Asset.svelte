<script>
    export let id
    export let src
    export let name
    export let value;
    export let min;
</script>

<li 
    class:second="{id === 1}">
    <img {src} alt="" height="72" width="72">
    <p>{name}</p>
    <p>
        <span>{value}</span>
        <span>{min}</span>
    </p>
</li>

<style lang="scss">
li {
    list-style: none;
    background: linear-gradient(98.73deg, #611D8D 35.75%, #2F7EC1 73.26%);
    border-radius: 30px;
    padding: 12px 48px 12px 30px;
    color: white;


    p {

        &:last-child {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
}
.second {
    color: black;
    background: linear-gradient(99.56deg, #FAFF00 35.82%, #29ABE2 64.75%, rgba(255, 255, 255, 0.7) 91.33%);

    p, span {
        color: black;
    }
}
</style>