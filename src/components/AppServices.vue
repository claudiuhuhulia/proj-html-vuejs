<script>
export default {
    props: {
        services: Object
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
    <div class="title-section d-flex justify-content-center align-items-center flex-column my-5 pt-5">
        <h5>MENS GROOMING</h5>
        <h1>Services</h1>
    </div>

    <section class="container grooming-services d-flex justify-content-between mt-5 ">
        <div v-for="service in services" :id="service.id"
            class="my-card d-flex flex-column justify-content-center align-items-center">
            <img :src="imgUrl(service.img)" alt="service">
            <h5>{{ service.title }}</h5>
            <p class="text-center">{{ service.text }}</p>
        </div>

    </section>

    <div class="footer-section d-flex justify-content-center mb-5">
        <div class="my-btn my-5">
            READ ABOUT OUR SERVICES
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

p {
    font-size: 1.2rem;
    color: grey;
}

.my-card {

    p,
    h5,
    img {
        padding-bottom: 25px;
    }

    h5 {
        font-family: abril-fatface;
        font-size: 2rem;
        font-weight: bold;
    }

    p {
        line-height: 35px;
    }
}



img {
    height: 40%;
}

.my-btn {
    width: 300px;
}
</style>