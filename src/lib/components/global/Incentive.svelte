
<a href="#">
    Try our services
    <div style="background-image: url('arrpw.png');" class="arrow">
    </div>
</a>


<style>
    /* mobile styling */
    @media screen and (max-width: 1100px) {
        a {
            font-size: 1.2em !important;
            padding: 1em !important;
        }
    }

    .arrow {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 20px;
        height: 20px;
        filter: brightness(2);
    }

    a {
        display: flex;
        align-items: center;
        gap: 1em;
        width: 100%;
        max-width: max-content;
        font-size: 1.5em;
        letter-spacing: 1px;
        padding: 1em;
        background: linear-gradient(45deg, rgb(46, 121, 233) 20%, rgb(123, 0, 204));
        color: white;
        box-shadow: 0 2px 0 3px rgb(0, 0, 0), 0 2px 0 4px white;
        transition: all .2s ease;
        position: relative;
        overflow: hidden;
    }

    a:hover {
        transform: scale(1.05);
        box-shadow: none;
        filter: saturate(1.2) contrast(1.2) brightness(1.2) invert(1);
    }

</style>