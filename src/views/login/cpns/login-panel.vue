<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";

// 导入ui库里面的icon图标组件
import { Iphone, Avatar } from "@element-plus/icons-vue";

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone,
    Iphone,
    Avatar,
  },
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    const currentTab = ref<string>("account");

    // 2.定义方法
    const handleLoginClick = function () {
      if (currentTab.value === "account") {
        accountRef.value?.loginAction(isKeepPassword.value);
      } else {
      }
    };

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick,
    };
  },
});
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 120px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
