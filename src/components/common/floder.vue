<template>
    <div class="floder" :style="initStyle">
        <div class="floder-header">
            <h3>{{ this.editing ? '修改文件夹' : '新文件夹' }}</h3>
            <button type="button" class="btn-cancel" @click.stop="cancel">取消</button>
            <button type="button" class="btn-finish" @click.stop="finish">完成</button>
        </div>

        <div class="floder-input">
            <icon 
                class="custom" 
                :icon="currentIcon.icon" 
                wrap-color="#315162" 
                :icon-color="currentIcon.iconColor">
            </icon>
            <input type="text" v-model="currentValue">
        </div>


        <div class="icons-toggle" @click="showIconsTog">
            <p>{{ infro }}图标</p>
        </div>

        <div class="floder-icons" v-show="showIcons">
            <div class="icons-select" @click.stop.prevent="togHandle">
                <button type="button" class="file" :class="{active: isActive}">文件夹图标</button>
                <button type="button" class="kind" :class="{active: !isActive}">分类图标</button>
            </div>
            <ul class="icon-list" v-show="iconPanelToggle">
                <li v-for="item of fileIcons" class="iconItem" @click.stop="iconClickHandle(item)">
                    <icon wrap-color="#315162" :icon-color="item.iconColor" :icon="item.icon">
                    </icon>
                </li>
            </ul>
            <ul class="icon-list" v-show="!iconPanelToggle">
                <li v-for="item of kindIcons" class="iconItem" @click.stop="iconClickHandle(item)">
                    <icon wrap-color="#315162" :icon-color="item.iconColor" :icon="item.icon">
                    </icon>
                </li>
            </ul>
        </div>

        <div class="floder-delete">
            <icon 
                v-show="editing"
                class="del-icon" 
                :icon="deleteIcon" 
                icon-color="red" 
                wrap-color="#3a5f73"
                ></icon>
        </div>
    </div>
</template>
<script>
    import file from '../../assets/file.png'

    import del from '../../assets/delete.png'

    const kindPic = [
        require('../../assets/HTML.png'),
        require('../../assets/css.png'),
        require('../../assets/javascript.png'),
        require('../../assets/jquery.png'),
        require('../../assets/github2.png'),
        require('../../assets/sublime.png'),
        require('../../assets/github4.png'),
        require('../../assets/github5.png'),
        require('../../assets/program.png'),
        require('../../assets/vue.png'),
        require('../../assets/react.png'),
        require('../../assets/angular.png'),        
    ]
    const kindIcons = kindPic.map((icon) => (
        {
            iconColor: '#fff',
            icon: icon
        }
    ))

    const fileIcons = [
        {icon: file, iconColor: '#fff'},
        {icon: file, iconColor: '#ba5db9'},
        {icon: file, iconColor: '#bda0bd'},
        {icon: file, iconColor: '#3cad49'},
        {icon: file, iconColor: '#14501b'},
        {icon: file, iconColor: '#ff8a65'},
        {icon: file, iconColor: '#ccc929'},
        {icon: file, iconColor: '#1ad7ff'},
        {icon: file, iconColor: '#d77a41'},
        {icon: file, iconColor: '#1b1b1b'},
        {icon: file, iconColor: '#996545'},
        {icon: file, iconColor: '#66aacc'},        
    ]
    let index = 1;
    export default {
        props:['editing'],
        data() {
            return {
                currentIcon: {
                    icon: file,
                    iconColor: '#fff'
                },
                currentValue:'',
                deleteIcon: del,
                infro: '隐藏', 
                isActive: true,   
                showIcons: true,
                iconPanelToggle: true,
                kindIcons: kindIcons,
                fileIcons: fileIcons,
                initStyle: {
                    left: '',
                    top: ''
                }
            }
        },
        methods: {
            iconClickHandle: function({ icon, iconColor }) {
                this.currentIcon = {
                    icon: icon,
                    iconColor: iconColor
                }
            },
            togHandle: function(e) {
                const tar = e.target;
                if (tar.className.split(' ')[0] === 'kind') {
                    this.isActive = false
                    this.iconPanelToggle = false
                } else {
                    console.log('1')
                    this.isActive = true
                    this.iconPanelToggle = true
                }    
            },
            showIconsTog: function() {
                this.showIcons = !this.showIcons
                if(this.showIcons === true) {
                    this.infro = '隐藏'
                } else {
                    this.infro = '显示'
                }
            },
            posInit: function() {
                const clientWidth = document.body.clientWidth;
                const posLeft = (clientWidth / 2) - 150;
                return {
                    left: posLeft + 'px',
                    top: '10%'
                }
            },
            cancel: function() {
                alert('cancel')
            },
            finish: function() {
                const icon = {
                    name: 'floder' + index++,
                    icon: this.currentIcon.icon,
                    iconColor: this.currentIcon.iconColor,
                    wrapColor: '#294453'
                }
                const text = this.currentValue
                this.$store.commit('addFloder', {
                    icon,
                    text
                })
                this.currentValue = ''
            }
        },
        components: {
            icon: require('./icon')
        },
        created: function() {
            const pos = this.posInit()
            this.initStyle = pos
        }
    }
</script>
<style scoped>
    .floder {
        position: absolute;
        width: 300px;
        border-radius: 8px;
        background: #3a5f73;
        z-index: 9999;
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
    
    .icons-toggle {
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
        outline: none;
        cursor: pointer;
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
    
    .icon-list {
        padding: 0 15px;
    }
    
    .iconItem {
        display: inline-block;
        margin: 10px 16px;
    }
    .active {
        background: #315162 !important;
    }
    .floder-delete {
        position: relative;
        width: 100%;
        height: 40px;
    }
    .del-icon {
        position: absolute;
        right: 10px;
    }
</style>