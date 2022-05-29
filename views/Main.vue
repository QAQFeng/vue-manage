<template>
    <el-container style="height: 100%">
    <el-aside width="auto">
        <!-- 侧边栏 -->
        <common-aside></common-aside>
    </el-aside>
    <el-container>
        <!-- 头部 -->
        <el-header>
            <common-header />
        </el-header>
        <!-- tag 标签 -->
        <common-tag />
        <!-- 主体 -->
        <el-main>
            <!-- 引入嵌套路由组件 -->
            <router-view></router-view> 
        </el-main>
    </el-container>
    </el-container>
</template>

<script>
// 引入 Vue 组件
import CommonAside from "../src/components/CommonAside.vue"
import CommonHeader from "../src/components/CommonHeader.vue"
import CommonTag from "../src/components/CommonTag"

export default {
    // 取消语法校验
    /* eslint-disable */
    name: 'Home',
    components: {
        CommonAside,
        CommonHeader,
        CommonTag
    },
    data () {
        return {}
    }
}
</script>

<style lang="less" scoped>
.el-header {
    background-color: #333;
}
.el-main {
    padding-top: 0;
}

</style>