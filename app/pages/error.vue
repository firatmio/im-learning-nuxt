<template>
  <div>
    <UError redirect="/" :error="{
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.'
    }" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>