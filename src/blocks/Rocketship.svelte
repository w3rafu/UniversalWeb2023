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
  <div class="right-column">
    <h2>{@html title_right}</h2>
    <p>{@html text_right}</p>
  </div>

</div>

<style>
  .columns {
    gap: 60px;
    margin: 60px 0 60px;
    padding: 0 30px;
    justify-content: center;
  }

  .left-column {
    backdrop-filter: blur(3px);
    background: var(--purplegradientright);
    border-radius: 30px;

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
    z-index: 7;
  }

  .right-column {
    backdrop-filter: blur(3px);
    background: var(--purplegradientleft);
    border-radius: 30px;

    height: max-content;
    padding: 30px;
    width: 44%;
    margin-top: 60px;

  }

  p {
    opacity: 0.8;
    z-index: 9;
    margin: 0;
  }

  h2 {
    margin: 0 0 10px;
  }

  @media(max-width: 1000px){
    .columns {
      gap: 0;
      margin: 60px 30px;
      padding: 0;
    }
    .left-column, .right-column {
      width: 60%;
    }
    .right-column {
      margin-left: auto;
      margin-top: -200px;
      z-index: 10;
    }

    .image-container img {

      margin: -40px 0 0;
      z-index: 99;
      top: -200px;
      right: 0;
      left: 500px;
    }
  }

  @media(max-width: 780px){
    .image-container img {


left: 400px;
}
  }

  @media(max-width: 650px){
    .left-column, .right-column {
      margin-top: 0;
      width: 100%;
      text-align: center;
    }
    .image-container {
      display: flex;

      justify-content: center;
      max-width: 100%;
    }
    .image-container img {
      position: inherit;
      margin: -40px 0 0;
    }
  }
  
</style>
