<script>
  import Hero from "../components/Hero.svelte";
  import PreFooter from "../components/PreFooter.svelte";
  import ReasonsList from "../components/ReasonsList.svelte";
  import Rocketship from "../blocks/Rocketship.svelte";
</script>

<Hero
  title={`Online Presence for Small Businesses<br /> in a Simple, <span class="no-break">Truthful Way</span>`}
  subtitle={`<span style="font-weight: 700;">For 5 dollars a day</span>, <span style="font-weight: 400;">lease the website and marketing support you need to 
  establish a professional digital presence.</span>`}
  left_button_label={"Do I Qualify?"}
  left_button_href={"/lease-a-website"}
  right_button_label={"Lets Talk"}
  right_button_href={"/contact-us"}
  seats_counter_label={"Seats Left:"}
  seats_count={10}
/>
<Rocketship
  bg_img={"ssh.webp"}
  title_left={"We know the challenges of starting and maintaining an organization"}
  title_right={"The best part?<br /> You can cancel anytime"}
  text_left={`Our mission is to reduce risks and
    unnecessary spending as your organization grows. 
    We take over the technological and marketing management burden, so you
    can invest in your value.`}
  text_right={`
   Contact us today to learn more about our
    affordable website leasing options and take the first step towards
    establishing a strong online presence. We
    provide honest expertise with no ties.`}
/>


<ReasonsList
  title_one={"Spending thousands in a website is a risky investment."}
  info_one={`
    It is common to think that as you are paying big money, your success is guaranteed. 
    But that's a falacy. Many companies and individuals are not truthful about the cost and possible 
    return of your  investment. Some are taxing your ignorance and trying to survive in a flooded industry.
    <br /> <br />
    <strong>Optimizing an online business takes dedication, insight, and craftsmanship. It is not a transaction.</strong>
    `}
  title_two={"Maintaining a competitive website takes a lot of effort."}
  info_two={`
    Nowadays, you can make websites for free. AI can automate full-blown marketing campaigns. 
    Many popular platforms offer boxed landing  pages that look great. 
    Yet, there's a reason why companies pay millions to appear first in search engines. 
    It takes technical <strong>KNOWLEDGE</strong>, market <strong>RESEARCH</strong>  and code <strong>QUALITY</strong> to become visible. 
    This is not something generic that you can buy. 
    <br /><br />
    <strong>At Universal Web you are leveraging everything 
    it takes to have a meaningful online authority.</strong>
  `}
  title_three={"You get expertise, support and extra perks!"}
  info_three={`
    Optimized websites for a fraction of the cost of building and maintaining one yourself is great. 
    But you need more than that to thrive.
    Every month, you accumulate “creative tickets” that you can submit to request help with your ideas.
    From researching your competitors. 
    Posting on social media. Creating digital art or video, to designing a complex advertising campaign.
    <br /> <br /> 
    After every successful payment, you accumulate 4 tickets that you can spend in yourself.
    For instance, creating a social media post would cost you 1 ticket. 
    A small website change 2 tickets. A blog post, 3 tickets.
    Not enough tickets? Buy more for great price.
    Our goal is to foster a positive business relationship.
  `}
/>

<PreFooter />
