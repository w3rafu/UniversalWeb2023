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

<div class="seats-counter row align-center">
    <div class="counter-led" />
    <span
        >{label}&nbsp;&nbsp;
        <span class="number">{count}</span>
    </span>
</div>

<style>
    .seats-counter {
        color: white;
        backdrop-filter: blur(10px);
        background-color: var(--darkover);
        border-radius: 15px;
        box-shadow: var(--bottomshadow);
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
    }

    .number {
        font-weight: 800;
    }
</style>
