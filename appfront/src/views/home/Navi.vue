<template>
  <div id="app">
      <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
<!--首页按钮 无子集-->
            <el-menu-item index="/index">
              <i class="el-icon-menu"/>
              <span slot="title">首页</span>
            </el-menu-item>
<!--项目管理-->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"/>
                <span>项目</span>
              </template>
              <el-submenu index="2-2">
                <template slot="title">项目查看</template>
                <el-menu-item index="2-2-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
<!--接口管理 多级别-->
            <el-submenu index="/apis">
              <template slot="title">
                <i class="el-icon-menu"/>
                <span>接口</span>
              </template>
<!--              <el-submenu index="/apis">-->
<!--                <template slot="title">接口库</template>-->
                <el-menu-item index="/apis/apiSerch">接口查询</el-menu-item>
                <el-menu-item index="/apis/apiAdd">接口添加</el-menu-item>
<!--              </el-submenu>-->
            </el-submenu>
<!--其他工具 多模块子集-->
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"/>
                <span>工具</span>
              </template>
              <el-menu-item-group>
                <template slot="title">账号相关</template>
                <el-menu-item index="4-1-1">工具1</el-menu-item>
                <el-menu-item index="4-2-1">工具2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">解密相关</template>
                <el-menu-item index="4-2-1">工具1</el-menu-item>
                <el-menu-item index="4-2-2">工具2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
<!--帮助 无子集-->
            <el-menu-item index="/help">
              <i class="el-icon-menu"/>
              <span slot="title">帮助</span>
            </el-menu-item>
<!--设置 无子集-->
            <el-menu-item index="6">
              <i class="el-icon-setting"/>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
      </el-aside>

  </div>
</template>

<script>
export default {
    name: "Navi"
    ,
    data() {
        return {}
    },
    methods: {}

}
</script>

<style scoped>

</style>
