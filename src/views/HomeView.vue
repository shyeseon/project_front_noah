<template>
  <div class="home w-100 px-3">
    <PhotoList @click="linkToDetail"/>
  </div>
</template>

<script setup>
import PhotoList from '@/views/PhotoListPage/PhotoList.vue';
import { useRouter } from 'vue-router';

const router= useRouter();
function linkToDetail(){
  router.push("./ListPage/DetailList.vue")
}
</script>

