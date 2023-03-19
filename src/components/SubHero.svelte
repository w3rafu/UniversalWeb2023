<script>
  /**
   * @type {string}
   */
  export let left_column;
  /**
   * @type {string}
   */
  export let right_column;
  /**
   * @type {string}
   */
  export let title_left;
  /**
   * @type {string}
   */
  export let title_right;
  /**
   * @type {string}
   */
  export let bg_img;
</script>

<div class="columns row">
  <div class="col1">
    <h2>{@html title_left}</h2>
    <p>{@html left_column}</p>
  </div>
  <div class="col15">
    <img src={bg_img} alt="Universal Web Space Shuttle" />
  </div>
  <div class="col2">
    <h2>{@html title_right}</h2>
    <p>{@html right_column}</p>
  </div>
</div>

<style>
  .columns {
    gap: 40px;
    padding: 0 15px;
    margin-bottom: 20px;
  }

  .col1 {
    background: linear-gradient(45deg, var(--purple) 50%, #4adfd994);
    padding: 15px 30px 30px;
    border-radius: 30px;
    box-shadow: var(--bottomshadow);
    backdrop-filter: blur(3px);
    text-align: right;
    width: 50%;
    height: max-content;
  }

  .col2 {
    background: linear-gradient(-45deg, var(--purple) 50%, #4adfd994);
    padding: 15px 30px 30px;
    border-radius: 30px;
    box-shadow: var(--bottomshadow);
    backdrop-filter: blur(3px);
    width: 50%;
    height: max-content;
  }
  .col15 {
    max-width: 15px;
  }
  .col15 img {
    position: relative;
    z-index: -1;
    max-width: 300px;
    left: -140px;
    top: -60px;
    filter: drop-shadow(0px 70px 40px rgb(128, 214, 251));
  }
  p {
    z-index: 9;
    opacity: 0.8;
  }
</style>
