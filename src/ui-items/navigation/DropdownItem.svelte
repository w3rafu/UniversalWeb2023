<script>
    /**
     * @type {string}
     */
    export let icon;
    /**
     * @type {string}
     */
    export let title;
</script>

<button>
    <div>
        <span class="material-symbols-outlined">
            {icon}
        </span>
    </div>
    <div class="text">
        <h2>{@html title}</h2>
    </div>
</button>

<style>
    .material-symbols-outlined {
        font-size: var(--font-size-xl);
    }
    button {
        display: grid;
        grid-template-columns: 0.1fr 1fr;
        width: 260px;
        gap: 7px;
    }

    button div {
        display: flex;
    }

    .text {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    h2 {
        margin: 0;
        font-size: var(--font-size-sm);
    }
</style>
