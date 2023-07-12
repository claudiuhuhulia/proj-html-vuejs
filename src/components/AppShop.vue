<script>
export default {
    props: {
        products: Object
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
    <svg class="fusion-big-triangle-candy " xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
        viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:rgb(18 19 21);padding:0;">
        <path d="M0 100 L50 2 L100 100 Z"></path>
    </svg>
    <main>
        <div class="title-section d-flex justify-content-center align-items-center flex-column pt-5">
            <h5>WE HAVE YOU COVERED</h5>
            <h1>Avada Grooming Products</h1>
        </div>

        <section class="products-shop  d-flex justify-content-center align-items-center ">
            <div v-for="product in products" :id="product.id"
                class="my-card  d-flex justify-content-center align-items-center flex-column">
                <img :src="imgUrl(product.img)" alt="product">
                <h5>{{ product.name }}</h5>
                <p class="text-center">{{ product.price }}</p>

            </div>


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


img {
    height: 115%;
}

.products-shop {
    gap: 3px;
    margin-top: 120px;
}

.my-card {
    p {
        font-size: 1.4rem;
        color: #be9359;
    }

    h5 {
        padding: 0;
    }
}


main {
    background-image: url(../assets/img/avadabarbers-reviewsbackground.jpg);
    background-size: cover;
    height: 1000px;
}
</style>