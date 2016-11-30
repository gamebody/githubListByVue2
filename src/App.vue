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
    
    .icon-wrap {
        position: relative;
        top: 12px;
        float: left;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #294453;
    }
    
    .icon {
        display: block;
        width: 25px;
        height: 25px;
        margin: 5px 0 0 5px;
        cursor: pointer;
        background-size: cover;
    }
</style>