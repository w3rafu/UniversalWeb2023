<script>
  import Hero from "../components/Hero.svelte";
  import PreFooter from "../blocks/PreFooter.svelte";
  import ReasonsList from "../blocks/ReasonsList.svelte";
  import Rocketship from "../blocks/Rocketship.svelte";
  import AboutUs from "../blocks/AboutUs.svelte";
  import TheTeam from "../blocks/TheTeam.svelte";
</script>

<Hero
  data={{
    title: `Online Presence <br/>for Starting Businesses <span class="no-break">in a Simple, 
    Truthful Way</span>`,
    subtitle: `<span style="font-weight: 700;">For 5 dollars a day</span>, 
    <span style="font-weight: 400;">lease the website and marketing support you need to 
    establish a professional digital presence. No contracts, no ties.</span>`,
    left_button_label: "Who are you?",
    right_button_label: "Lets Talk",
    left_button_href: "/about-us",
    right_button_href: "/contact-us",
    seats_counter_label: "Seats Left:",
    seats_count: 19,
  }}
/>

<Rocketship
  bg_img={"ssh.webp"}
  title_left={"We know the challenges of <br class='hide-mobile'/>starting and maintaining"}
  title_right={"The best part?<br /> You can cancel anytime"}
  text_left={`Our mission is to reduce risks and
    unnecessary spending as you grow. 
    We take over the technological and marketing management burden,so you
    can invest in your value.`}
  text_right={`
    Our affordable website leasing options give you the flexiblity to 
    walk away if you are not happy with the results. We
    provide honest expertise with no hidden intentions or ties.`}
/>

<ReasonsList
  title_one={"Spending thousands in a website is a risky investment"}
  info_one={`
    It is common to think that as you are paying big money, your success is guaranteed. 
    But that's a falacy in the web industry. Many companies and individuals are not truthful about the costs of *developing*,
    and the return of investment of a new website.
    <br /> <br />
    <strong>Optimizing and ranking an online business takes dedication, insight, and craftsmanship. It is not a transaction.</strong>
    `}
  title_two={"Maintaining a competitive website takes effort"}
  info_two={`
    Nowadays, you can make websites for free. Artifical Intelligence can create and automate marketing campaigns. 
    Many popular platforms offer boxed landing  pages that look great. 
    Yet, there's a reason why companies pay millions to appear first in search engines. 
    It takes technical <strong>KNOWLEDGE</strong>, market <strong>RESEARCH</strong>  and code <strong>QUALITY</strong> to become visible. 
    This is not something generic that you can buy. 
    <br /><br />
    <strong>With us, you're leveraging everything 
    it takes to have a meaningful online website authority.</strong>
  `}
  title_three={"You get expertise, support and extra perks!"}
  info_three={`
    Optimized websites for a fraction of the cost of building and maintaining one yourself is great. 
    But you need more than that to thrive.
    Every month, you accumulate “creative tickets” that you can submit to request help with your ideas.
    From researching your competitors. 
    Posting on social media. Creating digital art or video, to designing a complex advertisement campaign.
    <br /> <br /> 
    After every successful payment, you accumulate 4 tickets that you can spend in yourself.
    For instance, creating a social media post would cost you 1 ticket. 
    A small website change 2 tickets. A blog post, 3 tickets.
    Not enough tickets? Buy more for great price.
    Our goal is to foster a positive business relationship.
  `}
/>

<AboutUs />

<TheTeam />
<PreFooter />

<div class="row align-center">
  <p>
    &copy; 2023 Universal Web <span>🇺🇸</span>&nbsp; Carbondale, IL.
  </p>
  <small>
    We recognize and value the unique strengths and perspectives that
    individuals with disabilities and diverse backgrounds have to offer.<br />
    We are passionate about empowering others into achieving their goals an
    making techonolgy accessible for everyone.
  </small>
</div>

<style>


  .row {justify-content: center; flex-direction: column; margin-bottom: 30px;}
  p {
    font-size: var(--font-size-md);
  }
  small {
    text-align: center;
    width: 70%;
  }



  small {
    width: 100%;
  }
</style>