<script>
    let isOpen = false;
</script>


{#if isOpen}
    <div class="bg"></div>
{/if}


<header>
    <h1>
        <a href="/">
            <div class="logo">
                <span class="eco">
                    Eco
                </span>
                <span>
                    Joystick
                </span>
    
                <div style="background-image: url('joystick.jpg');" class="joystick"></div>
            </div>
        </a>
    </h1>

    <nav>
        <button on:click={() => isOpen = !isOpen} class="{isOpen ? "burger-open" : ""} burger">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul class="{isOpen ? "open" : ""}">
            <li>
                <a class="nav-link" href="#">
                    <span>
                        Services
                    </span>
                    <span class="green"></span>
                </a>
            </li>

            <li>
                <a class="nav-link"  href="#">
                    <span>
                        Our Guarantee
                    </span>
                    <span class="green"></span>
                </a>
            </li>

            <li>
                <a class="nav-link"  href="#">
                    <span>
                        FAQ
                    </span>
                    <span class="green"></span>
                </a>
            </li>

            <li>
                <a class="nav-link"  href="#">
                    <span>
                        Contact
                    </span>
                    <span class="green"></span>
                </a>
            </li>
        </ul>
    </nav>
</header>


<style>
    /* mobile styling */
    @media screen and (max-width: 1100px) {
        header {
            margin-bottom: 3rem !important;
            padding: 1em !important;
        }

        .logo {
            font-size: 2rem !important;
        }

        .bg {
            background: black;
            opacity: 1;
            position: fixed;
            height: 120vh;
            width: 100%;
            z-index: 2;
            pointer-events: none;
        }

        ul {
            display: none !important;
            position: absolute;
            right: 0;
            background: linear-gradient(var(--dark), black);
            box-shadow: 0 50px 20px black;
            width: 100%;
            top: 78px;
            z-index: 10;
            padding: 2em 1em;
        }

        .open {
            display: flex !important;
            flex-direction: column !important;
        }


        /* burger styling */
        .burger {
            width: 40px;
            height: 40px;
            display: flex !important;
            flex-direction: column;
            justify-content: space-evenly;
            transition: all .1s ease;
        }
        .burger span {
            height: 3px;
            background: black;
            width: 100%;
            border-radius: 1em;
            position: relative;
        }
        .burger span::after {
            position: absolute;
            content: '';
            background: var(--pr);
            right: 0;
            top: 0;
            height: 100%;
            width: 0;
        }
        .burger span:nth-child(1)::after {
            transition: all .1s linear;
        }
        .burger span:nth-child(2)::after {
            transition: all .1s linear .05s;
        }
        .burger span:nth-child(3)::after {
            transition: all .1s linear .1s;
        }
        .burger:hover span::after, .burger:focus span::after {
            width: 100%;
        }

        .burger-open {
            transform: rotate(90deg);
            align-items: center;
            gap: .5em;
        }

        .burger-open span {
            height: 10px;
            width: 10px;
            border-radius: 100%;
            overflow: hidden;
            transition: all .2s ease .2s;
        }


        /* mobile link styling */
        .nav-link::before {
            display: none;
        }
    }



    /* header general styling */
    header {
        z-index: 3;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1em 2em;
        /* background: var(--dark); */
        background: linear-gradient(90deg, var(--dark), gray);
        margin-bottom: 4em;
        box-shadow: 10px 0 20px rgba(0, 0, 0, 0.438), 4px 0 2px white;
    }


    /* logo and slogan styling */
    h1 {
        display: flex;
        align-items: baseline;
        gap: 2rem;
        font-size: 2.5rem;
        letter-spacing: 2px;
        color: white;
        animation: logoFadeIn 1s forwards;
    }

    .logo {
        color: white;
        display: flex;
        align-items: center;
        font-weight: normal;
        transition: all .1s ease;
        user-select: none;
        cursor: pointer;
    }

    .logo:hover {
        font-weight: bold;
    }

    .slogan {
        font-size: 2rem;
        opacity: .8;
        font-weight: lighter;
    }

    .eco {
        color: var(--pr);
    }

    .joystick {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 50px;
        height: 50px;
        filter: invert(1);
        margin: 0 1em;
        display: none;
    }

    @keyframes logoFadeIn {
        0% {
            filter: blur(100px);
        }
        100% {
            filter: blur(0);
        }
    }



    /* navigation general styling */
    ul {
        display: flex;
        flex-direction: row;
        gap: 2em;
    }

    .burger {
        display: none;
    }



    /* link styling */
    .nav-link {
        position: relative;
        color: rgba(255, 255, 255, 0.747);
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1em;
        display: block;
        padding: .5em 1em;
        border-radius: 1em;
        background: var(--dark);
        transition: box-shadow .1s ease, transform .2s ease .2s;
        text-align: center;
        overflow: hidden;
    }

    .nav-link span:first-child {
        position: relative;
        z-index: 2;
    }

    .nav-link::before {
        position: absolute;
        content: '';
        background: rgb(255, 255, 255);
        box-shadow: 0 0 5px white;
        top: -20%;
        left: -50%;
        width: 10px;
        height: 200%;
        transform: rotate(30deg);
        z-index: 3;
    }

    .green {
        width: 0;
        position: absolute;
        inset: 0;
        background: var(--pr);
        transition: all .2s ease;
        z-index: 0;
        border-radius: 1em;
    }

    .nav-link:hover {
        color: black;
        /* box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15), 0 3px 0 black;
        transform: scale(1.1); */
    }

    .nav-link:hover .green {
        width: 100%;
    }

    .nav-link:hover::before {
        left: 150%;
        transition: left .3s linear .2s;
    }
</style>