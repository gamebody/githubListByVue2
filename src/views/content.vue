<template>
    <div>
        <add-list></add-list>
        <list></list>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        components: {
            addList: require('../components/common/addList'),
            list: require('../components/list')
        }
    }
</script>