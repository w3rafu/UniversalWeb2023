<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
    import { scrolled } from "../stores";
  import { windowSize } from "../stores";
  import { onMount } from "svelte";

  /**
   * @type {number}
   */
  let innerWidth;

  /**
   * @type {number}
   */
  let scrollY;

  onMount(() => {
    innerWidth = window.innerWidth;
    scrollY = window.scrollY;
  });
  $: windowSize.set(innerWidth);
  $: scrolled.set(scrollY)

</script>

<svelte:window bind:innerWidth bind:scrollY/>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;700;900&family=Source+Sans+Pro&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
</svelte:head>

<Header />
<slot />


<style>
  :global(:root) {
    --darkover: #0d0c18c1;
    --blue: #060b38;
    --link: #1b6dde;
    --green: #14d752;
    --purplegradient: linear-gradient(
      45deg,
      var(--purple) 10%,
      #b100e1 60%,
      #3ecdd1
    );
    --purple: rgba(107, 3, 225, 0.438);
    --bottomshadow: 0 20px 25px 0 rgba(0, 0, 0, 0.356);
    --font-size-sm: clamp(0.8rem, 0.08vw + 0.78rem, 0.84rem);
    --font-size-base: clamp(1rem, 0.23vw + 0.94rem, 1.13rem);
    --font-size-md: clamp(1.25rem, 0.45vw + 1.14rem, 1.5rem);
    --font-size-lg: clamp(1.56rem, 0.79vw + 1.36rem, 2rem);
    --font-size-xl: clamp(1.95rem, 1.29vw + 1.63rem, 2.66rem);
    --font-size-xxl: clamp(2.44rem, 2.02vw + 1.94rem, 3.55rem);
    --font-size-xxxl: clamp(3.05rem, 3.06vw + 2.29rem, 4.73rem);
  }

  :global(.material-symbols-outlined) {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    background: #17181b;
    font-family: "Source Sans Pro", sans-serif;
    color: white;
    padding: 30px;
    margin: 0;
    font-size: var(--font-size-base);
    background-image: url('04-1.webp');
    background-size: cover;
    background-blend-mode: color-dodge;
    background-attachment: fixed;
    max-width: 1440px;
    margin: auto;
  }
  :global(p) {
    line-height: 1.5 !important;
  }
  :global(h1, h2, h3, h4, h5) {
    font-family: "Red Hat Display", sans-serif;
  }
  :global(h1) {
    font-size: var(--font-size-xl);
  }
  :global(button) {
    align-items: center;
    cursor: pointer;
    padding: 10px 15px;
    font-weight: 700;
    border-radius: 15px;
    border: 0;
    font-size: var(--font-size-base);
  }
  :global(.no-margin) {
    margin: 0;
  }

  :global(.row) {
    display: flex;
  }

  :global(.align-center) {
    align-items: center;
  }

  :global(.spread) {
    justify-content: space-between;
  }

  :global(.no-break){
    white-space: nowrap;
  }

  @media (max-width: 1000px) {
    :global(body) {
      padding: 0;
      overflow-x: hidden;
    }
    :global(.row) {
      flex-direction: column;
    }

    :global(.align-center) {
      align-items: flex-start;
    }
    :global(.hide-mobile) {
      display: none;
    }
  }
</style>
