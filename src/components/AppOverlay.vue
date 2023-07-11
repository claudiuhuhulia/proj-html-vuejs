<script>
export default {
    emits: ['close-clicked']
}

</script>
 
 
<template>
    <div class="overlay-nav d-flex flex-column align-items-center justify-content-center">

        <div class="close-btn" @click="$emit('close-clicked')">

            <font-awesome-icon icon="fa-solid fa-rectangle-xmark" class="close-btn" />
        </div>




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