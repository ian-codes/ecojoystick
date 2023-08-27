<script>
    import IntroductionSection from "../lib/components/IntroductionSection.svelte";
    import ServiceSection from "../lib/components/services/ServiceSection.svelte";
</script>


<div class="container">
    <IntroductionSection />

    <ServiceSection />
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 10em;
    }
</style>