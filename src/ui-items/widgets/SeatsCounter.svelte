<script>
    /**
     * @type {string}
     */
    export let label;
    /**
     * @type {number}
     */
    export let count;
</script>

<div class="seats-counter row align-center .vibrate-1">
    <div class="counter-led" />
    <span
        >{label}&nbsp;&nbsp;
        <span class="number">{count}</span>
    </span>
</div>

<style>
    
    .seats-counter {
        background: rgb(25, 21, 38);
        color: white;
        border-radius: 15px;
        box-shadow: 0 0 200px 10px var(--green);
        font-family: "Red Hat Display";
        font-weight: 500;
        letter-spacing: 0.03em;
        margin-right: 10px;
        width: max-content;
        padding: 15px;
    }

    .counter-led {
        background: var(--green);
        border-radius: 50px;
        height: 20px;
        margin-right: 10px;
        width: 20px;
        animation: off 1s ease-in 0s infinite normal;
    }

    @keyframes off{
        0% {
            opacity: 1;
            box-shadow: 0 0 20px 10px var(--green);
        
        }

        50% {
            opacity: .1;
            box-shadow: 0 0 10px 0 var(--green);
        }

        100% {
            opacity: 0;
            box-shadow: 0 0 0 0 var(--green);
        }
    }

    .number {
        font-weight: 800;
    }

    @media (max-width: 1000px){
        .seats-counter{
            flex-direction: row;
            width: auto;
        }
    }
</style>
