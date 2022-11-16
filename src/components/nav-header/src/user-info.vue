<template>
  <div class="user-info">
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-avatar :size="20" :src="circleUrl"></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "../../../store";
import { useRouter } from "vue-router"
import localCache from "../../../utils/cache"

// 导入icon图标组件
import { ArrowDown } from "@element-plus/icons-vue";

export default defineComponent({
  components: {
    ArrowDown,
  },
  setup() {
    const store = useStore();
    const name = computed(() => {
      return store.state.login.userInfo.name;
    });
    // 地址是 ui 提供的
    const circleUrl =
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

    // 退出登录
    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    return {
      name,
      circleUrl,
      handleExitClick
    };
  },
});
</script>

<style scoped lang="less">
.el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>