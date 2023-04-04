<script>
  //Import UI children
  import FooterWidget from "../ui-items/widgets/FooterWidget.svelte";
  import FooterNotice from "../ui-items/widgets/FooterNotice.svelte";
  import { app_navigation } from "../stores";
</script>

<footer class="row">
  <div class="column1">
    <FooterNotice />
  </div>

  <div class="column2">
    <FooterWidget
      icon={"hub"}
      title={"Learn"}
      links={$app_navigation.learn}
    />
  </div>

  <div class="column3">
    <FooterWidget
      icon={"approval_delegation"}
      title={"Values"}
      links={$app_navigation.values}
    />
  </div>

  <div class="column4">
    <FooterWidget
      icon={"trending_up"}
      title={"Services"}
      links={$app_navigation.services}
    />
  </div>

  <div class="column5">
    <div>
      <p>
        &copy; 2023 Universal Web <span>🇺🇸</span>Carbondale, IL.
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--darkover);
    border-radius: 20px;
    margin-bottom: 30px;
    display: grid;
    gap: 30px;
    grid-template-columns: 0.9fr 0.5fr 0.5fr 0.5fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "column1 column2 column3 column4"
      "column5 column5 column5 column5";
    margin-top: 20px;
    padding: 30px 40px 30px;
  }
  .column1 {
    grid-area: column1;
  }
  .column2 {
    grid-area: column2;
  }
  .column3 {
    grid-area: column3;
  }
  .column4 {
    grid-area: column4;
  }
  .column5 {
    display: flex;
    grid-area: column5;
    height: auto;
    justify-content: center;
    margin-top: -20px;
  }

  .column5 p {
    margin-bottom: 0;
  }
  span {
    font-size: var(--font-size-lg);
    margin: 0 10px;
  }
  p {
    align-items: center;
    display: flex;
  }

  @media(max-width: 1000px){
    footer {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "column1 column1 column1"
        "column2 column3 column4"
        "column5 column5 column5"
      ;
      margin: 30px;
    }
    .column1 {
      text-align: center;
    }

    :global(.col1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    :global(.col1 .head) {
      align-items: center;
    }


    :global(.col1 .head .material-symbols-outlined)  {
      margin: 0 !important;
    }
  }

  @media(max-width: 650px){
    footer {
      display: flex;
      align-items: center;
      padding: 30px;
      margin: 0;
    }
    

    .column2, .column3, .column4, .column5 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    :global(.col1, .col2, .col3, .col4){
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .column5 {
      margin-top: 20px;
    }
  }

</style>
