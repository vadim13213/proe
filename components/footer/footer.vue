<template>
    <footer class = 'footer'>
        <div class = 'footer-wrapper'>
            <div class = 'footer__copyright'>
                {{ copyrightText }}
            </div>
        </div>        
    </footer>
</template>

<script>
    export default {
        computed: {
            copyrightText(){
                const currentYear = new Date().getFullYear();
                return `© 2023 - ${currentYear}, magazin`; 
            }
        }
    }
</script>

<style lang="scss">
    .footer {
        background: linear-gradient(white,blue,red);
    }
</style>