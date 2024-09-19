<template>
  <div class="admin-container d-flex container-fluid p-0">
    <AdminSidebar />
    <div class="admin-content flex-grow-1">
      <div class="manage-category">
        <h3 class="bg-dark text-white p-3 ps-4 mb-4 fw-bold">manage Images</h3>
        <div class="manage-image-padding">
          <div class="d-flex justify-content-end mb-3">
            <button class="btn btn-primary">Create Project</button>
          </div>
          <table class="table table-hover text-center align-middle">
            <thead>
              <tr>
                <th>No</th>
                <th>thumbnail</th>
                <th>Project name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Images</th>
                <th>Views</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.no }}</td>
                <td>
                  <img
                    :src="item.thumbnail"
                    alt="thumbnail"
                    style="width: 100px; height: 100px;"
                  />
                </td>
                <td>
                  <span class="underline-text">
                    {{ item.projectName }}
                  </span>
                </td>

                <td>{{ item.category }}</td>
                <td>{{ item.date }}</td>
                <td>+{{ item.images }}</td>
                <td>{{ item.views }}</td>
                <td>
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <button class="btn btn-secondary img-edit-buttons btn-sm mb-1 w-50">edit</button>
                    <button class="btn btn-danger img-edit-buttons btn-sm w-50">delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation" class="mt-5 pt-3">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#">&laquo;</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">&raquo;</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AdminSidebar from "@/components/AdminSidebar";

const items = ref([
  { 
    no: 41, 
    thumbnail: 'https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A', 
    projectName: '프로젝트 이름', 
    category: 'Food', 
    date: '2022.12.05', 
    images: 7, 
    views: 5
  },
  { 
    no: 40, 
    thumbnail: 'https://static.wtable.co.kr/image/production/service/recipe/1718/531d4f4a-f370-40ba-b7d3-e844f356ee5d.jpg', 
    projectName: '프로젝트 이름', 
    category: 'Portraits', 
    date: '2022.12.05', 
    images: 6, 
    views: 3 
  },
  { 
    no: 39, 
    thumbnail: 'https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_e59809eb-bdc9-44d7-9d8f-2e7f0e47ba91/store16/88b344473efdb0d217f35b22e67194ab_731x688.JPG', 
    projectName: '프로젝트 이름', 
    category: 'Street', 
    date: '2022.12.05', 
    images: 12, 
    views: 4 
  },
  { 
    no: 38, 
    thumbnail: 'https://img.choroc.com/newshop/goods/009179/009179_1.jpg', 
    projectName: '프로젝트 이름', 
    category: 'Food', 
    date: '2022.12.05', 
    images: 16, 
    views: 2 
  },
]);
</script>

<style scoped>
.manage-image-padding {
  padding: 40px;
}

.img-edit-buttons {
  height: 35px;
}

.underline-text {
  display: inline-block;
  border-bottom: 1px solid #000; 
  padding-bottom: 4px; /* 글자와 밑줄 사이의 간격을 조절 */
}

</style>
