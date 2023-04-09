<script>

  import { goto } from "$app/navigation";

</script>
<div class="brand row align-center">
  <button on:click={()=>{goto('/')}}>
    <img src="logo.png" alt="Universal Web Logo" class="logo" />
  </button>
  <h2>Universal Web</h2>
</div>

<style>
  button{
    background: transparent;
    padding: 0;
  }
  h2 {
    font-size: var(--font-size-lg);
    margin: 0;
  }

  .logo {
    width: clamp(3.5rem, 10vw, 4rem);
    margin-right: 15px;
  }

  @media (max-width: 1000px) {
    
    .brand {
      align-items: center;
      flex-direction: row;
      margin-right: 7px;
    }

    h2 {
      font-size: var(--font-size-xl);
    }
  }
</style>
