<script>
    /**
     * @type {string}
     */
    export let title;
    /**
     * @type {string}
     */
    export let paragraph;
</script>

<!--Collapsable tab-->
<details>
    <summary> <h3>{title}</h3></summary>
    <p>{@html paragraph}</p>
</details>

<style>
    h3 {
        padding: 0;
        display: inline;

    }
    details {
        cursor: pointer;
        background: linear-gradient(45deg, var(--purple) 50%, #4adfd994);
        border-radius: 20px;

        color: white;
        border: transparent;
        margin-bottom: 20px;
        padding: 15px ;

    }
    details:hover {
        background-color: rgba(255, 255, 255, 0.152);
    }
    details[open] {
        color: white;
        padding: 30px 30px 15px;
        backdrop-filter: blur(10px);
        box-shadow: var(--bottomshadow);
 
    }

    details[open] h3 {
        font-weight: 600;
    }

    details[open] p {
        opacity: .8 !important;  
    }

    summary {
        list-style: none;
    }

    details summary::before {
        content: "►";
        font-size: var(--font-size-md);
        margin-right: 10px;
    }

    details[open] summary::before {
        content: "▼";
        font-size: var(--font-size-md);
        margin-right: 10px;
    }
</style>
