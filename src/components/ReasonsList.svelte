<script>
  import { onMount } from "svelte";

  onMount(() => {
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  });

  /**
   * @type {string}
   */
  export let title_one;
  /**
   * @type {string}
   */
  export let info_one;
  /**
   * @type {string}
   */
  export let title_two;
  /**
   * @type {string}
   */
  export let info_two;
  /**
   * @type {string}
   */
  export let title_three;

  /**
   * @type {string}
   */
  export let info_three;
</script>

<h2>3 Reasons to work with us:</h2>
<div class="list">
  <div class="coll">
    <details>
      <summary> <h3>{title_one}</h3></summary>
      <p>{@html info_one}</p>
    </details>
    <details>
      <summary> <h3>{title_two}</h3> </summary>
      <p>{@html info_two}</p>
    </details>
    <details>
      <summary>
        <h3>{title_three}</h3>
      </summary>
      <p>{@html info_three}</p>
    </details>
  </div>

  <div class="colr">
    <img src="ss.webp" alt="Universal Web Galaxy"/>
  </div>
</div>

<style>
  .list {
    align-items: center;
    display: grid;
    grid-template-columns: 2.7fr 1.3fr;
    grid-template-areas: "coll colr";
    padding: 30px;
  }

  .coll {
    grid-area: coll;
  }
  .colr {
    grid-area: colr;
    margin: auto;
    margin: -100px 0;
  }
  .colr img {
    max-width: 100%;
    padding: 30px;
    filter: drop-shadow(0px 0 40px rgb(128, 214, 251));
  }
  details {
    cursor: pointer;
    background: #d1eaffe9;
    color: black;
    border: transparent;
    margin-bottom: 20px;
    padding: 15px 30px;
    border-radius: 20px;
  }

  details:hover {
    background-color: white;
  }
  details[open] {
    background-color: var(--purple);
    color: white;
    padding: 30px 40px 15px;
    backdrop-filter: blur(10px);
    box-shadow: var(--bottomshadow);
  }

  summary {
    list-style: none;
  }

  details summary::before {
    content: "►";
    font-size: var(--font-size-md);
    margin-right: 10px;
    /* you can style it however you want, use background-image for example */
  }

  details[open] summary::before {
    content: "▼";
    font-size: var(--font-size-md);
    margin-right: 10px;
  }

  h2 {
    font-size: var(--font-size-xl);
    text-align: center;
    margin: 0;
  }

  h3 {
    padding: 0;
    display: inline;
  }
</style>
