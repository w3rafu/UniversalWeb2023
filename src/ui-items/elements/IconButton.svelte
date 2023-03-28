<script>
    //Routing tool
    import { goto } from "$app/navigation";

    /**
     * @type {string}
     */
    export let icon;
    /**
     * @type {string}
     */
    export let label;
    /**
     * @type {string}
     */
    export let href;

    /**
     * @type {string | undefined}
     */
     export let color;

    /**
     * @type {string | undefined}
     */
     export let background
    
</script>

<button
    style:background
    style:color
    on:click={() => {
        goto(`${href}`);
    }}
>
    <span class="material-symbols-outlined"> {icon} </span>
    {label}
</button>

<style>
    button {
        align-items: center;
        display: flex;
        box-shadow: var(--bottomshadow);
        margin-right: 15px;
    }

    span {
        margin-right: 10px;
    }
</style>
