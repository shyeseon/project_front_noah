<template>
  <nav class="navbar p-0">
    <!-- 사이드바 -->
    <div class="vh-100 side-bar bg-black ">
      <div class="mt-5">
          <h1 class="text-white p-3 border-3 border-top border-bottom">admin</h1>

          <ul class="navbar-na mt-5">
          <li class="nav-item">
              <a class="nav-link text-white" href="#">Exit</a>
          </li>
          <li class="nav-item mt-5">
              <a class="nav-link text-white" href="#">manage Images</a>
          </li>
          <li class="nav-item mt-5">
              <a class="nav-link text-white" href="#">manage Category</a>
          </li>
          </ul>
      </div>
    </div>
   
  </nav>
</template>

<script setup>
</script>

<style scoped>
.side-bar{
  width: 200px;
}
ul.navbar-na {
  list-style: none; /* 점 제거 */
  padding-left: 0;  /* 기본 패딩 제거 */
}

</style>