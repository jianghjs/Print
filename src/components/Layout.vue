<template>
    <div class="layout">
        <el-container>
            <el-header class="header">
                <NavMenu/>
            </el-header>
            <el-container>
                <el-aside class="aside">
                    <slot name="aside">aside</slot>
                </el-aside>
                <el-main class="main">
                    <slot>main</slot>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import NavMenu from './Nav'

export default {
    components : {
        NavMenu
    }
}
</script>

<style scoped>

</style>