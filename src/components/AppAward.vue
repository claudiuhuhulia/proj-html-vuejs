<script></script>

<template>
    <main class="d-flex justify-content-center align-items-center flex-column">
        <h5>AWARD WINNING</h5>
        <h1>Pro Barbers</h1>
        <div class="my-btn mt-2">
            MEET YOUR NEW BARBER
        </div>
    </main>
    <svg class="fusion-big-triangle-candy " xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
        viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:#ffffff;padding:0;">
        <path d="M0 100 L50 2 L100 100 Z"></path>
    </svg>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

svg {
    background-color: #171717
}

.my-btn {
    width: 300px;
}

main {
    height: 450px;
    background-image: url(../assets/img/avadabarbers-about-introbackground.jpg);
    background-size: cover;
}
</style>