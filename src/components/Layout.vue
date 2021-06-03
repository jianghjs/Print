<template>
    <div class="layout">
        <el-container>
            <el-header>
                <el-menu :default-active="activeIndex" mode="horizontal" class="el-menu-demo">
                    <el-menu-item index="1">トップ</el-menu-item>
                    <el-menu-item index="2">申請書</el-menu-item>
                    <el-menu-item index="3">代理人</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>main</el-main>
            <el-footer>footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '1'
        }
    }
}
</script>