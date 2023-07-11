<script>
export default {
    emits: ['close-clicked']
}

</script>
 

<template>
    <div class="overlay-nav d-flex flex-column align-items-center justify-content-center">

        <font-awesome-icon icon="fa-solid fa-rectangle-xmark" class="close-btn" @click="$emit('close-clicked')" />


        <a href="#" id="home">Home</a>
        <a href="#" id="aboutus">About Us</a>
        <a href="#">Serices</a>
        <a href="#">Shop</a>
        <a href="#">Our Team</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>

    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

.overlay-nav {
    position: fixed;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
}

a {
    text-decoration: none;
    color: white;
    font-size: 1.7rem;
    padding-bottom: 10px;

    &:hover {
        color: rgb(108, 108, 218);
    }


}



.close-btn {
    font-size: 3rem;
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
}

.close-btn {
    cursor: pointer;
}
</style>