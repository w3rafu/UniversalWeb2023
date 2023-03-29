<script>
  //UI element -> Icon Button
  import IconButton from "../ui-items/elements/IconButton.svelte";
  import SeatsCounter from "../ui-items/widgets/SeatsCounter.svelte";

  //Hero data
  export let data = {
    title: ``,
    subtitle: "",
    left_button_label: "",
    right_button_label: "",
    left_button_href: "",
    right_button_href: "",
    seats_count: 0,
    seats_counter_label: "",
  };
</script>

<section id="hero" class="row">
  <!--Hero image-->
  <div class="images">
    <img src="girl-smiling.webp" alt="creative person" class="hero-image" />
  </div>

  <div id="hero-content">
    <!--Hero headings-->
    <h1>{@html data.title}</h1>
    <h2>{@html data.subtitle}</h2>

    <!--Seat counter-->
  </div>
</section>
<div class="ctas row align-center">
  <IconButton
    href={data.left_button_href}
    icon={"psychology_alt"}
    label={data.left_button_label}
    background={"white"}
    color={""}
  />

  <IconButton
    href={data.right_button_href}
    icon={"ring_volume"}
    label={data.right_button_label}
    background={""}
    color={""}
  />
  <SeatsCounter label={data.seats_counter_label} count={data.seats_count} />
</div>

<style>
  #hero {
    padding: 40px 60px;
    justify-content: center;
    gap: 30px;
    width: 1000px;
    margin: 0 auto;
  }

  .ctas {
    width: 100%;
    justify-content: center;
    margin-bottom: 190px;
  }

  h1 {
    margin: 0;
  }

  h2 {
    font-weight: 400;
    opacity: 0.9;
    font-size: var(--font-size-base);
    line-height: 1.6;
  }

  .hero-image {
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    box-shadow: 0 0 130px rgba(165, 239, 251, 0.639);
    height: 260px;
    margin-top: 10px;
    object-fit: cover;
    object-position: 10%;
    width: 260px;
    animation: morph 10s linear infinite alternate-reverse;
  }

  @keyframes morph {
    0% {
      border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    }

    25% {
      border-radius: 19% 81% 28% 72% / 76% 60% 40% 24%;
      box-shadow: 0 0 200px white;
    }

    50% {
      border-radius: 68% 32% 14% 86% / 48% 80% 20% 52%;
      box-shadow: 0 0 130px var(--link);
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      box-shadow: 0 0 180px rgba(193, 142, 250, 0.438);
    }
  }

  @media (max-width: 1000px) {
    #hero {
      align-items: center;
      display: grid;
      grid-template-columns: 0.5fr 3fr;
      padding: 20px;
      width: auto;
    }
    .ctas {
      align-items: center;
      flex-direction: row;
      width: 100%;
    }

    h1 {
      width: 100%;
    }

    .hero-image {
      height: 240px;
      width: 240px;
    }

    h2 {
      max-width: 100%;
    }
  }

  @media (max-width: 650px) {
    .hero-image {
      width: 80%;
      height: 300px;
      margin: 30px auto 20px;
    }

    .images {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #hero {
      display: flex;
      flex-direction: column;
    }

    #hero-content {
      display: flex;
      flex-direction: column;

      text-align: center;
    }
    .row {
      flex-direction: column;
    }

    .ctas {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      padding: 0 10px;
      margin-bottom: 0;
    }
  }
</style>
