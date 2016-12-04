<template>
    <div class="card clearf" v-if="!!repoInfo">
        <div class="card-avator">
            <img :src="repoInfo.owner.avatar_url" alt="user">
        </div>
        <div class="card-content">
            <h6>{{ repoInfo.full_name }}</h6>
            <p>{{ repoInfo.description }}</p>
            <div class="card-content-footer">
                <ul class="clearf">
                    <li>{{ repoInfo.stargazers_count }}</li>
                    <li>{{ repoInfo.watchers_count }}</li>
                    <li>{{ repoInfo.forks_count }}</li>
                    <li>{{ size }}</li>
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
        props:['repoInfo'],
        data() {
            return {

            }
        },
        computed: {
            size: function() {
                const size = this.repoInfo.size
                if(size < 1000) {
                    return size + 'KB'
                } else {
                   return Math.ceil(size / 1000) + 'MB'
                }
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
        float: left;
        text-indent: 16px;
        width: 44px;
        color: #f3f3f3;
        font-size: 7px;
    }
    .card-content-footer li:first-child {
        background: url('../../assets/star.png') 1px 2px no-repeat;
    }
    .card-content-footer li:nth-child(2) {
        background: url('../../assets/watch.png') 1px 2px no-repeat;        
    }
    .card-content-footer li:nth-child(3) {
        background: url('../../assets/fork.png') 1px 2px no-repeat;        
    }
    .card-content-footer li:nth-child(4) {
        background: url('../../assets/zip.png') 1px 2px no-repeat;        
    }
    .card-type {
        position: absolute;
        top: 4px;
        right: 6px;
    }
</style>