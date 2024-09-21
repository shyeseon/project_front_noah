<template>
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog border-0 modal-dialog-centered modal-lg  mw-100">
      <div class="modal-content border-0 text-end ">
        <i class="fa-solid fa-x text-white fs-2 me-5" @click="emit('close')"></i>

        <div class="modal-body p-0">
          <!-- 캐러셀을 닫았다가 다시 열 때 작동하지 않는 문제를 방지하기 위해 새로운 열 때 캐러셀을 리렌더링 -->
          <div id="imageCarousel" class="carousel slide" :key="currentIndex" data-bs-ride="carousel" >
            <div class="carousel-inner">
              <div class="carousel-item" :class="{ active: index === currentIndex }" v-for="(image, index) in props.objectProp" :key="index">
                <img :src="image.src" :alt="image.alt"  class="d-block w-100 detailImage" 
                
                  @click="handleZoom(index)"
                  @dblclick="zoomReset(index)">       
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel"  data-bs-slide="prev">
              <i class="fa-solid fa-angle-left fs-1 fw-bold"></i>
              <span class="visually-hidden">Prev</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
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
import { computed, onMounted, ref, watch } from 'vue';


const emit=defineEmits(['close']);
onMounted(() => {
  const modalElement = document.querySelector('.modal');
});

const props = defineProps(['objectProp','selectedIndex']);
const currentIndex = ref(props.selectedIndex);

let nowZoom = 100;
function handleZoom(index) {
	nowZoom = nowZoom + 30;
  
  if(nowZoom >= 150){
    nowZoom = 150;
  }
zooms(index);
  }
function zoomReset(index){
    nowZoom = 100;
    zooms(index);
  }
function zooms(index){
  let elements = document.querySelectorAll(".carousel-item"); 
  elements[index].style.zoom = nowZoom + "%"; 
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