<template>
    <div>
        <h1>test2</h1>
        <icon :icon="file" wrapColor="#315162" iconColor="#00c0ff"></icon>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                file: require('../assets/file.png')
            }
        },
        components: {
            icon: require('../components/common/icon')
        }
    }
</script>