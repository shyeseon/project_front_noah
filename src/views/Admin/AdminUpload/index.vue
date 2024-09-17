<template>
  <div class="d-flex h-100 w-100">
    <AdminSidebar />
    <div class="main-content flex-grow-1 p-4 d-flex flex-column">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2>Add new Projects</h2>
        <div>
          <button class="btn btn-primary me-2">save</button>
          <button class="btn btn-outline-secondary">cancel</button>
        </div>
      </div>
      
      <div class="row mb-4">
        <div class="col-md-4">
          <h6 class="mb-2">Thumbnail image</h6>
          <div class="border rounded p-3 text-center d-flex flex-column justify-content-center align-items-center" style="height: 200px;">
            <div v-if="!thumbnailPreview" class="mb-2">
              <i class="fas fa-image fa-2x text-muted"></i>
              <p class="mb-2">Drag and drop or click to upload</p>
              <input
                type="file"
                ref="thumbnailInput"
                @change="handleThumbnailUpload"
                accept="image/*"
                class="d-none"
              />
              <button class="btn btn-sm btn-outline-primary" @click="$refs.thumbnailInput.click()">Select Image</button>
            </div>
            <div v-else class="w-100 h-100 position-relative">
              <img :src="thumbnailPreview" alt="Thumbnail preview" class="img-fluid h-100 object-fit-cover" />
              <button class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2" @click="removeThumbnail">Remove</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h6 class="mb-2">Project Name</h6>
          <input type="text" class="form-control" v-model="projectName" placeholder="Enter project name" />
        </div>
        <div class="col-md-4">
          <h6 class="mb-2">Category</h6>
          <div class="border rounded p-3">
            <div class="mb-3">
              <label for="category" class="form-label">category</label>
              <select class="form-select" v-model="category" id="category">
                <option value="">Select category</option>
                <option value="food">food</option>
                <option value="person">person</option>
                <option value="landscape">landscape</option>
              </select>
            </div>
            <div>
              <label for="subcategory" class="form-label">subcategory</label>
              <select class="form-select" v-model="subcategory" id="subcategory">
                <option value="">Select subcategory</option>
                <option value="food">food</option>
                <option value="person">person</option>
                <option value="landscape">landscape</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <h6 class="mb-3">Images</h6>
      <div class="row">
        <div class="col-md-6">
          <div class="border rounded p-3 text-center d-flex flex-column justify-content-center align-items-center" style="height: 400px;">
            <div class="mb-3">
              <i class="fas fa-upload fa-3x text-muted"></i>
            </div>
            <p>Drag files to upload</p>
            <div class="mt-3">
              <button class="btn btn-outline-primary">Select Files</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-3" style="height: 400px;">
            <h6 class="mb-3">Uploading</h6>
            <div>
              <div class="mb-3" v-for="file in uploadingFiles" :key="file.name">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <span>{{ file.name }}</span>
                  <span>{{ file.size }}</span>
                  <button class="btn btn-sm btn-link text-danger">×</button>
                </div>
                <div class="progress" style="height: 4px;">
                  <div class="progress-bar" role="progressbar" :style="{ width: file.progress + '%' }" :aria-valuenow="file.progress" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="d-flex justify-content-between mt-1">
                  <span>{{ file.status }}</span>
                  <span>{{ file.speed }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AdminSidebar from '@/components/AdminSidebar';

const projectName = ref('');
const category = ref('');
const subcategory = ref('');
const thumbnailPreview = ref(null);

const uploadingFiles = ref([
  { name: 'Photo.png', size: '7.5 mb', progress: 37, status: '37% done', speed: '90KB/sec' },
  { name: 'Task.doc', size: '2 mb', progress: 65, status: '65% done', speed: '120KB/sec' },
  { name: 'Dashboard.png', size: '1.4 mb', progress: 100, status: 'Completed', speed: '' }
]);

const handleThumbnailUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      thumbnailPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const removeThumbnail = () => {
  thumbnailPreview.value = null;
};
</script>

<style scoped>
.main-content {
  height: 100vh;
  overflow-y: auto;
}

.cursor-pointer {
  cursor: pointer;
}

.form-label {
  margin-bottom: 0.5rem;
}

.progress {
  height: 4px;
}

.object-fit-cover {
  object-fit: cover;
}
</style>