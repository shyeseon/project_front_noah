<template>
  <!-- 데스크탑 화면에서는 flex 레이아웃 유지 -->
  <div class="layout-container d-none d-md-flex">
    <Sidebar v-if="!isLoginPage && !check" />
    <AdminSidebar v-if="!isLoginPage && check"/>
    <router-view />
  </div>

  <!-- 모바일 화면에서는 상단에 Minography 제목과 햄버거 버튼 표시 -->
  <nav class="navbar d-md-none navbar-light bg-light" v-if="!check">
    <div class="container-fluid">
      <h1 class="navbar-brand mb-0 h1 fw-bold">Minography</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>

  <!-- 오프캔버스 사이드바 (모바일 화면에서만 사용) -->
  <div v-if="!check"
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasSidebar"
    aria-labelledby="offcanvasSidebarLabel"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <Sidebar v-if="!check" />
      <AdminSidebar v-if="check" />
    </div>
  </div>

  <!-- 모바일 화면에서도 콘텐츠가 표시되도록 router-view -->
 
</template>

<script setup>
import { ref, watch } from "vue";
import Sidebar from "@/components/common/MainPageSidebar";
import AdminSidebar from "@/components/AdminSidebar";
import { useRoute } from "vue-router";

const route = useRoute();
const check = ref(false);
const url = ref("");
const isLoginPage = ref(false); // 로그인 페이지 여부

watch(
  () => (url.value = route.path),
  (newUrl) => {
    if (newUrl.includes("/Admin")) {
      check.value = true;
    } else {
      check.value = false;
    }

    // login이면 사이드바 숨기기
    if (newUrl.includes("/Login")) {
      isLoginPage.value = true;
    } else {
      isLoginPage.value = false;
    }
  }
);
</script>

<style scoped>
.layout-container {
  display: flex;
}

@media screen and (max-width: 768px) {
  .layout-container {
    display: block;
  }

  .offcanvas {
    width: 250px;
  }
}
</style>
