<template>
  <div
    class="container d-flex align-items-center justify-content-center"
    style="height: 100vh"
  >
    <div class="">
      <h3 class="mb-4 pb-4 fw-bold text-center">Admin</h3>
      <form class="mt-5" @submit.prevent="handleLogin">
        <div class="mb-3">
          <input
            type="text"
            class="form-control custom-input border border-secondary"
            placeholder="ID"
            v-model="loginInfo.id"
          />
          <small v-if="loginError === 'id'" class="text-danger">
            Invalid Id
          </small>
        </div>
        <div class="mb-3 mt-4 pt-2">
          <input
            type="password"
            class="form-control custom-input border border-secondary"
            placeholder="PASSWORD"
            v-model="loginInfo.password"
          />
          <small v-if="loginError === 'password'" class="text-danger">
            Invalid Password
          </small>
        </div>
        <button type="submit" class="btn btn-dark custom-input mt-4" :disabled="!isLoginFormValid">
          Login
        </button>
        <small v-if="loginError === 'both'" class="text-danger mt-2 d-block">
          The account does not exist
        </small>
      </form>
      <div class="mt-3">
        <a href="#" class="text-start">Forgot your Id</a>
        <span class="text-primary"> / </span>
        <a href="#" class="text-start">password</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

// 로그인 실패 시 사용
const loginError = ref("");

// 로그인 작성 폼
const loginInfo = ref({
  id: "",
  password: "",
});


const handleLogin = () => {
  // 임시 비밀번호
  const tempId = "admin";
  const tempPassword = "12345";
  console.log(JSON.parse(JSON.stringify(loginInfo.value)));

  // 로그인 성공 시 admin manage images 페이지로 이동
  if(loginInfo.value.id === tempId && loginInfo.value.password === tempPassword) {
    router.push("/Admin/ManageImages");
  } else{
    // if(loginInfo.value.id !== tempId && loginInfo.value.password !== tempPassword) {
    //   loginError.value = "both";
    // } else if (loginInfo.value.id !== tempId) {
    //   loginError.value = "id";
    // } else {
    //   loginError.value = "password";
    // }
    loginError.value = 
      (loginInfo.value.id !== tempId && loginInfo.value.password !== tempPassword) ? "both"
      : loginInfo.value.id !== tempId ? "id"
      : "password";
  }
};

// 로그인 버튼 활성화
const isLoginFormValid = computed(() => {
  return loginInfo.value.id !== "" && loginInfo.value.password !== "";
});
</script>

<style scoped>
.custom-input {
  width: 450px;
  max-width: 100%;
  height: 50px;
  font-weight: bold;
}
</style>
