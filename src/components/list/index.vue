<template>
    <div class="list">
        <div class="list-title">
            <h5>react</h5>
        </div>

        <div class="list-selected">
            <ul>
                <li class="list-search-result-item">
                    <card></card>
                </li>
                <li class="list-search-result-item">
                    <card></card>
                </li>
                <li class="list-search-result-item">
                    <card></card>
                </li>
            </ul>
        </div>
        <div class="list-add" v-show="toggle">
            <button
                @click.prevent.stop="toggleHandle"
                >Add some cards...</button> 
        </div>
        <div class="list-search" v-show="!toggle">
            <input 
                type="text" 
                placeholder="请输入..." 
                v-model="currentValue">
            <div 
                class="list-search-cancel"
                @click.prevent.stop="toggleHandle"></div>
        </div>

        <div class="list-search-result">
            <ul>
                <li class="list-search-result-item">
                    <card></card>
                </li>
                <li class="list-search-result-item">
                    <card></card>
                </li>
                <li class="list-search-result-item">
                    <card></card>
                </li>
            </ul>

            <div class="pre-bar">
                &lt;
            </div>
            <div class="next-bar">
                &gt;
            </div>            
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                toggle: false,
                currentValue: '',
                currentPage: 1,

            }
        },
        methods: {
            toggleHandle: function() {
                this.currentValue = ''
                this.toggle = !this.toggle
            }
        },
        components: {
            card: require('./card')
        }
    }
</script>
<style>
    .list {
        margin-left: 350px;
        width: 270px;
        background: #335466;
        border-radius: 4px;
        color: #b2b3b3;
        font-size: 12px;
    }
    .list-title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        padding-left: 22px;
    }
    button {
        border: none;
        background: #335466;
        outline: none;

    }
    .list-add {
        width: 100%;
    }
    .list-add button{
        width: 100%;
        height: 30px;
        color: #8a8a8a;
        text-indent: -120px;
        cursor: pointer;
        border-radius: 0 0 4px 4px;
    }
    .list-add:hover button {
        color: #fff;
        background: #294452;
    }
    .list-search {
        position: relative;
        width: 100%;
        height: 55px;
        box-sizing: border-box;
        padding: 10px;
    }
    .list-search input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        background: #406a80;
        color: #fff;
        text-indent: 10px;
        border-radius: 4px;
        box-shadow: inset 1px 1px 2px #2e4c5b;
    }
    .list-search-cancel {
        position: absolute;
        top: 16px;
        right: 15px;
        width: 25px;
        height: 25px;
        border-left: 2px solid #335466;
        background: url('../../assets/x2.png') 4px 3px no-repeat #406a80;
        cursor: pointer;
    }
    .list-search-result {
        position: relative;
        overflow: hidden;
    }
    .list-search-result-item {
        padding: 0 9px 6px 9px;
    }
    .pre-bar,
    .next-bar {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 30px;
        color: #fff;
        background: #335466;
        box-shadow: 0 0 2px 0 #000;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
    }
    .pre-bar:hover,
    .next-bar:hover {
        background: #294452;
    }
    .pre-bar {
        top: 80px;
        left: -14px;
        text-indent: 15px;        
    }
    .next-bar {
        top: 80px;
        right: -14px;
        text-indent: 5px;
    }
</style>