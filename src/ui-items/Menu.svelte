<script>
  import { windowSize } from "../stores";
  import MenuMobile from "./MenuMobile.svelte";
</script>

<nav class="row align-center">
  {#if $windowSize}
    {#if $windowSize < 1000}
      <MenuMobile />
    {:else}
      <button class="services">
        Services
        <span class="material-symbols-outlined"> arrow_drop_down </span>
      </button>
      <button class="learn">
        Learn
        <span class="material-symbols-outlined"> arrow_drop_down </span>
      </button>
      <button class="contact">
        <span class="material-symbols-outlined"> mark_email_read </span>
        Contact
      </button>
    {/if}
  {/if}
</nav>

<style>
  nav {
    min-width: 100%;
    justify-content: end;
  }

  .services {
    background-color: rgba(255, 255, 255, 0.081);
    color: white;
  }

  .learn {
    background: transparent;
    color: white;
  }

  button {
    display: flex;
    margin-left: 15px;
    padding-right: 5px;
  }

  .material-symbols-outlined {
    font-weight: 800;
    font-size: var(--font-size-lg);
  }
  .contact {
    padding-right: 15px;
  }

  .contact .material-symbols-outlined {
    margin-right: 7px;
  }
</style>
