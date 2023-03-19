<script>
  import Brand from "../ui-items/Brand.svelte";
  import Menu from "../ui-items/Menu.svelte";
    import { windowSize } from "../stores";

import { scrolled } from "../stores";

</script>


<header class:over="{$windowSize < 1000}" class:over1="{$scrolled > 30}">
  <Brand />
  <Menu />
</header>

<style>
  header {
    background-color: var(--darkover);
    display: grid;
    grid-template-columns: 300px auto;
    border-radius: 15px;
    align-items: center;
    padding: 15px 20px;
    backdrop-filter: blur(15px);
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .over1{
    margin:  0 -30px;
    border-radius: 0;
  }
  .over{
    margin:  0 -30px;
    border-radius: 0;
    box-shadow: 0 0 30px black;
  }

  @media (max-width: 1000px) {
    .over{
    margin: 0 0 10px;
    width: 100%;
  }
    header {
      grid-template-columns: auto auto;
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (min-width: 2240px){
    .over1{
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
  }
  }
</style>
