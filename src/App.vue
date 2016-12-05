<template>
    <div id="app">
        <floder :show="showFloder"></floder>
        <nav-control></nav-control>
        <main-content></main-content>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default { 
        name: 'app',
        components: {
            navControl: require('./components/navControl'),
            mainContent: require('./components/mainContent'),
            floder: require('./components/common/floder')
        },
        computed: {
            ...mapState({
                showFloder: state => state.floder.isRunning
            })
        }    
    }
</script>

<style>
    html,
    body,
    #app {
        height: 100%;
    }
    
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .clearf:after,
    .clearf:before {
        content: ' ';
        display: table;
        clear: both;
    }
    /*::-webkit-scrollbar {
        width: 0px;
    }*/
</style>