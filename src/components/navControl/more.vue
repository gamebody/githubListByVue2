<template>
    <div class="control">
        <span class="more-icon" @click="toggleHandle"></span>

        <div class="more" v-show="toggle">  
            <div class="triangle-top"></div>  
            <ul>
                <li>
                    <div class="icon-wrap">
                        <span class="icon sort"></span>
                    </div>
                    <p class="icon-text">重新排序文件夹</p>
                </li>

                <li>
                    <div class="icon-wrap">
                        <span class="icon edit"></span>
                    </div>
                    <p class="icon-text">编辑文件夹</p>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                toggle: false
            }
        },
        methods: {        
            toggleHandle: function() {
                this.toggle = !this.toggle
            }
        }
    }
</script>
<style scoped>
    .more-icon {
        display: block;
        width: 25px;
        height: 25px;
        margin: 5px 0 0 5px;
        cursor: pointer;
        background: url('../../assets/more.png') 0 0 no-repeat;
        background-size: cover;
    }
    
    .control {
        right: 17px;
        position: absolute;
        top: 14px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #27414e;
    }
    .more {
        position: absolute;
        left: -180px;
        top: 37px;
        width: 220px;
        z-index: 100;
    }
    ul {
        border-radius: 5px;
        
    }
    li:first-child {
        border-radius: 5px 5px 0 0;
        border-bottom: 1px solid #335566;
    }
    li:last-child {
        border-radius: 0 0 5px 5px;
    }
    li {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #406a80;
        cursor: pointer;
    }
    li:hover {
        background: #395f73;
    }
    .sort {
        background: url(../../assets/sort.png)
    }
    .edit {
        background: url(../../assets/edit.png)
    }
    .icon-text {
        float: left;
        margin-left: 20px;
        color: #d9d9d9;
    }
    .icon-wrap {
        margin-left: 10px;
        top: 8px;
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
        background-size: cover;
    }
    .icon {
        display: block;
        width: 25px;
        height: 25px;
        margin: 5px 0 0 5px;
        cursor: pointer;
        background-size: cover;
    }
    .triangle-top {
        position: relative;
        left: 185px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #406a80;
    }
</style>