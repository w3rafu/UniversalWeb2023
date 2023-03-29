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
        padding: 10px 15px;
        z-index: 10;
    }
    .material-symbols-outlined {
        font-size: var(--font-size-lg);
        font-weight: 700;
        color: black;
    }

    span {
        margin-right: 10px;
    }

    @media(max-width: 650px){
        button{
            margin: 0;
        }
    }
</style>
