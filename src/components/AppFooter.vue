<script>
export default {

}
</script>

<template>
    <main class="py-4">
        <div class="container">
            <div class="row mx-5">
                <div class="shop col-4 d-flex align-items-center flex-column">
                    <img src="../assets/img/avadabarbers_footer_shop_image.png" alt="shop">
                    <div class="my-btn my-5">
                        SHOP OUR RANGE NOW
                    </div>
                </div>
                <div class=" col-4 d-flex align-items-center flex-column justify-content-center">
                    <img src="../assets/img/avadabarbers-logo-x1.png" alt="logo">
                    <div class="address text-center my-5">
                        Avada Barbers <br>
                        123 New York Street <br>
                        New York City <br>
                        info@yourwebsite.com <br>
                        +1 (555) 555-1212
                    </div>
                    <div class="follow-us">
                        <h5>FOLLOW US</h5>
                        <div class="icons d-flex justify-content-between align-items-center fs-5">
                            <font-awesome-icon icon="fa-brands fa-youtube" />
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            <font-awesome-icon icon="fa-brands fa-twitter" />
                            <font-awesome-icon icon="fa-brands fa-instagram" />
                        </div>
                    </div>
                </div>
                <div class="shop col-4 d-flex align-items-center flex-column ">
                    <img src="../assets/img/avadabarbers_footer_appointment_image.png" alt="shop">
                    <div class="my-btn my-5">
                        BOOK YOUR APPOINTMENT
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="copyright-section d-flex align-items-center justify-content-center py-5">
        © Copyright 2012-2023 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/style.scss' as *;

main {
    background-color: #121314;
}

.copyright-section {
    color: grey;
    background-color: #161718;
}

.shop {
    font-weight: bold;

    img {
        height: 250px;
    }
}

.address {
    color: grey;
}

.icons {
    color: grey;
    cursor: pointer;
}

.my-btn {
    width: 250px;
    font-size: 0.9rem;
}
</style>