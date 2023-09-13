<script setup lang="ts">

import image from '&/assets/image.svg'

</script>

<template>
  <h1>Manually imported static asset</h1>
  <img :src="image" />
  <h1>Directly referenced static asset</h1>
  <img src="&/assets/image.svg" width="200" height="200" alt="plugin-vue"/>
</template>

<style scoped>
  img {
    width: 200px;
    height: 200px;
    outline: 1px dotted black;
  }
</style>
