<script>
  import DropdownItem from "./DropdownItem.svelte";
  import { scrolled } from "../../stores";
  import { onMount } from "svelte";

  /**
   * @type {Array<[string, string]>}
   */
  export let menu_items;

  /**
   * @type {string}
   */
  export let menu_name;

  /**
   * @type {any}
   */
  let dialogs;

  /**
   * @type {HTMLCollectionOf<HTMLBodyElement> | { style: { overflow: string; }; }[]}
   */
  let htmldocument;

  onMount(() => {
    // @ts-ignore
    dialogs = document.querySelectorAll("dialog");
    htmldocument = document.getElementsByTagName("body");

    dialogs.forEach(
      (
        /** @type {{ addEventListener: (arg0: string, arg1: (ev: any) => void) => void; close: () => void; }} */ dialog
      ) => {
        dialog.addEventListener("click", (ev) => {
          if (
            ev.offsetX < 0 ||
            ev.offsetX > ev.target.offsetWidth ||
            ev.offsetY < 0 ||
            ev.offsetY > ev.target.offsetHeight
          ) {
            // @ts-ignore
            dialog.close();
            htmldocument[0].style.overflow = "auto";
          }
        });
      }
    );
  });

  //Close modal
  let closeModal = () => {
    // @ts-ignore
    dialogs.forEach((dialog) => {
      dialog.close();
    });
    htmldocument[0].style.overflow = "auto";
  };
</script>

<dialog id={menu_name} class:fix-top={$scrolled > 30}>
  <div class="dropdownmenu-wrapper">
    {#each menu_items as item}
      <DropdownItem icon={item[0]} title={item[1]} />
    {/each}
  </div>
  <div>
    <button class="close" on:click={closeModal}>
      <span class="material-symbols-outlined"> cancel </span>
    </button>
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter:  grayscale(100%);
    height: 100vh;
    width: 100%;
    position: fixed;

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
    max-width: 1180px;
  }
  .dropdownmenu-wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .fix-top {
    top: 105px;
  }

  .fix-top::backdrop {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter:  grayscale(100%);

  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    color: white;
  }
</style>
