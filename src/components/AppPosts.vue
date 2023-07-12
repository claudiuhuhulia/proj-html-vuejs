<script>
export default {
    props: {
        posts: Object
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
    <main>
        <div class="title-section d-flex justify-content-center align-items-center flex-column ">
            <h5>TALES FROM THE BARBER SHOP</h5>
            <h1>Recent Blog Posts</h1>
        </div>

        <section class="posts-section container d-flex justify-content-between  ">
            <div v-for="post in posts" :id="post.id"
                class="my-card d-flex flex-column justify-content-center align-items-center">

                <img :src="imgUrl(post.img)" alt="post">
                <h5 class="text-center fw-bold">{{ post.title }}</h5>
                <p class="text-center">{{ post.text }}</p>

            </div>

        </section>


        <div class="footer-section d-flex justify-content-center py-5">
            <div class="my-btn my-5">
                READ MORE FROM OUR BLOG
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

main {
    background-color: #f5f5f5;
}

.title-section {
    padding-top: 100px;
}

.my-btn {
    width: 350px;
}

img {
    height: 70%;
}

.posts-section {
    margin-top: 100px;
}

.footer-section {
    padding-bottom: 75px;
}
</style>