<template>
    <div id="main">
        <header class="main-header">
            <h4>{{ title }}</h4>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        computed: {
            title: function() {
                const routePath = this.$route.path
                const floders = this.$store.state.floders.filter(({ icon }) => {
                    return routePath === `/${icon.name}`
                })
                if (floders[0]) {
                    return floders[0].text
                }
                return '文件夹'
            }
        }
    }
</script>

<style scoped>
    #main {
        overflow: hidden;
        height: 100%;
        background: #406a80;
    }
    .main-header {
        height: 40px;
        border-bottom: 1px solid #2a4553;
        text-align: center;
        line-height: 40px;
    }
    h4 {
        font-weight: normal;
        color:aquamarine;
    }
</style>