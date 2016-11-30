<template>
    <router-link :to="where" tag="li" class="clearf wrap">
        <div class="nav-container">
            <div class="nav-icon">
                <span></span>
            </div>
            <div class="nav">
                <nav>
                    主页
                </nav>
            </div>
        </div>
    </router-link>
</template>
<script>
    export default {
        props:['where'],
        data() {
            return {
                
            }
        }
    }
</script>
<style>
    .wrap {
        background: #315061;
        cursor: pointer;
    }
    .nav-container {
        box-sizing: border-box;
        height: 60px;
        border-top: 1px solid #294452;
        margin-left: 17px;
        line-height: 60px;
    }
    .wrap:hover {
        background: #2d4a59;
    }
    .nav-icon {
        position: relative;
        top: 12px;
        float: left;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #294453;
    }
    
    .nav-icon span {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        left: 8px;
        top: 8px;
        background: url('../../assets/file.png') 0 0 no-repeat;
        background-size: cover;
    }
    
    .nav {
        float: left;
        margin-left: 18px;
        color: #fff;
        font-size: 20px;
    }
    .router-link-active {
        background: #294452;
    }
</style>