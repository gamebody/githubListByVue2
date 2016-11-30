<template>
    <ul>
        <nav-item where="/test1"></nav-item>
        <nav-item where="/test2"></nav-item>
    </ul>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {
            navItem: require('./navItem')
        }
    }
</script>
<style>

</style>