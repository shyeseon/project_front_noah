<template>
    <nav class="navbar p-0">
      <div class="container-fluid">
        <div class="row flex-nowrap">

          <!-- 사이드바 -->
          <div class="col-auto vh-100 side-bar bg-black">
            <div class="mt-5">
                <h1 class="text-white p-3 border-3 border-top border-bottom">admin</h1>

                <ul class="navbar-na mt-5">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Exit</a>
                </li>
                <li class="nav-item  mt-5">
                    <a class="nav-link text-white" href="#">manage Images</a>
                </li>
                <li class="nav-item  mt-5">
                    <a class="nav-link text-white" href="#">manage Category</a>
                </li>
                </ul>
            </div>
          </div>
  
          <!-- 메인 콘텐츠 -->
          <div class="col p-4 right-div">
            <h1></h1>
          </div>

        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .side-bar {
    min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
    width: 250px; /* 사이드바의 고정 너비 설정 */
  }
  </style>