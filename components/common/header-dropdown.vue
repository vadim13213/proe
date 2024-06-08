<template>
    <div class="header-dropdown">
        <div class="header-dropdown__dialog">
            <slot></slot>
        </div>
        <div class="header-dropdown__overlay" @click="close">
            
        </div>
    </div>
</template>

<script>
export default {
    created(){
        document.addEventListener('keyup',this.onEscKeyUp);
    },
    methods: {
        onEscKeyUp(event){
            if (event.key === 'Esc'){
                this.close();
            }
        },
        
        close(){
            this.$emit('on-closed');
        }
    },
    beforeDestroy(){
        document.removeEventListener('keyup',this.onEscKeyUp);
    }
}
</script>