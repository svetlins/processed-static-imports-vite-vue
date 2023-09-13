<script setup lang="ts">

import image from '@test/assets/image.svg'

const mode = import.meta.env.MODE

</script>

<template>
  <h3> {{ mode }}  </h3>

  <h1>Manually imported static asset</h1>
  <img :src="image" alt="manually imported" />

  <h1>Directly referenced static asset</h1>
  <img src="@test/assets/image.svg" alt="direct-reference"/>
</template>

<style scoped>
  img {
    width: 200px;
    height: 200px;
    outline: 1px dotted black;
  }
</style>
