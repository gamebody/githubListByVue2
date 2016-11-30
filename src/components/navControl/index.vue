<template>
    <div class="nav-control">
        <nav-control-container></nav-control-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        components: {
            navControlContainer: require('./navControlContainer')
        }
    }
</script>

<style>
    .nav-control {
        float: left;
        width: 300px;
        height: 100%;
        background: #335566;
    }
</style>