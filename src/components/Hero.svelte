<script>
  //Routing tool
  import { goto } from "$app/navigation";

  //UI element -> Icon Button
  import IconButton from "../elements/IconButton.svelte";
  import SeatsCounter from "../ui-items/SeatsCounter.svelte";

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
    <div class="row spread align-center">
      <div class="ctas row">
        <IconButton
          href={left_button_href}
          icon={"psychology_alt"}
          label={left_button_label}
          background={''}
          color={''}
        />

        <IconButton
          href={right_button_href}
          icon={"ring_volume"}
          label={right_button_label}
          background={''}
          color={''}
        />
        <SeatsCounter 
        label={seats_counter_label} 
        count={seats_count} 
      />
      </div>
      <!--Seat counter-->

    </div>
  </div>
</section>

<style>

  #hero {
    padding: 40px 60px 120px;
  }

  h1 {
    margin: 0;
    width: 90%;
  }

  h2 {
    font-weight: 500;

    width: 90%;
    font-size: var(--font-size-md);
  }

  .hero-image {
    border-radius: 30px;
    box-shadow: var(--bottomshadow);
    height: 270px;
    margin-right: 40px;
    margin-top: 5px;
    object-fit: cover;
    object-position: 10%;
    width: 270px;
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
