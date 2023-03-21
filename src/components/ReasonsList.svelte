<script>
  //Utilities
  import { onMount } from "svelte";

  //UI
  import AccordionTab from "../elements/AccordionTab.svelte";

  //Controls the behavior of the tabs -> close if another is open
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

  //Data props
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

<!--Title-->
<h2>3 Reasons to work with us</h2>

<div class="list">

  <!--Collapsable Tabs-->
  <div class="left-column">
    <AccordionTab title={title_one} paragraph={info_one} />

    <AccordionTab title={title_two} paragraph={info_two} />

    <AccordionTab title={title_three} paragraph={info_three} />
  </div>

  <!--Image-->
  <div class="right-column">
    <img src="a.webp" alt="Universal Web Galaxy" />
  </div>
  
</div>

<style>
  .list {
    align-items: center;
    display: grid;
    grid-template-areas: "left-column right-column";
    grid-template-columns: 2.2fr 1.4fr;
    margin-bottom: 30px;
    padding: 30px 60px;
  }

  .left-column {
    grid-area: left-column;

  }
  .right-column {
    grid-area: right-column;
    margin: -100px 0;
  }
  .right-column img {
    filter: drop-shadow(0px 0 40px rgb(128, 214, 251));
    max-width: 100%;
    padding: 30px;
  }

  h2 {
    font-size: var(--font-size-xl);
    text-align: center;
    margin: 0;
  }
</style>
