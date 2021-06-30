<template>
    <div class="top">
        <Layout>
            <template #aside width="900px">
                <el-row>
                    <el-col><h1>社員</h1></el-col>
                    <el-col :span="8">入社申請</el-col>
                    <el-col :span="8">退社申請</el-col>
                    <el-col :span="8">所属変更申請</el-col>
                    <el-col :span="8">権限変更申請</el-col>
                    <el-col :span="8">作成依頼申請</el-col>
                    <el-col :span="8">利用解除申請</el-col>
                </el-row>
                <el-row>
                    <el-col><h1>派遣社員</h1></el-col>
                    <el-col :span="8">入社申請</el-col>
                    <el-col :span="8">退社申請</el-col>
                    <el-col :span="8">所属変更申請</el-col>
                    <el-col :span="8">権限変更申請</el-col>
                    <el-col :span="8">作成依頼申請</el-col>
                    <el-col :span="8">利用解除申請</el-col>
                </el-row>
                <el-row>
                    <el-col><h1>OHS・LUVINA</h1></el-col>
                    <el-col :span="8">入社申請</el-col>
                    <el-col :span="8">退社申請</el-col>
                    <el-col :span="8">所属変更申請</el-col>
                    <el-col :span="8">権限変更申請</el-col>
                    <el-col :span="8">作成依頼申請</el-col>
                    <el-col :span="8">利用解除申請</el-col>
                </el-row>
                <el-row>
                    <el-col><h1>パートナー</h1></el-col>
                    <el-col :span="8">入社申請</el-col>
                    <el-col :span="8">退社申請</el-col>
                    <el-col :span="8">所属変更申請</el-col>
                    <el-col :span="8">権限変更申請</el-col>
                    <el-col :span="8">作成依頼申請</el-col>
                    <el-col :span="8">利用解除申請</el-col>
                </el-row>
                <el-row>
                    <el-col><h1>特殊ユーザー</h1></el-col>
                    <el-col :span="8">入社申請</el-col>
                    <el-col :span="8">退社申請</el-col>
                    <el-col :span="8">所属変更申請</el-col>
                    <el-col :span="8">権限変更申請</el-col>
                    <el-col :span="8">作成依頼申請</el-col>
                    <el-col :span="8">利用解除申請</el-col>
                </el-row>
            </template>
            トップ画面
        </Layout>
    </div>
</template>

<script>
import Layout from './Layout'

export default {
    components : {
        Layout
    }
}
</script>