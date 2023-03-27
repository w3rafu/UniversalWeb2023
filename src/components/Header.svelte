<script>
  import { onMount } from "svelte";

  //Import UI items
  import Brand from "../ui-items/Brand.svelte";
  import Menu from "../ui-items/Menu.svelte";
  import DropdownItem from "../ui-items/ DropdownItem.svelte";

  //Window size state
  import { windowSize } from "../stores";
  // Scrolling Y location
  import { scrolled } from "../stores";

  //DOM elements variables
  /**
   * @type {any}
   */
  let services_modal;
  /**
   * @type {any}
   */
  let learn_modal;
  /**
   * @type {any}
   */
  let htmldocument;
  /**
   * @type {Element | null}
   */
  let closeButton;

  //Find DOM elements on load
  onMount(() => {
    services_modal = document.getElementById("services-modal");
    learn_modal = document.getElementById("learn-modal");
    htmldocument = document.getElementsByTagName("body");
    services_modal.addEventListener('click', (ev) => {
    if (ev.offsetX < 0 || ev.offsetX > ev.target.offsetWidth ||
        ev.offsetY < 0 || ev.offsetY > ev.target.offsetHeight) {
          services_modal.close();
          htmldocument[0].style.overflow = "auto";
    }
});
  });

  let modalIsOpen = false;

  //Process showing modal, disable scrolling and offer closing option.
  let handleDropdown = (
    /** @type {{ detail: { option: string; }; }} */ event
  ) => {
    if (event.detail.option === "services") {
      services_modal.showModal();
      htmldocument[0].style.overflow = "hidden";
      closeButton = document.querySelector(".close-services");
      modalIsOpen = true
    }
    if (event.detail.option === "learn") {
      learn_modal.showModal();
      htmldocument[0].style.overflow = "hidden";
      closeButton = document.querySelector(".close-learn");
      modalIsOpen = true
    }
  };

  //Close modal
  let closeModal = () => {
    // @ts-ignore
    closeButton.parentElement.parentElement.close();
    htmldocument[0].style.overflow = "auto";
  };

  
</script>



<!--The header 
  (applies dynamic class on resizing or scrolling)
-->
<header class:resized={$windowSize < 1000} class:scrolled={$scrolled > 30}>
  <Brand />
  <Menu on:dropdown={handleDropdown} />
</header>

<!--Services Modal-->
<dialog id="services-modal" class:fix-top={$scrolled > 30}>
  <div class="dropdownmenu-wrapper">
    <DropdownItem
      title={"Lease a Website"}
      icon={"captive_portal"}
    />
    <DropdownItem
      title={"Search Engine Optimization"}
      icon={"rocket"}
    />
    <DropdownItem
      title={"Accesibility Compliance"}
      icon={"accessible"}
    />
    <DropdownItem
      title={"Cybersecurity Audit"}
      icon={"vpn_key_alert"}
    />
  </div>
  <div>
    <button class="close-services" on:click={closeModal}>
      <span class="material-symbols-outlined"> cancel </span>
    </button>
  </div>
</dialog>

<!--Learn Modal-->
<dialog id="learn-modal">
  <div>
    <button>About us</button>
    <button>Articles</button>
    <button>Knowledge Base</button>
    <button>Ethical Statement</button>
  </div>
  <div>
    <button class="close-learn" on:click={closeModal}>
      <span class="material-symbols-outlined"> cancel </span>
    </button>
  </div>
</dialog>

<style>
  .dropdownmenu-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;

    right: 0;
  }



  dialog {
    background: var(--purplegradientright);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border: none;
    width: 90%;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 130px;
    z-index: 4;
    box-shadow: var(--bottomshadow);
  }

  header {
    align-items: center;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 300px auto;
    padding: 20px;
    position: sticky;
    top: 0;
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

  .fix-top {
    top: 105px;
  }

  .fix-top::backdrop {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    backdrop-filter: grayscale(100%);;
    top: 105px;
  }

  .close-learn,
  .close-services {
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    color: white;
  }

  @media (max-width: 1000px) {
    .resized {
      margin: 0 0 10px;
      width: 100%;
    }
    header {
      grid-template-columns: auto auto;
      justify-content: space-between;
      width: 100%;
    }
  }

  @media (min-width: 2240px) {
    .scrolled {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
</style>
