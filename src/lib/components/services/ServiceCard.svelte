<script>
    export let title
    export let text
</script>



<div class="container">
    <span class="title">
        {title}
    </span>

    <p>
        {text}
    </p>
</div>


<style>
    .container {
        color: white;
        background: linear-gradient(120deg, rgba(255, 255, 255, 0.233), rgba(0, 0, 0, 0.164));
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        aspect-ratio: 1;
        padding: 1rem;
        cursor: pointer;
        transition: all .2s ease;
        box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.342) inset;
    }

    .container:hover {
        transform: scale(1.05);
        filter: brightness(2);
    }
    
    .title {
        font-weight: bold;
        font-size: 2em;
    }

    p {
        font-size: 1.2em;
    }

    .title, p {
        text-align: center;
    }
</style>