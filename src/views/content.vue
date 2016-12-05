<template>
    <div class="content-container">
        <ul class="content clearf">
            <li
                v-for="item in list"
                class="list-wrapp">
                
                <list :item="item"></list>
            </li>
            <li class="list-wrapp">
                <add-list></add-list>
            </li>
        </ul>   
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
<style>
    .content-container {
        position: relative;
        height: 100%;
        overflow: auto;
    }
    .content {
        width: 3000px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0; 
        overflow: auto;
    }
    .list-wrapp {
        float: left;
        height: 100%;
        margin-left: 30px;
        margin-top: 30px;
    }

</style>