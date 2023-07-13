<script>
export default {
    data() {
        return {
            sections: [{
                id: 1,
                text: 'Home'
            },
            {
                id: 2,
                text: 'AboutUs'
            },
            {
                id: 3,
                text: 'Home'
            },
            {
                id: 4,
                text: 'Services'
            },
            {
                id: 5,
                text: 'Shop'
            },
            {
                id: 6,
                text: 'Our Team'
            },
            {
                id: 7,
                text: 'Our Team'
            },
            {
                id: 8,
                text: 'Blog'
            },
            {
                id: 9,
                text: 'Contact Us'
            }],
        }
    },
    emits: ['close-clicked'],
}

</script>
 

<template>
    <div class="overlay-nav d-flex flex-column align-items-center justify-content-center">
        <font-awesome-icon icon="fa-solid fa-rectangle-xmark" class="close-btn" @click="$emit('close-clicked')" />
        <a v-for="section in sections" :key="section.id" href="#">{{ section.text }}</a>
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

.bgi-home {
    background-image: url(../assets/img/avadabarbers-homepage-hero-bg.jpg);
    position: fixed;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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