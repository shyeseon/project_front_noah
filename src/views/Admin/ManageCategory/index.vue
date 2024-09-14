<template>
  <div class="admin-container d-flex container-fluid p-0">
    <AdminSidebar />

    <div class="admin-content flex-grow-1">
      <div class="manage-category">
        <h4 class="bg-dark text-white p-3 mb-4 fw-bold">manage Category</h4>
        <div class="container-fluid content-wrapper p-5">
          <h3 class="mb-4 fw-bold">Category</h3>
          <!-- gx-2 클래스를 사용하여 컬럼 간 여백 설정 -->
          <div class="row gx-2">
            <!-- 첫 번째 컬럼 -->
            <div class="col-md-2 custom-border">
              <!-- Photo 카드 내용 -->
              <div class="card bg-dark text-white mb-3 custom-card">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <span>Photo</span>
                  <button class="btn btn-dark p-0">•••</button>
                </div>
              </div>
            </div>
            <!-- 두 번째 컬럼 -->
            <div class="col-md-5 custom-border">
              <!-- Bootstrap 유틸리티 클래스로 카드 너비 조정 -->
              <div class="mx-auto w-75">
                <div class="card bg-dark text-white mb-3 custom-card">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <span>Clothing</span>
                    <button class="btn btn-dark p-0">•••</button>
                  </div>
                </div>
                <div class="card mb-3 custom-card">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <span>Electronics</span>
                    <button class="btn btn-light p-0">•••</button>
                  </div>
                </div>
                <div class="card mb-3 custom-card">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <span>Furniture</span>
                    <button class="btn btn-light p-0">•••</button>
                  </div>
                </div>
                <div class="mb-3">
                  <div>
                    <span>+ New Category</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 세 번째 컬럼 -->
            <div class="col-md-5">
              <!-- Bootstrap 유틸리티 클래스로 카드 너비 조정 -->
              <div class="mx-auto w-75">
                <div class="card bg-dark text-white mb-3 custom-card">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <span>Footwear</span>
                    <button class="btn btn-dark p-0">•••</button>
                  </div>
                </div>
                <div class="card mb-3 custom-card">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <span>Tops</span>
                    <button class="btn btn-light p-0">•••</button>
                  </div>
                </div>
                <div class="card mb-3 custom-card">
                  <div class="card-body d-flex justify-content-between align-items-center">
                    <span>Bottoms</span>
                    <button class="btn btn-light p-0">•••</button>
                  </div>
                </div>
                <div class="mb-3">
                  <div>
                    <span>+ New Sub-category</span>
                  </div>
                </div>

                <div class="d-flex justify-content-end mt-4">
                  <button class="btn btn-choice w-25 btn-primary me-2">Save</button>
                  <button class="btn btn-choice w-25 btn-outline-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div> <!-- row 종료 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from "@/components/AdminSidebar";
</script>

<style scoped>
.admin-container {
  display: flex;
  min-height: 100vh;
}

.btn-choice {
  height: 40px;
}

.card {
  border-radius: 0;
  height: 40px;
}

.admin-content {
  flex-grow: 1;
}

.custom-card .card-body {
  padding: 0.5rem 1rem;
}

.btn {
  line-height: 1;
}

/* 컬럼 사이에 수직선을 추가 */
.custom-border {
  border-right: 1px solid #dee2e6;
}

</style>
