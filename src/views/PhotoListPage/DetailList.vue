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
        <masonry-wall v-if="imagesLoaded" :items="displayedImages" :columns="{ default: 3, 1000: 2, 700: 1 }" :gap="15" >
          <template #default="{ item, index }">
              <div class="image-item" >
                <img class="listImage" :src="item.src" :alt="item.alt" @click="modalOpen(item, index)" />
              </div>
          </template>
          
        </masonry-wall>     
     
        <div ref="observerTarget" class="w-100 h-auto"></div>
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
  import { ref, computed, onMounted } from 'vue';
  import ImageDetailModal from './ImageDetailModal.vue';
  import SwiperModal from './SwiperModal.vue';
  import MasonryWall from '@yeger/vue-masonry-wall';
  import { Modal } from 'bootstrap';
  import InfiniteScroll from '@/components/InfiniteScroll.vue';
  
  const listImages = ref([
    { pn: 1, pName: "Wilson", pc: "street", in: 1, src: "/Images/street img1.JPG", alt: "Street Image1" },
    { pn: 1, pName: "Wilson", pc: "street", in: 2, src: "/Images/street img2.JPG", alt: "Street Image2" },
    { pn: 1, pName: "Wilson", pc: "street", in: 3, src: "/Images/street img3.JPG", alt: "Street Image3" },
    { pn: 1, pName: "Wilson", pc: "street", in: 4, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 4, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 5, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 6, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 7, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 8, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 9, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 10, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 11, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 12, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 13, src: "/Images/street img1.JPG", alt: "Street Image1" },
    { pn: 1, pName: "Wilson", pc: "street", in: 14, src: "/Images/street img2.JPG", alt: "Street Image2" },
    { pn: 1, pName: "Wilson", pc: "street", in: 15, src: "/Images/street img3.JPG", alt: "Street Image3" },
    { pn: 1, pName: "Wilson", pc: "street", in: 16, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 17, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 18, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 19, src: "/Images/street img2.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 20, src: "/Images/street img2.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 21, src: "/Images/street img2.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 22, src: "/Images/street img3.JPG", alt: "Street Image1" },
    { pn: 1, pName: "Wilson", pc: "street", in: 23, src: "/Images/street img3.JPG", alt: "Street Image2" },
    { pn: 1, pName: "Wilson", pc: "street", in: 24, src: "/Images/street img3.JPG", alt: "Street Image3" },
    { pn: 1, pName: "Wilson", pc: "street", in: 25, src: "/Images/street img2.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 26, src: "/Images/street img1.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 27, src: "/Images/street img2.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 28, src: "/Images/street img2.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 29, src: "/Images/street img3.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 30, src: "/Images/street img2.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 31, src: "/Images/street img1.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 32, src: "/Images/street img2.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 33, src: "/Images/street img1.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 34, src: "/Images/street img3.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 35, src: "/Images/street img1.JPG", alt: "Street Image1" },
    { pn: 1, pName: "Wilson", pc: "street", in: 36, src: "/Images/street img2.JPG", alt: "Street Image2" },
    { pn: 1, pName: "Wilson", pc: "street", in: 37, src: "/Images/street img3.JPG", alt: "Street Image3" },
    { pn: 1, pName: "Wilson", pc: "street", in: 38, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 39, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 40, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 41, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 42, src: "/Images/street img4.JPG", alt: "Street Image4" },
    { pn: 1, pName: "Wilson", pc: "street", in: 43, src: "/Images/street img4.JPG", alt: "Street Image4" },
  ]);
  
  let projectName = ref(listImages.value[0].pName);
  let projectCategory = ref(listImages.value[0].pc);
  let ImageDetailmodal = null;
 
  const imagesLoaded = ref(false);
  const isMobile = computed(() => window.innerWidth <= 768); // 모바일 화면 감지
  const showSwiperModal = ref(false); // Swiper 모달 상태
  const currentSlideIndex = ref(0); // Swiper에서 현재 열려 있는 슬라이드 인덱스
 

  onMounted(() => {
    
    preloadImages();
    if (!isMobile.value) {
      ImageDetailmodal = new Modal(document.querySelector("#ImageDetailmodal"));
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

const { displayedImages, observerTarget } = InfiniteScroll(listImages, 12);




  </script>
  
  <style scoped>
  html {
  scroll-behavior: smooth;
}
  .list {
    margin: 0 2.25rem;
  }
  
  .image-item img {
    width: 100%;
    height: auto;
    display: block;
  }
 .skeleton_loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
}
/* 스켈레톤 이미지 */
.skeleton_img {
    width: 100%;
    height: 100%;
}
.skeleton_loading * {
    background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    border-radius: 1rem;
    background-size: 100% 100%;
    background-position: 100% 0;
    animation: load 1s infinite;
}
 


  </style>
  