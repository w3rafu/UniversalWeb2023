<script>
  import IconButton from "../ui-items/elements/IconButton.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    let images = document.querySelectorAll(".roundedimg");
    images.forEach((image) => {
      image.addEventListener("mouseover", (event) => {
        images.forEach((img) => {
          if (event.target !== img) {
            // @ts-ignore
            img.style.opacity = "0.3";
          }
        });
      });
      image.addEventListener("mouseleave", (event) => {
        images.forEach((img) => {
          if (event.target !== img) {
            // @ts-ignore
            img.style.opacity = "1";
          }
        });
      });
    });
  });
</script>

<section id="advertising" class="row">
  <!--Images-->
  <div class="pics">
    <img
      src="guy-pink.webp"
      alt="Person full of tasks"
      class="pink roundedimg"
    />
    <img src="guy-surpise.webp" alt="Person surprised" class="roundedimg" />
    <img src="girl-purple.webp" alt="Person analyzing" class="roundedimg" />
    <img src="girl-blue.webp" alt="Person being goofy" class="roundedimg" />
  </div>

  <!--Headlines-->
  <div class="text">
    <h2>Establish a strong online presence</h2>
    <h2 class="glow">Without risky costs and management burden</h2>
    <h2>Keeping flexibility and control over your next step</h2>
  </div>

  <IconButton
    icon={"ring_volume"}
    label={"Lets Talk"}
    href={"/"}
    background={""}
    color={'"white"'}
  />
</section>

<style>
  #advertising {
    margin: 20px auto 100px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  .glow {
    font-weight: 700 !important;
    text-shadow: 0 0 30px #4adfd994;
  }

  h2 {
    font-size: var(--font-size-lg);
    font-weight: 400;
    letter-spacing: 0.03em;
    margin: 7px 0;
  }

  div img {
    border-radius: 50%;
    object-fit: cover;
    width: 200px;
    height: 200px;
    margin: 30px 0 10px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 30px;
  }

  .pics {
    display: flex;
    flex-wrap: wrap;
    filter: drop-shadow(20px 0 20px rgba(0, 0, 0, 0.5));
    justify-content: space-evenly;
  }

  .pics {
    margin: 0 auto 20px;
    width: 90%;
  }

  .pink {
    object-position: 20% !important;
  }

  .roundedimg {
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    transition: opacity 0.3s ease-in-out;
  }

  .roundedimg:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
  }

  @media (max-width: 1000px) {
    div img {
      width: 140px;
      height: 140px;
      margin: 10px;
    }
    .pics {
      margin: 0 0 30px;
    }
  }

  @media (max-width: 650px) {
    div img {
      width: 120px;
      height: 120px;
      margin: 10px;
    }

    #advertising {
      margin-top: 40px;
      margin-bottom: 60px;
     }
  }
</style>
