<template>
    <ul class="nav-list">
        <nav-item
            v-for="item in items"
            :where="item.icon.name"
            :icon="item.icon.icon"
            :icon-color="item.icon.iconColor"
            :wrap-color="item.icon.wrapColor"
            :text="item.text"></nav-item>
    </ul>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            items () {
                return this.$store.state.floders
            }
        },
        components: {
            navItem: require('./navItem')
        }
    }
</script>
<style>
    .nav-list {
        height: 500px;
        overflow: auto;
    }
    ::-webkit-scrollbar {
        width: 0px;
    }
</style>