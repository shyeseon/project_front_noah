<template>
    <div class="imgList mt-5">
      <div class="list">
        <div class="text-start fs-2 mb-3">
          <router-link to="/"><i class="fa-solid fa-arrow-left-long text-black"></i></router-link>
        </div>
        <div class="d-flex align-items-end mb-4">
          <h2 class="fw-bold mb-0 me-3">{{ projectName }}</h2>
          <h6 class="mb-1">{{ projectCategory }}</h6>
        </div>
        <masonry-wall v-if="imagesLoaded" :items="listImages" :columns="{ default: 3, 1000: 2, 700: 1 }" :gap="15">
          <template #default="{ item, index }">
            <div class="image-item">
              <img :src="item.src" :alt="item.alt" @click="modalOpen(item, index)" />
            </div>
          </template>
        </masonry-wall>
   
        <!-- 데스크탑에서는 기존 모달 사용 -->
        <ImageDetailModal v-if="!isMobile" id="ImageDetailmodal" @close="closeModal" :objectProp="listImages" :selectedIndex="currentSlideIndex"
        />
  
        <!-- 모바일에서는 Swiper 모달 사용 -->
        <SwiperModal
          v-if="isMobile && showSwiperModal"
          :images="listImages"
          :initial-slide="currentSlideIndex"
          @close="closeSwiperModal"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from 'vue';
  import ImageDetailModal from './ImageDetailModal.vue';
  import SwiperModal from './SwiperModal.vue';
  import MasonryWall from '@yeger/vue-masonry-wall';
  import { Modal } from 'bootstrap';

  
  const listImages = ref([
    { pn: 1, pName: "Wilson", pc: "street", in: 1, src: "/Images/street img1.JPG", alt: "Street Image1" },
    { pn: 1, pName: "Wilson", pc: "street", in: 2, src: "/Images/street img2.JPG", alt: "Street Image2" },
    { pn: 1, pName: "Wilson", pc: "street", in: 3, src: "/Images/street img3.JPG", alt: "Street Image3" },
    { pn: 1, pName: "Wilson", pc: "street", in: 4, src: "/Images/street img4.JPG", alt: "Street Image4" },
  ]);
  
  let projectName = ref(listImages.value[0].pName);
  let projectCategory = ref(listImages.value[0].pc);
  let ImageDetailmodal = null;
  
  const imagesLoaded = ref(false);
  const isMobile = computed(() => window.innerWidth <= 768); // 모바일 화면 감지
  const showSwiperModal = ref(false); // Swiper 모달 상태
  const currentSlideIndex = ref(0); // Swiper에서 현재 열려 있는 슬라이드 인덱스
  
  onMounted(() => {
    if (!isMobile.value) {
      ImageDetailmodal = new Modal(document.querySelector("#ImageDetailmodal"));
      preloadImages();
    }
  });
  
  function modalOpen(item, index) {
    if (!isMobile.value) {
      currentSlideIndex.value = index;
      ImageDetailmodal.show();


    } else {
      currentSlideIndex.value = index; // 클릭한 이미지 인덱스 설정
      showSwiperModal.value = true; // 모바일에서 Swiper 모달 열기
    }
  }
  
  function closeModal() {
    if (!isMobile.value) {
      console.log("모달 닫기");
      ImageDetailmodal.hide();
    }
  }
  
  function closeSwiperModal() {
    console.log("Swiper 모달 닫기");
    showSwiperModal.value = false; // Swiper 모달 닫기
  }
  
  //
  function preloadImages() {
  let loadedCount = 0;
  const totalImages = listImages.value.length;

  listImages.value.forEach((item) => {
    const img = new Image();
    img.onload = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        imagesLoaded.value = true;
      }
    };
    img.src = item.src;
  });
}
  </script>
  
  <style scoped>
  .list {
    margin: 0 2.25rem;
  }
  
  .image-item img {
    width: 100%;
    height: auto;
    display: block;
  }
  </style>
  