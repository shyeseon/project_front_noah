<template>
  <nav class="navbar p-0">
    <!-- 사이드바 -->
    <div class="vh-100 side-bar bg-black text-center d-flex flex-column">
      <div class="mt-5 flex-grow-0">
        <h1 class="admin-title text-white p-3 border-3 border-top border-bottom">admin</h1>

        <ul class="navbar-na mt-5">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Exit</a>
          </li>
          <li class="nav-item mt-5">
            <a class="nav-link text-white" href="../../Admin/ManageImages">manage Images</a>
          </li>
          <li class="nav-item mt-5">
            <a class="nav-link text-white" href="../../Admin/ManageCategory">manage Category</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.side-bar {
  width: 200px;
  min-width: 200px;
  max-width: 200px;
}

.admin-title {
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

ul.navbar-na {
  list-style: none;
  padding-left: 0;
}

.nav-link {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>