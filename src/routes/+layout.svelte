<script>
    import Header from "../lib/components/global/Header.svelte";

</script>


<div style="background-image: url('poygon.jpg')" class="bg"></div>

<Header></Header>

<main>
    <slot></slot>
</main>


<style>
    @media screen and (max-width: 1100px) {
        main {
            padding: 1em;
        }
    }

    main {
        max-width: 1100px;
        margin: 0 auto;
    }

    .bg {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: fixed;
        inset: 0;
        height: 120vh;
        opacity: .1;
        mix-blend-mode: color-burn;
        z-index: -3;
    }
</style>