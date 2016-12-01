<template>
    <div class="nav-contaner">
        <control-bar></control-bar>
        <navList></navList>
    </div>
</template>
<script>
    export default {
        components: {
            controlBar: require('./controlBar'),
            navList: require('./navList')
        }
    }
</script>
<style>
    .nav-contaner {
        width: 90%;
        margin: 0 auto;
        margin-top: 50px;
        overflow: auto;
    }
</style>