<template>
    <div class="icon-wrap" :style="wrapStyle">
        <div :style="iconStyle">
            
        </div>
    </div>
</template>
<script>
    export default {
        props: ['icon', 'wrapColor', 'iconColor'],
        data() {
            return {
                wrapStyle: {
                    backgroundColor: this.wrapColor
                },
                iconStyle: {
                    background: `url(${this.icon}) 0 0 no-repeat`,
                    backgroundSize: 'cover',
                    filter: `drop-shadow(30px 0 0 ${this.iconColor})`
                }
            }
        },
    }
</script>
<style scoped>
    .icon-wrap {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
    } 
    .icon-wrap div {
        width: 20px;
        height: 20px;
        margin-top: 7px;
        margin-left: -22px; 
        border-right: 30px solid transparent; 
    } 
</style>