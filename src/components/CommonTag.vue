<template>
    <div class="tabs">
        <el-tag
            v-for="(tag, index) in tags"
            :key="tag.name"
            :closable="tag.name !== 'home'"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
            @click="changeMenu(tag)"
            @close="handleClose(tag, index)"
            size="small"
        >
            {{ tag.label }}
        </el-tag>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'CommonTag',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    methods: {
        ...mapMutations({
            // 定义 closeTag 的别名 close
            close: 'closeTag'
        }),
        // 点击 el-tag 标签时切换路由
        // $router对象是全局路由的实例，是router构造方法的实例。
        changeMenu(item) {
            this.$router.push({ name: item.name })
        },
        // 点击 × 时，关闭相应 tag，并跳转到新的 tag ；
        // 同时需要在 tab.js 中构建新方法 closeTag() 删除 state.tabsList[] 数组中的数据并使用 mapMutations 注入
        handleClose(tag, index) {
            const length = this.tags.length - 1
            this.close(tag)
            // 注意这里是 $route 不是 $router
            // $route对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query对象等。
            if (tag.name !== this.$route.name) {
                return;
            }
            if (index === length) {
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            } else {
                this.$router.push({
                    name: this.tags[index].name
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.tabs {
    padding: 20px;
    // .el-tag 无效，在前面加上 /deep/
    /deep/ .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}

</style>