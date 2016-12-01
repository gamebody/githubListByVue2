<template>
    <div class="icon-contanier" :style="wrapStyle">
        <div :style="iconStyle">

        </div>
    </div>
</template>
<script>    
    import file from '../../assets/file.png'

    export default {
        props: ['icon', 'wrapColor', 'iconColor'],
        data() {
            return {
                wrapStyle: {
                    backgroundColor: this.wrapColor
                }
            }
        },
        computed: {
            iconStyle: function() {
                return {
                    background: `url(${this.icon || file}) 0 0 /cover no-repeat`,
                    filter: `drop-shadow(30px 0 0 ${this.iconColor || '#fff'})`
                }
            }
        }
    }
</script>
<style scoped>
    .icon-contanier {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
    }
    
    .icon-contanier div {
        width: 20px;
        height: 20px;
        margin-top: 7px;
        margin-left: -22px;
        border-right: 30px solid transparent;
    }
</style>