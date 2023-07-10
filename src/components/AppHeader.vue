<script>
export default {

}
</script>

<template>
    <header>
        <!-- HEADER SHOP & POPUP NAV -->
        <div class="container d-flex justify-content-between align-items-center pt-4">
            <div class="logo">
                <img src="../assets/img/avadabarbers-logo-x1.png" alt="logo">
            </div>
            <nav class="d-flex">
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fas', 'bars']" id="bars" />
                </a>
            </nav>
        </div>

        <div class="container jumbotron d-flex align-items-center justify-content-between">
            <div class="left-jumbo">
                <div class="title">
                    <h1>Barber Shop</h1>
                </div>
                <sub>The Pinnacle of Male Grooming</sub>
                <div class="my-btn">Learn More</div>
            </div>
            <div class="right-jumbo">
                <img src="../assets/img/avadabarbers_hero_focalmirror.png" alt="header pic">
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
a,
h1 {
    color: white;
}

#bars {
    font-size: 1.5rem;
    margin-left: 25px;

}

header {
    background-image: url(../assets/img/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;

}

.right-jumbo {
    img {
        height: 750px;
    }
}
</style>