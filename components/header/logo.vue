
<template>
    <a class="header-logo" to="/">
        <picture>
            <source
                media="(min-width: 1025px)"
                srcset="/images/logo/image1.png"
            />

            <source
                media="(min-width: 768px)"
                srcset="/images/logo/image2.png"
            />

            <img
                class="header-logo__image"     
                src="/images/logo/image3.png"
                alt="LOGO"
                height="90"
                width="90"
            />

        </picture>
    </a>
</template>

<style lang="scss" scoped>
    .header-logo {
        display: flex; 
        justify-content: center;
        padding-top: 15px;
        @media (min-width: $pad) {padding-top: 30px;}
        @media (min-width: $desktop-mid) {padding-top: 60px;}
        .header-logo__image {
            aspect-ratio: auto;
        }
    }
</style>