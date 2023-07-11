<script></script>

<template>
    <main>
        <div class="title-section d-flex justify-content-center align-items-center flex-column ">
            <h5>TALES FROM THE BARBER SHOP</h5>
            <h1>Recent Blog Posts</h1>
        </div>

        <section class="container grooming-services d-flex justify-content-between mt-5 ">
            <div class="my-card"></div>
            <div class="my-card"></div>
            <div class="my-card"></div>
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

.footer-section {
    padding-bottom: 75px;
}
</style>