<template>
    <div class="card clearf">
        <div class="card-avator">
            <img src="../../assets/user.png" alt="user">
        </div>
        <div class="card-content">
            <h6>facebook/react</h6>
            <p>A framework for building native app</p>
            <div class="card-content-footer">
                <ul class="clearf">
                    <li>40559</li>
                    <li>40559</li>
                    <li>9178</li>
                    <li>148MB</li>
                </ul>
            </div>
        </div>
        <div class="card-type">
            <p>javascript</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style>
    .card {
        position: relative;
        box-sizing: border-box;
        border-radius: 4px;
        width: 100%;
        min-width: 250px;
        background: #2c4959;
        padding: 4px 0;
        box-shadow: 1px 1px 1px 0 #294452;
    }
    
    .card-avator {
        float: left;
        width: 57px;
        height: 57px;
        border-radius: 4px;
        margin: 0 4px;
    }
    
    .card-avator img {
        width: 57px;
        height: 57px;
    }
    .card-content {
        float: left;
        width: 180px;
        line-height: 19px;
        color: #fff;
    }
    .card-content h6 {
        font-size: 12px;
    }
    .card-content p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 7px;
        color: #f3f3f3;
    }
    .card-content-footer li {
        float: right;
        text-indent: 16px;
        width: 44px;
        color: #335466;
        font-size: 7px;
    }
    .card-type {
        position: absolute;
        top: 4px;
        right: 6px;
    }
</style>