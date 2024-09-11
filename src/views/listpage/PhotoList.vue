<template>
  <div class="photo-gallery">
    <h2 class="h4 mb-5 mt-4">Models / Automobiles /</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
      <div v-for="photo in photos" :key="photo.id" class="col">
        <RouterLink to="#" class="card h-100 border-0 text-decoration-none">
          <img :src="photo.src" class="card-img-top" :alt="photo.title">
          <div class="card-body ps-0">
            <h5 class="card-title fw-bolder">{{ photo.title }}</h5>
            <small class="text-muted font-lighter">{{ photo.category }}</small>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//dummy data
const photos = ref([
  { id: 1, title: 'Liquid IV',category: 'Lifestyle', src: 'https://www.davehillphoto.com/images/pics/1536/18865_zYcW4F_20240416_hill_liquid_iv_sbc_beach_volleyball_16968.jpg' },
  { id: 2, title: 'Ora Cat',category:'Automotive', src: 'https://www.davehillphoto.com/images/pics/1536/17197_SMt7mI_220122_dh_jvm_oracat_m96_oldcity_08_0266jpeg.jpg' },
  { id: 3, title: 'Toyota Corolla Cross',category:'Automotive', src: 'https://www.davehillphoto.com/images/pics/1536/17145_BOBsQQ_corolla_cross_890b_08732_0031_santee_court_rear_3_4_lifestyle_004846.jpg' },

])
</script>