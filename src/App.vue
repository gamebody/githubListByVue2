<template>
    <div id="app">
        <nav-control></nav-control>
        <main-content></main-content>
    </div>
</template>

<script>
    export default { 
        name: 'app',
        components: {
            navControl: require('./components/navControl'),
            mainContent: require('./components/mainContent')
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

</style>