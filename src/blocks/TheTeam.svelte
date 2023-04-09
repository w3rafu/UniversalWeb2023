<!-- @format -->
<script>
  import FooterNotice from "../ui-items/widgets/FooterNotice.svelte";
import TeamMember from "../ui-items/widgets/TeamMember.svelte";
</script>
<section id="the-team">
  <div class="col1">


    <img src="earth.webp" alt="" />


    <h2>Universal Web Team</h2>
    <p>  We are your creative companions, providing you with insights on the path to growth. Accompanied by
      the tools, marketing resources, and talent you need to succeed.</p>


  </div>
  <div class="col2">
    <TeamMember
      data={{
        name: "Sarah 🇺🇸",
        bio: `is an economics nerd and a nurse educator with a passion for numbers, world culture and puzzles. 
          A natural empath and critical thinker, she finds fulfillment in accomplishing goals. 
          She loves being able to help people understand the world around them and finding ways to make their lives better.`,
        image: "sarah.webp",
        position: "CEO",
      }}
    />

    <TeamMember
      data={{
        name: "Sofia 🇩🇪",
        bio: `is a communication specialist from Germany. 
        She has always been fascinated by the way people communicate and express themselves through fashion, art, and other forms of creative expression. Sofia has a keen eye for detail and an innate sense of style, which has helped her develop a reputation for having great taste.
        `,
        image: "sofia.webp",
        position: "Marketing",
      }}
    />

    <TeamMember
      data={{
        name: "Rafael 🇺🇸",
        bio: `has over a decade of experience in digital marketing and programming. 
          He is passionate about making technology accessible for everyone, 
          believing that it should be a level playing field regardless of ability or socio-economic status. 
          He loves nature and is very enthusiastic about finding ways to improve the self.`,
        position: "Web Specialist",
        image: "rafa23.webp",
      }}
    />
    <TeamMember
      data={{
        name: "David 🇨🇺",
        bio: `is a visual artist and producer with great ability to think out of the box and add quality, 
        detail and meaning to his creations. He's passionate about visual arts and cultivating friendships around the world.
         His work is highly detailed and often has hidden depths of meaning that resonate with viewers on a deep level. 
       `,
        image: "david.webp",
        position: "Graphics",
      }}
    />

  </div>
</section>
<style>
  section {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-areas: "col1 col2";
    padding: 30px 60px;
    margin: 100px auto ;
    gap: 40px
  }
  .col1 img {
    width: 100%;
  }

  h2 {
    font-size: var(--font-size-xl);
    text-align: center;
    margin-bottom: 20px;
  }
  .col1 {
    grid-area: col1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .col2 {
    grid-area: col2;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media(max-width: 1000px){
    section {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
    .col1 {
      margin-bottom: 30px;
    }

    .col1 img {
      max-width: 80%;
    }

    h2 {
      margin: 0;
    }
  }
</style>
