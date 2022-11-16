<template>
  <div class="nav-header">
    <el-icon class="flod-menu">
      <expand v-if="isFold" @click="handleFoldChange" />
      <fold v-else @click="handleFoldChange" />
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import UserInfo from "./user-info.vue";

import HyBreadcrumb, { IBreadcrumb } from "../../../base-ui/breadcrumb";

import { useStore } from "../../../store";
import { useRoute } from "vue-router";
import { pathMapBreadcrumbs } from "../../../utils/map-menus";

// 导入icon图标组件
import { Expand, Fold } from "@element-plus/icons-vue";

export default defineComponent({
  components: {
    Expand,
    Fold,
    UserInfo,
    HyBreadcrumb,
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldChange = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    // 面包屑数据
    const store = useStore();
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });

    return {
      isFold,
      breadcrumbs,
      handleFoldChange,
    };
  },
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .flod-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>