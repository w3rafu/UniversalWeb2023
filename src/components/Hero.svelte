<script>
  import { goto } from "$app/navigation";
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
  export let left_button;
  /**
   * @type {string}
   */
  export let right_button;
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

<div id="hero">
  <div class="row wrapper" >
    <div class="images">
      <img src="girl-smiling.webp" alt="creative person" class="pink" />
    </div>
    <div>
      <h1>{@html title}</h1>
      <h2>{@html subtitle}</h2>
      <div class="row spread align-center">
        <div class="ctas">
          <button
            class="first"
            on:click={() => {
              goto(`${left_button_href}`);
            }}
            ><span class="material-symbols-outlined"> psychology_alt </span>
            {left_button}</button
          >
          <button
            on:click={() => {
              goto(`${right_button_href}`);
            }}
            ><span class="material-symbols-outlined">
              ring_volume
            </span>{right_button}</button
          >
        </div>
        <div class="seats-counter row align-center">
          <div class="counter-led" />
          <span
            >{seats_counter_label}&nbsp;&nbsp;<span class="number"
              >{seats_count}</span
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>

    .wrapper {
        display: flex;
        flex-direction: row;
    }

  #hero {
    padding: 60px 15px 80px;

  }

  .number {
    font-weight: 800;
  }

  .ctas {
    display: flex;
  }

  .ctas button {
    margin-right: 15px;
    box-shadow: var(--bottomshadow);
  }
  .seats-counter {
    color: white;
    border: 3px solid var(--link);
    box-shadow: var(--bottomshadow);
    background-color: var(--darkover);
    width: max-content;
    padding: 15px;
    border-radius: 15px;
    font-family: "Red Hat Display";
    font-weight: 500;
    letter-spacing: 0.03em;
    margin-right: 10px;
    backdrop-filter: blur(10px);
  }
  .counter-led {
    width: 20px;
    height: 20px;
    background: var(--green);
    margin-right: 10px;
    border-radius: 50px;
  }

  h1 {
    margin: 0;
    width: 90%;
  }

  h2 {
    font-weight: 500;
    opacity: 0.9;
    width: 90%;
  }

  .pink {
    width: 280px;
    border-radius: 20px;
    object-fit: cover;
    height: 280px;
    object-position: 10%;
    margin-right: 30px;
    margin-top: 0;
    box-shadow: var(--bottomshadow);
  }

  button {
    align-items: center;
    display: flex;
  }

  button .material-symbols-outlined {

    margin-right: 10px;
  }

  @media (max-width: 1000px) {
    #hero {
      padding: 20px;
    }
    h1{
        width: 100%;
    }

    .pink {
        width: 270px;
        height: 270px;
    
    }
    .columns {
      padding: 30px 20px;
    }
  
    .seats-counter {
      flex-direction: row !important;
    }
    h2 {
      max-width: 100%;
    }
  }

  @media (max-width: 650px) {
.wrapper {
    flex-direction: column;
}
.pink {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 20px;
}
  }
</style>
