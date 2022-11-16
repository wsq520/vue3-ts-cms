<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="info" @click="handleResetClick"
            ><el-icon><refresh /></el-icon>重置</el-button
          >
          <el-button type="primary" @click="handleQueryClick"
            ><el-icon><search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import HyForm from "../../../base-ui/form";

import { Refresh, Search } from "@element-plus/icons-vue";

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true,
    },
  },
  components: {
    HyForm,
    Refresh,
    Search,
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, {emit}) {
    // 双向绑定的属性应该是由配置文件的field决定
    // 1. formData 中的属性应该是动态决定
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
      // console.log(formOriginData);
    }
    const formData = ref(formOriginData);

    // 2.点击重置按钮
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key];
      }
      emit('resetBtnClick')
    };

    // 3.实现搜索功能
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    };
  },
});
</script>

<style scoped>
.handle-btns {
  text-align: right;
  margin: 0 50px 20px 0;
}
</style>