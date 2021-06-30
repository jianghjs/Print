<template>
    <div class="Nav">
        <el-row>
            <el-col :span="2">
                <el-image src="../assets/logo.png" style="width:60px;height:60px;"></el-image>
            </el-col>
            <el-col :span="22">
                <el-menu :default-active="$route.path" mode="horizontal" class="el-menu-demo" router>
                    <el-menu-item index="/">トップ</el-menu-item>
                    <el-menu-item index="/applications">申請書</el-menu-item>
                    <el-menu-item index="/agent">代理人</el-menu-item>
                    <el-menu-item index="/working">資産</el-menu-item>
                    <el-menu-item index="/working">ユーザー</el-menu-item>
                    <el-menu-item index="/working">組織</el-menu-item>
                    <el-menu-item index="/working">権限</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '1',
        }
    },
}
</script>