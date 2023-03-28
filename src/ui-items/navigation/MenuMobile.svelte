<script>
  let isOpen = false;
</script>

<button id="toggle-mobile" on:click={() => (isOpen = !isOpen)}>
  <span class="label">Menu</span>
  <span class="material-symbols-outlined"> menu </span>
</button>

{#if isOpen}
  <div class="overlay" on:keypress={()=>'k'} on:click={()=> isOpen = !isOpen}/>

  <div id="mobile-menu">
    <h2>nav</h2>
  </div>
{/if}

<style>
  #mobile-menu {
    position: absolute;
    background-color: var(--purple);
    height: 100vh;
    width: 78vw;
    top: 0;
    right: 0;
    backdrop-filter: blur(10px);
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
  }

  #toggle-mobile {
    display: flex;
    background: transparent !important;
    color: white;
    padding: 0;
  }

  #toggle-mobile .label {
    font-family: "Source Sans Pro";
    font-size: var(--font-size-md);
    margin: 0 5px 0 0;
    opacity: 0.4 !important;
  }

  #toggle-mobile .material-symbols-outlined {
    font-size: var(--font-size-xxl) !important;
  }

  @media (max-width: 400px) {
    #toggle-mobile .label {
      display: none;
    }
  }
</style>
