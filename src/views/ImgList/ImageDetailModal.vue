<template>
  <div class="modal fade" tabindex="-1" >
    <div class="modal-dialog border-0 modal-dialog-centered modal-lg  mw-100">
      <div class="modal-content border-0 text-end ">
        <i class="fa-solid fa-x text-white fs-2 me-5" @click="emit('close')"></i>
        <div class="modal-body p-0">
          <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/Images/street img1.JPG" class="d-block w-100" alt="Street image">
              </div>
              <div class="carousel-item ">
                <img src="/Images/street img2.JPG" class="d-block w-100" alt="Street image">
              </div>
              <div class="carousel-item ">
                <img src="/Images/street img3.JPG" class="d-block w-100" alt="Street image">
              </div>
              <!-- Add more carousel items as needed -->
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

const emit=defineEmits(['close']);

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
}
.modal{
  backdrop-filter:brightness(0.5) ;
}

</style>