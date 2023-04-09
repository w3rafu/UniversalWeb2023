<script>
  //Utilities
  import { onMount } from "svelte";

  //UI
  import AccordionTab from "../ui-items/elements/AccordionTab.svelte";

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

<div class="list">
  <!--Collapsable Tabs-->
  <div class="left-column">
    <!--Title-->
    <h2>3 Reasons to join us</h2>
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
  h2 {
    margin-top: 0;
  }
  .list {
    align-items: flex-start;
    display: grid;
    grid-template-areas: "left-column right-column";
    grid-template-columns: 2.4fr 1.6fr;
    margin: 60px 30px 0;
  }

  .left-column {
    grid-area: left-column;
    margin-top: -30px;
  }

  :global(.left-column details:nth-child(3)) {
    margin-left: 30px;
    margin-right: -30px;
  }

  .right-column {
    grid-area: right-column;

  }
  .right-column img {
    filter: drop-shadow(0px 0 40px rgb(128, 214, 251));
    max-width: 100%;
    padding: 30px;
  }

  h2 {
    font-size: var(--font-size-xl);
    text-align: center;
  }
  @media (max-width: 1000px) {
    .right-column,
    .left-column {
      width: 100%;

    }
    .list {
      display: flex;
      flex-direction: column-reverse;
      margin: 0 30px;
    }

    .right-column {
      display: flex;
    }

    .right-column img {
      max-width: 80%;
      margin-top: -300px;
    }

    :global(.left-column details:nth-child(3)) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media (max-width: 650px) {
    .right-column img {
      max-width: 100%;
      margin-top: -20px;
      margin-bottom: 0;
    }

    .list {
      margin: 0;
    }
  }
</style>
