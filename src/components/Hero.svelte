<script>
  //Routing tool
  import { goto } from "$app/navigation";

  //UI element -> Icon Button
  import IconButton from "../ui-items/elements/IconButton.svelte";
  import SeatsCounter from "../ui-items/widgets/SeatsCounter.svelte";

  /**
   * @type {string}
   */
  export let title;
  /**
   * @type {string}
   */
  export let subtitle;
  /**
   * @type {string}
   */
  export let left_button_label;
  /**
   * @type {string}
   */
  export let right_button_label;
  /**
   * @type {string}
   */
  export let left_button_href;
  /**
   * @type {string}
   */
  export let right_button_href;
  /**
   * @type {number}
   */
  export let seats_count;
  /**
   * @type {string}
   */
  export let seats_counter_label;
</script>

<section id="hero" class="row">
  <!--Hero image-->
  <div class="images">
    <img src="girl-smiling.webp" alt="creative person" class="hero-image" />
  </div>

  <div id="hero-content">
    <!--Hero headings-->
    <h1>{@html title}</h1>
    <h2>{@html subtitle}</h2>

    <!--Call to actions-->

    <!--Seat counter-->
  </div>
</section>
<div class="ctas row align-center">
  <IconButton
    href={left_button_href}
    icon={"psychology_alt"}
    label={left_button_label}
    background={""}
    color={""}
  />

  <IconButton
    href={right_button_href}
    icon={"ring_volume"}
    label={right_button_label}
    background={""}
    color={""}
  />
  <SeatsCounter label={seats_counter_label} count={seats_count} />
</div>

<style>
  #hero {
    padding: 40px 60px;
    justify-content: center;
    gap: 30px;
    width: 1000px;
    margin: 0 auto;
  }



  .ctas {
    width: 100%;
    justify-content: center;
    margin-bottom: 190px;
  }

  h1 {
    margin: 0;
  }

  h2 {
    font-weight: 400;
    opacity: .9;
    font-size: var(--font-size-base);
  }

  .hero-image {
    border-radius: 20px;
    box-shadow: var(--bottomshadow);
    height: 220px;
    margin-top: 10px;
    object-fit: cover;
    object-position: 10%;
    width: 280px;
  }

  @media (max-width: 1000px) {
    #hero {
      padding: 20px;
    }
    h1 {
      width: 100%;
    }

    .hero-image {
      height: 270px;
      width: 270px;
    }

    h2 {
      max-width: 100%;
    }
  }

  @media (max-width: 650px) {
    .row {
      flex-direction: column;
    }
    .hero-image {
      border-radius: 20px;
      margin-bottom: 20px;
      width: 100%;
    }
  }
</style>
