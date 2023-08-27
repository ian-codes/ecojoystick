<script>
    import ServiceCard from "./ServiceCard.svelte";

    let services = {
        "Minecraft": "Vanilla, modded, up to 64 players",
        "Terraria": "Vanilla or modded, up to 8 players",
        "BattleBit": "Vanilla or modded, up to 256 players"
    }
</script>


<section>
    <h2>
        Select a supported game:
    </h2>

    <div class="container">
        {#each Object.keys(services) as key}
        <ServiceCard title={key} text={services[key]} />
    {/each}
    </div>
</section>


<style>
    h2 {
        color: white;
        font-size: 2em;
        font-weight: normal;
        letter-spacing: 3px;
        margin-bottom: 1em;
    }

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2em;
    }
</style>