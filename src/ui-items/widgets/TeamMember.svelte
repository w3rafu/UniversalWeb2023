<script>
    export let data = {
        name: '',
        bio: '',
        image: '',
        position: ''
    }
</script>

<div class="team-member">
    <img src={data.image} alt=""/>

        <h3>{data.name}</h3>
        <h4>{data.position}</h4>

    <p>{data.bio}</p>
</div>

<style>
    .team-member {
        background: var(--darkover);
        width: 400px;
        padding: 15px 30px 30px;
        border-radius: 20px;
    }

    .team-member img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        position: relative;
        left: 190px;
        top: -70px;
        margin-bottom: -170px;
    }

    h3 {
        margin: 0 0 15px;
        font-size: var(--font-size-lg);
    }
    h4 {
        background: var(--purplegradientright);
        margin: 0;
        padding: 7px 15px;
        border-radius: 30px;
        width: max-content;
    }
    .team-member div {
        display: flex;
        align-items: center;
    }

    @media(max-width: 1000px){
        .team-member {
            width: 100%;
        }
        .team-member img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        position: relative;
        left: 180px;
        top: -70px;
        margin-bottom: -170px;
    }
    }
</style>