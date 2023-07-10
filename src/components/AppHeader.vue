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


        <!-- TITLE & JUMBOTRON -->
        <div class="container jumbotron d-flex align-items-center justify-content-between">
            <div class="left-jumbo">
                <div class="title">
                    <h1>Barber Shop</h1>
                    <div class="division-bar my-3"></div>
                </div>
                <div class="sub my-5">The Pinnacle of Male Grooming</div>
                <div class="my-btn">LEARN MORE</div>
            </div>
            <div class="right-jumbo">
                <img src="../assets/img/avadabarbers_hero_focalmirror.png" alt="header pic">
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

a,
h1 {
    color: white;
}

h1 {
    font-size: 6rem;
}

#bars {
    font-size: 1.5rem;
    margin-left: 25px;
}

header {
    background-image: url(../assets/img/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;
    height: 950px;
}

.left-jumbo {
    .title {
        .division-bar {
            border-bottom: 4px solid #be9359;
            width: 250px;
        }
    }

    .sub {
        font-size: 1.3rem;
        color: #686868;
    }
}

.my-btn {
    width: 200px;
}

.right-jumbo {
    img {
        height: 750px;
    }
}
</style>