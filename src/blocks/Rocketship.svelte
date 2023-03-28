<script>
  
  /**
   * @type {string}
   */
  export let bg_img;
  /**
   * @type {string}
   */
  export let text_left;
  /**
   * @type {string}
   */
  export let text_right;
  /**
   * @type {string}
   */
  export let title_left;
  /**
   * @type {string}
   */
  export let title_right;

</script>

<div class="columns row">
<!--Left purple card-->
  <div class="left-column">
    <h2>{@html title_left}</h2>
    <p>{@html text_left}</p>
  </div>

<!--Rocketship-->
  <div class="image-container">
    <img src={bg_img} alt="Universal Web Space Shuttle" />
  </div>
  
<!--Right purple card-->
  <div class="right-colum">
    <h2>{@html title_right}</h2>
    <p>{@html text_right}</p>
  </div>

</div>

<style>
  .columns {
    gap: 30px;
    margin: 60px 0 60px;
    padding: 0 30px;
    justify-content: center;
  }

  .left-column {
    backdrop-filter: blur(3px);
    background: var(--purplegradientright);
    border-radius: 30px;
    box-shadow: var(--bottomshadow);
    height: max-content;
    padding: 30px;
    text-align: right;
    width: 44%;
    margin-top: -100px;
  }
  

  .image-container {
    max-width: 15px;
  }

  .image-container img {
    filter: drop-shadow(0px 70px 40px #ffac53);
    left: -137px;
    max-width: 300px;
    top: -60px;
    position: relative;
    z-index: -1;
  }

  .right-colum {
    backdrop-filter: blur(3px);
    background: var(--purplegradientleft);
    border-radius: 30px;
    box-shadow: var(--bottomshadow);
    height: max-content;
    padding: 30px;
    width: 44%;
    margin-top: 40px;
  }

  p {
    opacity: 0.8;
    z-index: 9;
    margin: 0;
  }

  h2 {
    margin: 0 0 10px;
  }
  
</style>
