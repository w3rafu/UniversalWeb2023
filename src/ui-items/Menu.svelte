<script>
  import { windowSize } from "../stores";
  import MenuMobile from "./MenuMobile.svelte";
</script>

<nav class="row align-center">
    {#if $windowSize}
    {#if $windowSize < 1000}
    <MenuMobile />
  {:else}
  <ul class="row align-center">
    <li>
      <a href="/">
        Services
        <span class="material-symbols-outlined"> arrow_drop_down </span>
      </a>
    </li>
    <li>
      <a href="/">
        About
        <span class="material-symbols-outlined"> arrow_drop_down </span>
      </a>
    </li>
    <li>
      <a href="/">
        Learn <span class="material-symbols-outlined"> arrow_drop_down </span>
      </a>
    </li>
  </ul>

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
  ul {
    list-style: none;
    padding: 0;
  }
  ul li {
    padding: 0 30px 0 0;
  }
  a {
    display: flex;
    align-items: center;
    color: white;
    font-size: var(--font-size-md);
    text-decoration: none;
    font-family: "Red Hat Display" sans-serif;
    font-weight: 700;
  }

  a .material-symbols-outlined {
    font-size: var(--font-size-lg);
    color: white;
  }

  button {
    display: flex;
  }

  .contact .material-symbols-outlined {
    font-weight: 800;
    font-size: var(--font-size-lg);
    margin-right: 7px;
  }


</style>
