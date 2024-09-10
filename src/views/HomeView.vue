<template>
  <div class="home w-100 px-3">
    <PhotoList msg="Welcome "/>
  </div>
</template>

<script>
import PhotoList from '@/views/listpage/PhotoList.vue';

export default {
  name: 'HomeView',
  components: {
    PhotoList
  }
}
</script>
