<script>
  //Utilities
  import { onMount } from "svelte";

  //Window state - Scrolled Y loaction
  import { windowSize } from "../stores";
  import { scrolled } from "../stores";

  //UI items
  import Logo from "../ui-items/brand/Logo.svelte";

  //Navigation UI
  import Menu from "../ui-items/navigation/Menu.svelte";
  import MenuDropdown from "../ui-items/navigation/MenuDropdown.svelte";

  //DOM elements variables
  /** @type {HTMLDialogElement}*/
  let services_modal;
  /**@type {HTMLDialogElement}*/
  let learn_modal;

  //Assign DOM elements to local variables
  onMount(() => {
    // @ts-ignore
    services_modal = document.getElementById("services-modal");
    // @ts-ignore
    learn_modal = document.getElementById("learn-modal");
  });

  //Handle dropdown navigation
  let handleDropdown = (
    /** @type {{ detail: { option: string; }; }} */
    event
  ) => {
    if (event.detail.option === "services") services_modal.showModal();
    if (event.detail.option === "learn") learn_modal.showModal();
  };
</script>


<header>
  <Logo />
<!-- <Menu on:dropdown={handleDropdown} /> -->
</header>



<!--Services Modal

<MenuDropdown
  menu_name={"services-modal"}
  menu_items={[
    ["captive_portal", "Lease a Website"],
    ["rocket", "Search Engine Optimization"],
    ["accessible", "Accessibility Compliance"],

  ]}
/>
-->
<!--Learn Modal

<MenuDropdown
  menu_name={"learn-modal"}
  menu_items={[
    ["groups_3", "About us"],
    ["library_books", "Articles"],
    ["ecg_heart", "Ethical Statement"],
    ["ecg_heart", "Terms & Policies"],
  ]}
/>
-->
<style>
  header {
    align-items: center;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 300px auto;
    padding: 20px;

    z-index: 999;
  }
  .scrolled {
    backdrop-filter: blur(15px);
    background-color: var(--darkover);
    border-radius: 0;
    margin: 0 -30px;
    padding: 20px 30px;
  }
  .resized {
    border-radius: 0;
    box-shadow: 0 0 30px black;
    margin: 0 -30px;
  }

  @media (max-width: 1001px) {
    .resized {
      margin: 0 0 30px;
      width: 100%;
    }
    header {
      grid-template-columns: auto auto;
      justify-content: space-between;
      background-color: var(--darkover);
      width: 100%;

    }
    .scrolled {
      padding: 20px;
    }
  }

  @media (min-width: 2240px) {
    .scrolled {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;

    }

  }
</style>
