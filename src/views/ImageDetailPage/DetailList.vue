<template>
    <div class="imgList mt-5">
        <div class="list">
            <div class="text-start fs-2 mb-3 "  >
            <router-link to="/"><i class="fa-solid fa-arrow-left-long text-black"></i></router-link>
            </div>
            <div class="d-flex align-items-end mb-4">
                <h2 class="fw-bold mb-0 me-3 ">{{ projectName}}</h2>
                <h6 class="mb-1"> {{ projectCategory }}</h6>
             </div>
            <masonry-wall :items="listImages" :columns="{ default: 3, 1000: 2, 700: 1 }" :gap="15" >
                <!--  각 이미지 항목이 어떻게 렌더링될지를 결정하기 위해서 slot을 반드시 사용해야 함
                  슬롯을 통해 masonry-wall 내부에서 각 item 데이터를 받아서 렌더링하는 방식 
                  vue-masonry-wall은 기본 슬롯을 사용해야 하므로, 슬롯 이름을 변경할 수는 없음-->
                <template #default="{ item }">
                <div class="image-item">
                    <img :src="item.src" :alt="item.alt" @click="modalOpen" />
                </div>
              </template>
            </masonry-wall>
            <ImageDetailModal id="ImageDetailmodal" @close="closeModal" />
        </div>
    </div>
</template>

<script setup>
import {  onMounted, ref } from 'vue';
import ImageDetailModal from './ImageDetailModal.vue';
import MasonryWall from '@yeger/vue-masonry-wall'
import { Modal } from 'bootstrap';


const listImages = ref([
    {pn:1, pName:"Wilson", pc:"street", in:1,  src: "/Images/street img1.JPG", alt:"Street Image1"},
    {pn:1, pName:"Wilson", pc:"street",in:2,  src: "/Images/street img2.JPG", alt:"Street Image2"},
    {pn:1, pName:"Wilson", pc:"street",in:3,  src: "/Images/street img3.JPG", alt:"Street Image3"},
    {pn:1, pName:"Wilson", pc:"street", in:4, src: "/Images/street img4.JPG", alt:"Street Image4"},
    {pn:1, pName:"Wilson", pc:"street",in:6, src: "/Images/street img4.JPG", alt:"Street Image4"},
    {pn:1, pName:"Wilson", pc:"street",in:5, src: "/Images/street img2.JPG", alt:"Street Image2"}
    
])

let projectName= ref(listImages.value[0].pName);
let projectCategory = ref(listImages.value[0].pc);


let ImageDetailmodal=null;
onMounted(()=>{
    ImageDetailmodal = new Modal(document.querySelector("#ImageDetailmodal"));

})

function modalOpen(){  

    console.log("모달열기")
    ImageDetailmodal.show();
}
function closeModal(){
    console.log("모달 닫기")
    ImageDetailmodal.hide();
}
</script>

<style scoped>

.list{
    margin: 0 2.25rem;
}

.image-item img {
  width: 100%;
  height: auto;
  /* 블록 레벨 요소로 설정되어 자동 높이 조절 */
  display: block;
}

</style>