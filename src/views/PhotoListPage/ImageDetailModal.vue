<template>
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog border-0 modal-dialog-centered modal-lg  mw-100">
      <div class="modal-content border-0 text-end ">
        <i class="fa-solid fa-x text-white fs-2 me-5 closeBtn" @click="emit('close')"></i>

        <div class="modal-body p-0">
          <!-- 캐러셀을 닫았다가 다시 열 때 작동하지 않는 문제를 방지하기 위해 새로운 열 때 캐러셀을 리렌더링 -->
          <div id="imageCarousel" class="carousel slide" :key="currentIndex"  data-bs-ride="true" >
            <div class="carousel-inner">
              <div class="carousel-item" :class="{ active: index === currentIndex }" v-for="(image, index) in props.objectProp" :key="index">
                <img :src="image.src" :alt="image.alt"  class="d-block w-100 detailImage" 
                  @click="handleZoom(index)"
                  >       
              </div>
            </div>

            <button class="carousel-control-prev prevIcon"  type="button" data-bs-target="#imageCarousel"  data-bs-slide="prev">
              <i class="fa-solid fa-angle-left fs-1 fw-bold"></i>
              <span class="visually-hidden">Prev</span>
            </button>

            <button class="carousel-control-next nextIcon"  type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
              <i class="fa-solid fa-chevron-right fs-1 fw-bold"></i>
              <span class="visually-hidden">Next</span>
            </button>

          </div>
        </div>
        <div class="modal-footer justify-content-center border-0">
          <div class="text-white fs-6" >1 / 16</div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  onMounted, ref, watch } from 'vue';

let ModalClose=null;
let nextIcon=null;
let prevIcon=null;
onMounted(() => {
  ModalClose = document.querySelector(".closeBtn");
  ModalClose.addEventListener("click", CarouselReset);

});

const emit=defineEmits(['close']);

const props = defineProps(['objectProp','selectedIndex']);
const currentIndex = ref(props.selectedIndex);


let nowZoom = 100;
let magnify = ref(false);

function handleZoom(index){
  let elements = document.querySelectorAll(".detailImage"); 
  if(!magnify.value){
    nowZoom = nowZoom + 50;
    magnify.value=!magnify.value;
  }else{
    nowZoom = 100;
    magnify.value=!magnify.value;
  }
  elements[index].style.zoom = nowZoom + "%"; 
}

function CarouselReset(){
  nowZoom = 100;
  magnify.value = false;
  let elements = document.querySelectorAll(".detailImage");
  elements.forEach(element => {
    element.style.zoom = "100%";
  });
}

watch(() => props.selectedIndex, (newValue) => {
  currentIndex.value = newValue;
});

</script>

<style scoped>



.modal-dialog {
  max-width: 80%;
}
.modal-content{
  background: none;
}
.carousel-item img {
  object-fit: contain;
  height: 80vh;
  cursor: zoom-in;
}
.modal{
  backdrop-filter:brightness(0.5) ;
}

</style>