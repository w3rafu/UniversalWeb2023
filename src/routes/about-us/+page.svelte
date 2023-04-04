<script>
    import TheTeam from "../../blocks/TheTeam.svelte";
</script>

<h1 class="title">About Us</h1>

<section>
    <h2>
        In today's economy, having a strong online presence is crucial.<br /> But we
        understand that you may not have the time, skills, expertise, resources, or
        clarity to handle everything yourself. 
    </h2>
  <p>That's where Universal Web comes in.
    As a family-owned agency, we approach our work with purpose and care. We're
    not a transactional business - we're your consultants and partners on the
    journey to success.
  </p>

  <p>
    We provide honest advice without any hidden agendas, money-bleeding schemes,
    or generic marketing perspectives. For a fraction of the cost and with no
    contractual ties, we help you get started with a powerful website and
    continued marketing support that will drive leads and sales. And if things
    don't work out, you can walk away without losing thousands of dollars.
  </p>

  <p>
    At Universal Web, we know that results aren't always easy to come by. That's
    why our experience helps to decrease your risks and increase your
    possibilities. You get personalized insights 24/7, simply by picking up the
    phone.
  </p>

  <p>
    We are your creative companions, providing you with insights on the path to growth. Accompanied by
     the tools, marketing resources, and talent you need to succeed.
    <br /><br /><strong>You're always in control, and we've got your back!</strong>
  </p>

  <h3 class="cta">
    Contact us to learn more about tailoring our services to your
    needs. <br />Starting at just $5 a day, with no contracts, we offer beyond money value.
  </h3>
</section>

<h2 class="title">The Team</h2>
<TheTeam />


<style>
    section{
        border-radius: 20px;
        padding: 0 30px;
        text-align: center;
        width: 90%;
        margin: 0 auto 80px;
    }

    .cta {
        background: var(--purplegradientright);
        padding: 30px;
        border-radius: 30px;
    }

    .title {
        font-size: var(--font-size-xl);
        text-align: center;
    }

    @media(max-width: 1000px){
        section {
            padding: 0;
            width: 100%;
        }
    }
</style>