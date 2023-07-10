<script></script>


<template>
    <svg class="fusion-big-triangle-candy " xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
        viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:rgb(18 19 21);padding:0;">
        <path d="M0 100 L50 2 L100 100 Z"></path>
    </svg>
    <main>
        <div class="title-section d-flex justify-content-center align-items-center flex-column ">
            <h5>WE HAVE YOU COVERED</h5>
            <h1>Avada Grooming Products</h1>
        </div>

        <section class=" grooming-shop  d-flex justify-content-center mt-5 ">
            <div class="my-card "></div>
            <div class="my-card "></div>
            <div class="my-card "></div>
            <div class="my-card "></div>

        </section>

        <div class="footer-section d-flex justify-content-center my-5">
            <div class="my-btn my-5">
                SHOP OUR PRODUCT RANGE
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;

.my-card {
    height: 450px;
    width: 350px;
    border: 1px dashed black;
}

.grooming-shop {
    gap: 3px;
}

main {
    background-image: url(../assets/img/avadabarbers-reviewsbackground.jpg);
    background-size: cover;
}
</style>