<script>

</script>

<template>
    <div class="title-section d-flex justify-content-center align-items-center flex-column mt-5">
        <h5>MENS GROOMING</h5>
        <h1>Services</h1>
    </div>

    <section class="container grooming-services d-flex justify-content-between mt-5 ">
        <div class="my-card"></div>
        <div class="my-card"></div>
        <div class="my-card"></div>
    </section>


    <div class="footer-section d-flex justify-content-center my-5">
        <div class="my-btn my-5">
            READ ABOUT OUR SERVICES
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

.my-card {
    height: 350px;
    width: 350px;
    border: 1px dashed black;
}

.my-btn {
    width: 300px;

}
</style>