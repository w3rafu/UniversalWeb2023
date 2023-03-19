<script>
  import FooterWidget from "../ui-items/FooterWidget.svelte";
  import FooterNotice from "../ui-items/FooterNotice.svelte";
</script>

<footer class="row">
  <div class="area1">
    <FooterNotice />
  </div>
  <div class="area2">
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
  <div class="area3">
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
  <div class="area4">
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
  
  <div class="area5">

    <div>
        <p>
            &copy; 2023 Universal Web <span>🇺🇸</span>Carbondale, IL. 
          </p>
    </div>
   
  </div>
</footer>

<style>
  footer {
    display: grid;
    grid-template-columns: 0.9fr 0.5fr 0.5fr 0.5fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: 'area1 area2 area3 area4'
    'area5 area5 area5 area5';
    background-color: var(--darkover);
    padding: 30px 40px 30px;
    gap: 30px;
    border-radius: 20px;
    margin-top: 40px;
    box-shadow: var(--bottomshadow);
  }

  .area1{grid-area:area1;}
  .area2{grid-area:area2;}
  .area3{grid-area:area3;}
  .area4{grid-area:area4;}
  .area5{grid-area:area5; height: auto; margin-top: -40px; display: flex; justify-content: center;}
span {
    font-size: var(--font-size-lg);
    margin: 0 10px
}
p {
    display: flex;
    align-items: center;
}
</style>
