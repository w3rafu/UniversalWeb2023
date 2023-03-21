<script>
  //Import UI children
  import FooterWidget from "../ui-items/FooterWidget.svelte";
  import FooterNotice from "../ui-items/FooterNotice.svelte";
</script>

<footer class="row">
  <div class="column1">
    <FooterNotice />
  </div>

  <div class="column2">
    <FooterWidget
      icon={"hub"}
      title={"Learn"}
      links={[
        ["/", "About us"],
        ["/", "Articles"],
        ["/", "Knowledge Base"],
        ["/", "Contact Us"],
      ]}
    />
  </div>

  <div class="column3">
    <FooterWidget
      icon={"approval_delegation"}
      title={"Values"}
      links={[
        ["/", "Ethical Statement"],
        ["/", "Join our Team"],
        ["/", "Privacy Policy"],
        ["/", "Terms and Conditions"],
      ]}
    />
  </div>

  <div class="column4">
    <FooterWidget
      icon={"trending_up"}
      title={"Services"}
      links={[
        ["/", "Lease a Website"],
        ["/", "Search Engine Optimization"],
        ["/", "Accessibility Compliance"],
        ["/", "Cybersecurity Audit"],
      ]}
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
    box-shadow: var(--bottomshadow);
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
    margin-top: -40px;
  }
  span {
    font-size: var(--font-size-lg);
    margin: 0 10px;
  }
  p {
    align-items: center;
    display: flex;
  }
</style>
