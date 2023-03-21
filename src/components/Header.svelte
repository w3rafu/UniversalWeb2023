<script>
  //Import UI items
  import Brand from "../ui-items/Brand.svelte";
  import Menu from "../ui-items/Menu.svelte";

  //Window size state
  import { windowSize } from "../stores";
  // Scrolling Y location
  import { scrolled } from "../stores";
</script>

<!--The header 
  (applies dynamic class on resizing or scrolling)
-->
<header class:resized={$windowSize < 1000} class:scrolled={$scrolled > 30}>
  <Brand />
  <Menu />
</header>

<style>
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
