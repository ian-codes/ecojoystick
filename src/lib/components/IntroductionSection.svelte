<script>
    import Incentive from "./global/Incentive.svelte";

</script>


<section>
    <h2>
        We help gamers set up and run their servers.
    </h2>
    
    <p>
        And we monitor, manage & optimize them continuously to ensure a great experience.
        <br>
        Starting from as low as $10/month. 100% money-back guarantee if you aren't satisfied.
    </p>

    <div class="incentive-container">
        <Incentive />
    </div>
</section>



<style>
    @media screen and (max-width: 1100px) {
        h2 {
            font-size: 2.2em !important;
        }

        h2::after {
            bottom: -1em !important;
        }

        p {
            font-size: 1.5rem !important;
            line-height: 1.6em !important;
        }
    }

    section {
        width: 100%;
        margin: 0 auto;
    }

    h2 {
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.199);
        font-size: 3.5em;
        font-weight: normal;
        margin-bottom: 4rem;
        position: relative;
    }

    h2::after {
        position: absolute;
        content: '';
        background: var(--pr);
        box-shadow: 3px 0 10px var(--pr);
        height: 2px;
        width: 100%;
        bottom: -4px;
        left: 0;
        animation: underlineFadeIn 2s forwards;
        border-radius: 1em;
    }

    @keyframes underlineFadeIn {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }

    p {
        color: white;
        font-size: 1.8em;
        animation: paragraphFadeIn 3s forwards 2s;
        overflow: hidden;
        opacity: 0;
        margin-bottom: 3rem;
        line-height: 2em;
    }

    @keyframes paragraphFadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .incentive-container {
        transform: translateX(-100vw);
        animation: incentiveFadeIn 2s ease forwards 3s;
    }

    @keyframes incentiveFadeIn {
        0% {
            transform: translateX(-100vw);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>