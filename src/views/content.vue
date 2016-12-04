<template>
    <div>
        <add-list></add-list>
        <list
            v-for="item in list"
            :item="item"></list>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        computed: {
            list: function() {
                const path = this.$route.path
                return this.$store.state.floders.filter(({ icon }) => (
                    path === `/${icon.name}`
                ))[0].list
            }
        },
        components: {
            addList: require('../components/common/addList'),
            list: require('../components/list')
        }
    }
</script>