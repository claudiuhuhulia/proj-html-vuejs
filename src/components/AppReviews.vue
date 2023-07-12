<script>
export default {
    props: {
        reviews: Object
    },

    methods: {
        imgUrl(img) {
            const url = new URL(`../assets/img/${img}`, import.meta.url);
            return url.href
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="advertising d-flex mx-5">
            <img src="../assets/img/shaving_butter.png" alt="shaving">
            <div class="advertising-text p-5">
                <h5>THIS MONTHS FEATURED PRODUCT</h5>
                <h1>Shaving Butter</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quidem? Perferendis, illum soluta
                    laudantium unde labore cumque culpa ipsum ut optio temporibus nam sit nemo perspiciatis fuga ullam odio
                    recusandae.</p>
                <div class="my-btn mt-4">
                    BUY NOW
                </div>
            </div>
        </div>
        <div class="review-title d-flex justify-content-end align-items-center flex-column">
            <h5>WHAT PEOPLE SAY</h5>
            <h1>Reviews</h1>
        </div>
        <section class="review-section  d-flex justify-content-between my-5 ">
            <div v-for="review in reviews" :id="review.id"
                class="my-card d-flex flex-column justify-content-center align-items-center">
                <p class="text-center px-4">{{ review.text }}</p>
                <figure>
                    <img :src="imgUrl(review.img)" alt="profile">
                </figure>
                <h5>{{ review.name }}</h5>

            </div>


        </section>

    </div>
    <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
        viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:rgb(255, 255, 255);padding:0;">
        <path d="M0 100 L50 2 L100 100 Z"></path>
    </svg>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

.container {
    position: relative;
    height: 600px;
}

.review-title {
    height: 550px;
}

.advertising {
    border-top: 4px solid #be9359;
    position: absolute;
    top: -70px;


    img {
        height: 400px;
        background-image: url(../assets/img/avadabarbers-cta-background.jpg);
        background-size: cover;
    }
}

p {
    color: grey;

}

.advertising-text {
    background-color: #121413;
}

.my-btn {
    width: 200px;

}

.review-section {
    p {
        padding: 0;
    }

    h5 {
        font-size: 1.2rem;
        font-style: italic;
        font-family: Arial, Helvetica, sans-serif;
    }

    figure {
        height: 150px;
        width: 150px;

        img {
            object-fit: cover;
            height: 100%;
            border-radius: 50%;
            display: block;
            padding: 0;
        }
    }

}

.fusion-big-triangle-candy {
    rotate: 0.5turn;
    background-color: #f5f5f5;
    margin-top: 500px;
}
</style>