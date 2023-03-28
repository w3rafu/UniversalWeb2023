<script>
  /**
   * @type {string}
   */
  export let icon;
  /**
   * @type {string}
   */
  export let title;
  /**
   * @type {any}
   */
  export let links;
</script>

<div class="col2">
  <h2>
    <span class="material-symbols-outlined">
      {icon}
    </span>
    {title}
  </h2>
  <hr />
  <nav>
    <ul>
      {#each links as link}
        <li>
          <a href={link[0]}>{link[1]}</a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  nav {
    display: flex;
  }

  ul {
    padding-left: 0;
    list-style: none;
    line-height: 1.7;
  }

  li {
    margin-bottom: 15px;
  }
  h2 {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  hr {
    opacity: 0.1;
  }

  .material-symbols-outlined {
    font-size: var(--font-size-xl);
    margin-right: 10px;
    text-shadow: 0 0 15px #ffffff80;
  }

  nav li a,
  nav a {
    color: var(--link);
    font-size: var(--font-size-base);
    opacity: 0.8;
  }


</style>
