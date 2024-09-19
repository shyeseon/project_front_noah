<template>
  <div class="admin-container d-flex container-fluid p-0">
    <AdminSidebar />

    <div class="admin-content flex-grow-1">
      <div class="manage-category">
        <h3 class="bg-dark text-white p-3 ps-4 mb-4 fw-bold">
          manage Category
        </h3>
        <div class="container-fluid content-wrapper">
          <!-- 실제 콘텐츠가 포함된 row -->
          <div class="row gx-5">
            <!-- Category 제목 -->
            <div class="col-md-4">
              <h3 class="fw-bold mb-4 category-title">Category</h3>
            </div>
            <!-- 첫 번째 컬럼을 위한 빈 공간 -->
            <div class="col-md-4"></div>
            <!-- 두 번째 컬럼을 위한 빈 공간 -->
            <div class="col-md-4"></div>
          </div>
          
          <div class="row gx-5 mt-4">
            <!-- 첫 번째 컬럼 -->
            <div class="col-md-4 custom-border">
              <div class="mx-auto w-100">
                <div class="card bg-dark text-white mb-3 custom-card">
                  <div
                    class="card-body d-flex justify-content-between align-items-center"
                  >
                    <span>Photo</span>
                    <button class="btn text-secondary p-0">•••</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 두 번째 컬럼 -->
            <div class="col-md-4 custom-border">
              <div class="mx-auto w-100">
                <!-- 첫 번째 카드 -->
                <div class="card bg-dark text-white mb-3 custom-card">
                  <div
                    class="card-body d-flex justify-content-between ps-2 align-items-center"
                  >
                    <!-- 첫 번째 그룹 시작 -->
                    <div class="d-flex align-items-center">
                      <button class="btn p-0 me-2">
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="gray"
                        >
                          <circle cx="8" cy="6" r="2"></circle>
                          <circle cx="8" cy="14" r="2"></circle>
                          <circle cx="12.2" cy="4" r="2"></circle>
                          <circle cx="12.2" cy="10" r="2"></circle>
                          <circle cx="12.2" cy="16" r="2"></circle>
                        </svg>
                      </button>
                      <span>Clothing</span>
                    </div>
                    <!-- 첫 번째 그룹 끝 -->
                    <!-- 두 번째 버튼 -->
                    <button class="btn p-0 text-secondary">•••</button>
                  </div>
                </div>
                <!-- 두 번째 카드 -->
                <div class="card mb-3 custom-card">
                  <div
                    class="card-body d-flex justify-content-between ps-2 align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <button class="btn p-0 me-2">
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="gray"
                        >
                          <circle cx="8" cy="6" r="2"></circle>
                          <circle cx="8" cy="14" r="2"></circle>
                          <circle cx="12.2" cy="4" r="2"></circle>
                          <circle cx="12.2" cy="10" r="2"></circle>
                          <circle cx="12.2" cy="16" r="2"></circle>
                        </svg>
                      </button>
                      <span>Furniture</span>
                    </div>
                    <button class="btn p-0 text-secondary">•••</button>
                  </div>
                </div>
                <!-- 세 번째 카드 -->
                <div class="card mb-3 custom-card">
                  <div
                    class="card-body d-flex justify-content-between ps-2 align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <button class="btn p-0 me-2">
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="gray"
                        >
                          <circle cx="8" cy="6" r="2"></circle>
                          <circle cx="8" cy="14" r="2"></circle>
                          <circle cx="12.2" cy="4" r="2"></circle>
                          <circle cx="12.2" cy="10" r="2"></circle>
                          <circle cx="12.2" cy="16" r="2"></circle>
                        </svg>
                      </button>
                      <span>Electronics</span>
                    </div>
                    <button class="btn p-0 text-secondary">•••</button>
                  </div>
                </div>
                <!-- 새로운 카테고리 추가 -->
                <div class="mb-3">
                  <div>
                    <span>+ </span>
                    <span class="text-decoration-underline">New Category</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 세 번째 컬럼 -->
            <div class="col-md-4">
              <div class="mx-auto w-100">
                <!-- 첫 번째 카드 -->
                <div class="card bg-dark text-white mb-3 custom-card">
                  <div
                    class="card-body d-flex justify-content-between ps-2 align-items-center"
                  >
                    <!-- 첫 번째 그룹 시작 -->
                    <div class="d-flex align-items-center">
                      <button class="btn p-0 me-2">
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="gray"
                        >
                          <circle cx="8" cy="6" r="2"></circle>
                          <circle cx="8" cy="14" r="2"></circle>
                          <circle cx="12.2" cy="4" r="2"></circle>
                          <circle cx="12.2" cy="10" r="2"></circle>
                          <circle cx="12.2" cy="16" r="2"></circle>
                        </svg>
                      </button>
                      <span>Footwear</span>
                    </div>
                    <!-- 첫 번째 그룹 끝 -->
                    <!-- 두 번째 버튼 -->
                    <button class="btn p-0 text-secondary">•••</button>
                  </div>
                </div>
                <!-- 두 번째 카드 -->
                <div class="card mb-3 custom-card">
                  <div
                    class="card-body d-flex justify-content-between ps-2 align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <button class="btn p-0 me-2">
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="gray"
                        >
                          <circle cx="8" cy="6" r="2"></circle>
                          <circle cx="8" cy="14" r="2"></circle>
                          <circle cx="12.2" cy="4" r="2"></circle>
                          <circle cx="12.2" cy="10" r="2"></circle>
                          <circle cx="12.2" cy="16" r="2"></circle>
                        </svg>
                      </button>
                      <span>Tops</span>
                    </div>
                    <button class="btn p-0 text-secondary">•••</button>
                  </div>
                </div>
                <!-- 세 번째 카드 -->
                <div class="card mb-3 custom-card">
                  <div
                    class="card-body d-flex justify-content-between ps-2 align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <button class="btn p-0 me-2">
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="gray"
                        >
                          <circle cx="8" cy="6" r="2"></circle>
                          <circle cx="8" cy="14" r="2"></circle>
                          <circle cx="12.2" cy="4" r="2"></circle>
                          <circle cx="12.2" cy="10" r="2"></circle>
                          <circle cx="12.2" cy="16" r="2"></circle>
                        </svg>
                      </button>
                      <span>Bottoms</span>
                    </div>
                    <button class="btn p-0 text-secondary">•••</button>
                  </div>
                </div>
                <!-- 새로운 서브카테고리 추가 -->
                <div class="mb-3">
                  <div>
                    <span>+ </span>
                    <span class="text-decoration-underline"
                      >New Sub-category</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- row 종료 -->

          <!-- 버튼 그룹 - 새로운 row로 분리 -->
          <div class="row button-group">
            <div class="col-12 d-flex justify-content-end">
              <button class="btn btn-choice btn-primary me-2">Save</button>
              <button class="btn btn-choice btn-outline-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from "@/components/AdminSidebar";
</script>

<style scoped>
.content-wrapper {
  padding: 80px;
}

.button-group {
  margin-top: 150px;
}

.admin-container {
  display: flex;
  min-height: 100vh;
}

.btn-choice {
  height: 40px;
  width: 120px;
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

/* 각 컬럼의 내용을 왼쪽 정렬 */
.col-md-4 > div {
  padding-left: 15px;
  padding-right: 15px;
}

/* Category 제목 스타일 */
.category-title {
  padding-left: 15px;
}
</style>