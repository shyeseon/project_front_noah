<template>
  <!-- 이미지 컴포넌트 -->
  <div class="upload-box d-flex ss " style="height: 50px;">
    <!-- 미리보기 사진 -->
    <div class="ss p-1 d-flex align-items-center justify-content-center" style="width: 10%;">
      <img src="@/assets/logo.png" style="width: 50px;" />
    </div>
    <div class="ss p-1 d-flex align-items-center justify-content-center" style="width: 90%;">
      <b-progress :value="value" :max="max" show-progress animated class="w-100"></b-progress>
    </div>
  </div>
  <hr class="custom-hr" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(45);
const max = ref(100); 
</script>

<style scoped>
.custom-hr {
  width: 90%;
  margin: 20px auto;
  border: 0;
  height: 2px;
  background-color: lightgray;
}
</style>
