<template>
  <div class="admin-container d-flex container-fluid p-0">
    <div class="admin-content flex-grow-1">
      <div class="manage-category">
        <h3 class="bg-dark text-white p-3 ps-4 mb-4 fw-bold pe-none">
          Manage Category
        </h3>
        <div class="container-fluid content-wrapper">
          <div class="row gx-5">
            <div class="col-md-4">
              <h3 class="fw-bold mb-4 category-title pe-none">Category</h3>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
          </div>

          <div class="row gx-5 mt-4">
            <div class="col-md-4 custom-border">
              <div class="mx-auto w-100">
                <div class="card bg-dark text-white mb-3 custom-card">
                  <div
                    class="card-body d-flex justify-content-between align-items-center"
                  >
                    <span class="pe-none">Photo</span>
                    <button class="btn text-secondary p-0">•••</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 custom-border">
              <CategoryList
                :categories="categories"
                :selectedCategory="selectedCategory"
                @selectCategory="selectCategory"
                @addCategory="addCategory"
                @updateCategory="updateCategory"
                @deleteCategory="confirmDeleteCategory"
                @moveCategory="moveCategory"
              />
            </div>

            <div class="col-md-4 custom-border">
              <SubCategoryList
                :category="selectedCategory"
                @addSubCategory="addSubCategory"
                @updateSubCategory="updateSubCategory"
                @deleteSubCategory="confirmDeleteSubCategory"
                @moveSubCategory="moveSubCategory"
              />
            </div>
          </div>

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

    <!-- 삭제 확인 모달 -->
    <div
      class="modal fade show d-block"
      tabindex="-1"
      role="dialog"
      v-if="isDeleteModalVisible"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Confirmation</h5>
            <button
              type="button"
              class="btn-close"
              @click="cancelDelete"
            ></button>
          </div>
          <div class="modal-body">
            <p v-if="deletingType === 'category'">
              Are you sure you want to delete this category?
            </p>
            <p v-if="deletingType === 'subcategory'">
              Are you sure you want to delete this subcategory?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="cancelDelete"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteConfirmed"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CategoryList from "./CategoryList.vue";
import SubCategoryList from "./SubCategoryList.vue";

// 더미 데이터
const categories = ref([
  {
    id: 2,
    name: "Clothing",
    subCategories: [
      { id: 1, name: "Pants" },
      { id: 2, name: "Sportswear" },
      { id: 3, name: "Accessories" },
    ],
  },
  {
    id: 3,
    name: "Furniture",
    subCategories: [
      { id: 1, name: "Chair" },
      { id: 2, name: "Table" },
      { id: 3, name: "Bottoms" },
    ],
  },
  {
    id: 4,
    name: "Electronics",
    subCategories: [
      { id: 1, name: "TV" },
      { id: 2, name: "Cameras" },
      { id: 3, name: "Smartphones" },
    ],
  },
]);

const selectedCategory = ref(null);
const categoryToDelete = ref(null); // 삭제할 카테고리 ID 저장
const subCategoryToDelete = ref(null); // 삭제할 서브 카테고리 ID 저장
const deletingType = ref(""); // 삭제하는 타입을 구분 (category/subcategory)
const isDeleteModalVisible = ref(false); // 모달 표시 여부

// 카테고리 선택
const selectCategory = (category) => {
  selectedCategory.value = category;
};

// 카테고리 추가
const addCategory = () => {
  const newCategory = { id: Date.now(), name: "New Category" };
  categories.value.push(newCategory);
};

// 카테고리 수정
const updateCategory = (id, newName) => {
  const category = categories.value.find((cat) => cat.id === id);
  if (category) {
    category.name = newName;
  }
};

// 서브 카테고리 추가
const addSubCategory = () => {
  if (selectedCategory.value) {
    if (!selectedCategory.value.subCategories) {
      selectedCategory.value.subCategories = [];
    }
    selectedCategory.value.subCategories.push({
      id: Date.now(),
      name: "New Sub-category",
    });
  }
};

// 서브 카테고리 수정
const updateSubCategory = (subCategoryId, newName) => {
  if (selectedCategory.value && selectedCategory.value.subCategories) {
    const subCategory = selectedCategory.value.subCategories.find(
      (sub) => sub.id === subCategoryId
    );
    if (subCategory) {
      subCategory.name = newName;
    }
  }
};

// 서브 카테고리 삭제 확인 모달 열기
const confirmDeleteSubCategory = (subCategoryId) => {
  subCategoryToDelete.value = subCategoryId;
  deletingType.value = "subcategory";
  isDeleteModalVisible.value = true;
};

// 카테고리 삭제 확인 모달 열기
const confirmDeleteCategory = (id) => {
  categoryToDelete.value = id;
  deletingType.value = "category";
  isDeleteModalVisible.value = true;
};

// 모달에서 삭제 확정
const deleteConfirmed = () => {
  if (deletingType.value === "category") {
    categories.value = categories.value.filter(
      (cat) => cat.id !== categoryToDelete.value
    );
    if (
      selectedCategory.value &&
      selectedCategory.value.id === categoryToDelete.value
    ) {
      selectedCategory.value = null;
    }
    categoryToDelete.value = null;
  } else if (deletingType.value === "subcategory" && selectedCategory.value) {
    selectedCategory.value.subCategories =
      selectedCategory.value.subCategories.filter(
        (sub) => sub.id !== subCategoryToDelete.value
      );
    subCategoryToDelete.value = null;
  }
  isDeleteModalVisible.value = false;
  deletingType.value = "";
};

// 삭제 취소
const cancelDelete = () => {
  isDeleteModalVisible.value = false;
  categoryToDelete.value = null;
  subCategoryToDelete.value = null;
  deletingType.value = "";
};
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

.admin-content {
  flex-grow: 1;
}

.custom-border {
  border-right: 1px solid #dee2e6;
}

.category-title {
  padding-left: 15px;
}

.custom-card .card-body {
  padding: 0.5rem 1rem;
}

.modal {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  margin-top: 10%;
}
</style>
