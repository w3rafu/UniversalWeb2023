<script>
  /**
   * @type {string}
   */
  export let left_column;
  /**
   * @type {string}
   */
  export let right_column;
</script>

<div class="columns row">
  <div class="col1">
    <p>{@html left_column}</p>
  </div>
  <div class="col2">
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
    background: linear-gradient(45deg,var(--purple) 50%,#4adfd994);
    padding: 15px 30px;
    border-radius: 30px;
    box-shadow: var(--bottomshadow);
    backdrop-filter: blur(3px);
  }

  .col2 {
    background: linear-gradient(-45deg,var(--purple) 50%,#4adfd994);
    padding: 15px 30px;
    border-radius: 30px;
    box-shadow: var(--bottomshadow);
    backdrop-filter: blur(3px);
  }

</style>
