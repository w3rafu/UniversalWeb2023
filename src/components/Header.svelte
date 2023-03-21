<script>
  //Import UI items
  import Brand from "../ui-items/Brand.svelte";
  import Menu from "../ui-items/Menu.svelte";

  //Window size state
  import { windowSize } from "../stores";
  // Scrolling Y location
  import { scrolled } from "../stores";

  let dropdown_services = false;
  let dropdown_learn = false;

  let handleDropdown = (
    /** @type {{ detail: { option: string; }; }} */ event
  ) => {
    if (event.detail.option === "services") {
      dropdown_services = !dropdown_services;
      dropdown_learn = false;
    }
    if (event.detail.option === "learn") {
      dropdown_learn = !dropdown_learn;
      dropdown_services = false;
    }
  };

  const closeDropdown = (event) => {
    dropdown_services = false;
    dropdown_learn = false;
  };
</script>

<!--The header 
  (applies dynamic class on resizing or scrolling)
-->
<header class:resized={$windowSize < 1000} class:scrolled={$scrolled > 30}>
  <Brand />
  <Menu on:dropdown={handleDropdown} />
</header>

{#if dropdown_services}
<div class="overlay" on:click={closeDropdown} on:keydown={closeDropdown}/>

  <div class="dropdown" aria-modal="true" role="alertdialog">
    <button>Lease a Website</button>
    <button>Search Engine Optimization</button>
    <button>Accesibility Compliance</button>
    <button>Cybersecurity Audit</button>
  </div>
{/if}

{#if dropdown_learn}
  <div class="overlay" />
  <nav class="dropdown" aria-modal="true" role="alertdialog">
    <button>About us</button>
    <button>Articles</button>
    <button>Knowledge Base</button>
    <button>Ethical Statement</button>
  </nav>
{/if}

<style>
  .overlay {
    background-color: rgba(0, 0, 26, 0.734);
    backdrop-filter: blur(10px);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    margin: 0 -30px;
  }

  .dropdown {
    background: var(--purplegradientright);
    backdrop-filter: blur(10px);
    position: absolute;
    padding: 50px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    width: 80%;
    margin: 0 auto;
    left: 0;
    right: 0;
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
