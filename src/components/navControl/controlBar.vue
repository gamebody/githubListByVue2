<template>
    <div class="control-bar">
        <div class="add" @click.stop="showFloder">
            <span class="add-icon"></span>
        </div>
        <div class="title">
            <h4>文件夹</h4>
        </div>
        <more></more>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        components: {
            more: require('./more')
        },
        methods: {
            showFloder: function() {
                this.$store.commit('toggleFloder')
            }
        }
    }
</script>
<style scoped>
 .control-bar {
     position: relative;
     width: 100%;
     height: 60px;
     border-radius: 5px 5px 0 0;
     background: #2e4c5c;
 }
 .add {
     position: absolute;
     top: 14px;
     width: 35px;
     height: 35px;
     border-radius: 50%;
     background: #27414e;
 }
 .add {
     left: 17px;
 }

 .title {
     width: 100%;
 }
 .title h4 {
     width: 60px;
     margin: 0 auto;
     line-height: 60px;
     color: #eceff0;
     font-size: 20px;
     font-weight: normal;
 }
 .add-icon {
     display: block;
     width: 25px;
     height: 25px;
     margin: 5px 0 0 5px;
     cursor: pointer;
 }
 .add-icon {
     background: url('../../assets/add.png') 0 0 no-repeat;
     background-size: cover;
 }

</style>