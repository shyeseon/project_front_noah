<template>
  <div class="side-bar w-100 d-flex">
    <div class="">
      <AdminSidebar></AdminSidebar>
    </div>
    
    <div class="main-content w-100 h-100">
      <div class="h-50" style="min-width: 700px; ">
        <h2 class="mt-4 ms-4 text-start fw-bold">Add new Projects</h2>
        <!-- 등록/취소 버튼 -->
        <div class="text-end">
          <button class="btn btn-info me-3 btn-sm">save</button>
          <button class="btn btn-outline-dark btn-sm me-5">cancel</button>
        </div>
        <!-- 상단 그리드 -->
        <div class="row mt-4"> 
          <!-- 썸네일 -->
          <div class="col-4 ">
            <h6 class=" ms-4 mb-2 text-start fw-bold">Thumbnail image</h6>

            <div class="d-flex justify-content-center">
              <div class="ms-3 me-3 rounded w-50 h-auto d-flex justify-content-center align-items-center" style="border: 2px dashed #add8e6;">
                <p>
                  <span class="text-primary" style="text-decoration: underline;">Click to Upload</span> or drag and drop
                </p>
              </div>
              
              <div class="w-50">
                <img src="@/assets/logo.png" style="width: 100px;"/>
                
              </div>
            </div>
          </div>
          <!-- 프로젝트 이름 -->
          <div class="col-4 text-start">
            <label for="projectname" class="fw-bold ">ProjectName</label>
            <input type="text" class="form-control" id="projectname" name="projectname"  placeholder="Enter your Project">
            
          </div>
          <!-- 카테고리 선택 -->
          <div class="col-4 text-start ">
            <h6 class="fw-bold">Category</h6>
            <div class="p-3 rounded" style="border: 1px solid lightgray;">
              <div class="form-group ">
                <label for="category">category</label>
                <select class="form-control" id="category" name="category">
                  <option value="food">food</option>
                  <option value="person">person</option>
                  <option value="landscape">landscape</option>
                  <option value="another">another</option>
                </select>
              </div>
              <div class="form-group">
                <label for="subcategory">subcategory</label>
                <select class="form-control" id="subcategory" name="subcategory">
                  <option value="food">food</option>
                  <option value="person">person</option>
                  <option value="landscape">landscape</option>
                  <option value="another">another</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5" style=" min-width: 800px;">
        <h6 class="text-start ms-5 fw-bold">Images</h6>
        <hr class="custom-hr ">
        <!-- 드래그 박스 자리 -->
        <div class="d-flex p-3">
          <div class="w-50 h-100 p-5 d-flex" style="min-height: 500px; ">
            <div class="d-flex drag-box w-100 justify-content-center">
              <p class="d-flex align-items-center drag-box rounded" style="border: 1px;">Drag files to upload</p>
            </div>
          </div>
          <!-- 프로그래스 바 -->
          <div class="w-50 h-100">
            <p class="text-start mt-2 fw-bold">Uploading</p>
            <ImageBox></ImageBox>
            <ImageBox></ImageBox>
            <ImageBox></ImageBox>
            <ImageBox></ImageBox>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import AdminSidebar from '@/components/AdminSidebar'
import ImageBox from '@/components/ImageBox'
import { ref } from 'vue';
import { BProgress } from 'bootstrap-vue-3';

const value =ref(45);
const max = ref(100);
</script>

<style scoped>

.ss{
  border: 1px solid;
}

.drag-box{
  border: 3px dotted lightgray;
  border-radius: 10px;
}

.custom-hr {
    width: 90%; /* 너비를 80%로 설정 */
    margin: 20px auto; /* 상하 여백과 좌우 중앙 정렬 */
    border: 0; /* 기본 테두리 제거 */
    height: 2px; /* 선의 두께 설정 */
    background-color: lightgray; /* 색상 설정 */
  }

  select {
  appearance: auto; /* 기본 화살표를 복원 */
  -webkit-appearance: auto;
  -moz-appearance: auto;
}
</style>