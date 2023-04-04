<script>
  import TeamMember from "../ui-items/widgets/TeamMember.svelte";
</script>

<div class="row align-center">
    <TeamMember
    data={{
      name: "Sarah",
      bio: `is an economics nerd and a nurse educator with a passion for numbers, world culture and puzzles. 
      A natural empath and critical thinker, she finds fulfillment in accomplishing goals. 
      She loves being able to help people understand the world around them and finding ways to make their lives better.
       She enjoys learning creative solutions to problems, and traveling the world.`,
      image: "...",
      position: 'CEO'
    }}
  />
  <TeamMember
    data={{
      name: "Rafael",
      bio: `has over a decade of experience in digital marketing and programming. 
      He is passionate about making technology accessible for everyone, 
      believing that it should be a level playing field regardless of ability or socio-economic status. 
      He loves nature and is very enthusiastic about finding ways to improve the quality of life for all people.`,
      position: 'Web Specialist',
      image: "...",
    }}
  />
  <TeamMember
  data={{
    name: "David",
    bio: `Is a visual artist and producer with great ability to think out of the box and add quality, 
    detail and meaning to his creations. He's passionate about visual arts and cultivating friendships around the world.
     His work is highly detailed and often has hidden depths of meaning that resonate with viewers on a deep level. 
   `,
    image: "...",
    position: 'Graphic Artist'
  }}
/>
<TeamMember
data={{
  name: "Thelma",
  bio: `is a grad-student with a passion for social media and digital marketing. 
  She is always up to date with new cultural trends and is always in the look for new information to 
  incorporate into her skillset. 
  She is a critical thinker who brings new fresh ideas to the table and is always willing to experiment with new things.

`,
  image: "...",
  position: 'Social Media'
}}
/>
</div>

<style>
  .row {
    margin-bottom: 50px;
    flex-wrap: wrap;
    gap: 30px;
  }
</style>
