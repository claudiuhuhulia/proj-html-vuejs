<script></script>

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
        <div class="review-section d-flex justify-content-center align-items-center">
            <h5>WE HAVE YOU COVERED</h5>
            <h1>Avada Grooming Products</h1>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

.container {
    position: relative;
}

/* .review-section {
    margin-top: 600px;
} */

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
</style>