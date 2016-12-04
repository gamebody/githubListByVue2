<template>
    <div class="addList-container">
        <div v-show="isEditing" class="addList-default">
            <button 
                type="button"
                @click.prevent.stop="toggle">Add a list...</button>
        </div>

        <div v-show="!isEditing">
            <div class="input-wrap">
                <input class="default-input" type="text" placeholder="Add a list..." v-model="currentValue">
            </div>
            <div class="addList-control clearf">
                <button 
                    class="addList-save"
                    @click.prevent="addListHandle">Save</button>
                <button 
                    class="addList-cancel"
                    @click.prevent.stop="toggle"
                    ></button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isEditing: true,
                currentValue: ''
            }
        },
        methods: {
            toggle: function() {
                this.isEditing = !this.isEditing
            },
            addListHandle: function() {
                if(this.currentValue === '') {
                    return 
                }
                const list = {
                    name: this.currentValue,
                    cards: [],
                    path: this.$route.path
                }
                this.$store.commit('addList', list)
                this.cuurenValue = ''
                this.isEditing = false
            }
        }
    }
</script>
<style scoped>
    .addList-container {
        position: relative;
        left: 20px;
        top: 40px;
        width: 270px;
        border-radius: 5px;
        background: #335466;
        color: #fff;
        font-size: 13px;
    }
    
    .addList-default {
        width: 270px;
        height: 44px;
        border-radius: 5px;
    }
    
    button {
        border: none;
        outline: none;
        height: 44px;
        border-radius: 5px;
        line-height: 44px;
        cursor: pointer;
        color: #e9e9e9;
    }
    
    .addList-default button {
        width: 100%;
        height: 44px;
        background: #335466;
        line-height: 44px;
        cursor: pointer;
        color: #e9e9e9;
        text-indent: -130px;
    }
    
    .addList-default button:hover {
        background-color: #294452;
        color: #fff;
    }
    .default-input {
        width: 100%;
        height: 34px;
        border: none;
        outline: none;
        color: #b2b3b3;
        background: #406a80;
        border-radius: 4px;
        text-indent: 13px;
        font-size: 10px;
        box-shadow: inset 1px 1px 4px #2e4c5b;
    }
    .input-wrap {
        box-sizing: border-box;
        width: 100%;
        padding: 12px;
    }
    .addList-control {
        padding: 0 12px 12px 12px;
    }
    .addList-save {
        float: left;
        width: 85px;
        height: 30px;
        line-height: 30px;
        font-weight: bold;
        color: #fff;
        border-radius: 4px;
        background: #406a80;
        font-size: 12px;
    }
    .addList-cancel {
        float: left;    
        width: 50px;
        height: 30px;
        background: url('../../assets/x.png') 10px 5px no-repeat #335466;
    }
</style>