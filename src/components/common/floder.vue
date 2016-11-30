<template>
    <div class="floder">
        <div class="floder-header">
            <h3>新文件夹</h3>
            <button type="button" class="btn-cancel">取消</button>
            <button type="button" class="btn-finish">完成</button>
        </div>

        <div class="floder-input">
            <icon class="custom" :icon="currentIcon" wrapColor="#315162" iconColor="#00c0ff"></icon>
            <input type="text" name="" value="hah">
        </div>


        <div class="icons-toggle">
            <p>隐藏图标</p>
        </div>

        <div class="floder-icons">
            <div class="icons-select">
                <button type="button" class="file active">文件夹图标</button>
                <button type="button" class="kind">分类图标</button>
            </div>
            <ul class="icon-list" v-show="condition">
                <li v-for="item of items" class="iconItem">
                    <icon wrapColor="#315162" iconColor="#fff" :icon="currentIcon"></icon>
                </li>
            </ul>
            <ul class="icon-list" v-show="!condition">

            </ul>
        </div>
    </div>
</template>
<script>
    import file from '../../assets/file.png'

    const fileIcons = [
        {iconColor:'#fff'},
        {iconColor:'#fff'},
        {iconColor:'#fff'},
        {iconColor:'#fff'},
    ]
    export default {
        data() {
            return {
                currentIcon: file,
                condition: true,
                items: fileIcons
            }
        },
        components: {
            icon: require('./icon')
        }
    }
</script>
<style scoped>
    .floder {
        width: 300px;
       border-radius: 8px;
        background: #3a5f73;
    }
    .floder-header {
        position: relative;
        width: 100%;
        height: 45px;
        color: #d9d9d9;
        line-height: 45px;
        font-size: 17px;
        border-bottom: 1px solid #294250;
    }
    
    .floder-header h3 {
        font-weight: normal;
        text-align: center;
    }
    
    .floder-header button {
        position: absolute;
        top: 0px;
        width: 80px;
        height: 45px;
        border: none;
        background: none;
        color: #d9d9d9;
        font-size: 15px;
        outline: none;
        cursor: pointer;
    }
    
    .btn-cancel {
        left: 0;
    }
    
    .btn-finish {
        right: 0;
    }
    
    .floder-input {
        position: relative;
        width: 100%;
        height: 35px;
        margin: 17px 0;
    }
    
    .floder-input input {
        text-indent: 10px;
        width: 210px;
        margin-left: 70px;
        outline: none;
        background: #315162;
        height: 35px;
        border: none;
        color: #fff;
    }
    
    .custom {
        position: absolute;
        top: 0;
        left: 20px;
    }
    
    .floder-input-wrap {
        width: 100%;
        height: 70px;
        background: #3a5f73;
    }
    .icons-toggle{
        height: 30px;
        line-height: 30px;
        color: #d9d9d9;
        font-size: 15px;
        margin: 8px 0;
        text-indent: 21px;
        cursor: pointer;
    }
    .icons-toggle:hover {
        color: #c9c9c9
    }
    .icons-select {
        width: 258px;
        margin: 8px auto;
        font-size: 0px;
    }
    .icons-select button {
        display: inline-block;
        height: 28px;
        width: 128px;
        font-size: 12px;
        color: #c9c9c9;
        background: #3a5f73;
    }

    .file {
        border: 1px solid #315162;
        border-right: none;
        border-radius: 5px 0 0 5px;
    }
    .kind {
        border: 1px solid #315162;
        border-left: none;
        border-radius: 0 5px 5px 0;
    }
    .iconItem{
        float: left;
    }

</style>