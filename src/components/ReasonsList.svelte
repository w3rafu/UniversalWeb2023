<script>
  /**
   * @type {string}
   */
  export let title_one;
  /**
   * @type {string}
   */
  export let info_one;
  /**
   * @type {string}
   */
  export let title_two;
  /**
   * @type {string}
   */
  export let info_two;
  /**
   * @type {string}
   */
  export let title_three;

  /**
   * @type {string}
   */
  export let info_three;
</script>

<div class="list">
  <h2>3 Reasons to work with us:</h2>

  <details>
    <summary> <h3>1. {title_one}</h3></summary>
    <p>{@html info_one}</p>
  </details>

  <details>
    <summary> <h3>2. {title_two}</h3> </summary>
    <p>{@html info_two}</p>
  </details>

  <div>
    <details>
      <summary>
    <h3>3.{title_three}</h3>
      </summary>
      <p>{@html info_three}</p>
    </details>
  </div>
</div>

<style>
  .list {
    padding: 30px;
  }

  details {
    cursor: pointer;
    background-color: aliceblue;
    color: black;
    border: transparent;
    margin-bottom: 20px;
    padding: 15px;
  }

  h3 {
    margin: 0;
    padding: 0;
    display: inline;
  }
</style>
