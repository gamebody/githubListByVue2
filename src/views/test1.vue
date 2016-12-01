<template>
    <div>
        <h1>test1</h1>
        <floder :editing="true"></floder>
    </div>
</template>
<script>
    import edit from '../assets/edit.png'
    export default {
        data() {
            return {
                edit: edit
            }
        },
        components: {
            floder: require('../components/common/floder')
        }
    }
</script>