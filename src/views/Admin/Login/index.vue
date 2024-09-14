<template>
    <div class="container d-flex align-items-center justify-content-center" style="height: 100vh;">
      <div class="">
        <h3 class="mb-4 pb-4 fw-bold text-center">Admin</h3>
        <form class="mt-5">
          <div class="mb-3">
            <input type="text" class="form-control custom-input border border-secondary" placeholder="ID">
          </div>
          <div class="mb-3 mt-4 pt-2">
            <input type="password" class="form-control custom-input border border-secondary" placeholder="PASSWORD">
          </div>
          <button type="submit" class="btn btn-dark custom-input mt-4">Login</button>
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
</script>

<style scoped>
.custom-input {
  width: 450px;
  max-width: 100%;
  height: 50px;
  font-weight: bold;
}
</style>
