<script>
    export let data = {
        name: '',
        bio: '',
        image: '',
        position: ''
    }
</script>

<div class="team-member">
    <img src="" alt=""/>
    <div>
        <h3>{data.name}</h3>
        <h4>{data.position}</h4>
    </div>
    <p>{data.bio}</p>
</div>

<style>
    .team-member {
        background: var(--darkover);
        width: 48%;
        padding: 15px 30px;
        border-radius: 20px;
    }

    h3 {
        margin: 0;
        font-size: var(--font-size-lg);
    }
    h4 {
        background: var(--purplegradientright);
        margin: 0 0 0 15px;
        padding: 7px 15px;
        border-radius: 30px;
    }
    .team-member div {
        display: flex;
        align-items: center;
    }

    @media(max-width: 1000px){
        .team-member {
            width: 100%;
        }
    }
</style>