<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { ElForm } from "element-plus";
import localCache from "../../../utils/cache";

import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const store = useStore();

    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? "",
    });
    // InstanceType 是一个函数:获取构造函数类型的实例类型
    const formRef = ref<InstanceType<typeof ElForm>>();

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 判断是否记住密码
          if (isKeepPassword) {
            localCache.setCache("name", account.name);
            localCache.setCache("password", account.password);
          } else {
            localCache.deleteCache("name");
            localCache.deleteCache("password");
          }
          // 2.开始进行登录验证
          store.dispatch("login/accountLoginAction", { ...account });
        }
      });
    };

    return {
      account,
      rules,
      loginAction,
      formRef,
    };
  },
});
</script>

<style scoped>
</style>