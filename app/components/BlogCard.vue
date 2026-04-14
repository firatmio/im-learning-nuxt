<template>
  <article>
    <h2>{{ title }}</h2>
    <p>{{ summary }}</p>
    <!-- slot: bileşeni kullanan yer istediği içeriği buraya koyabilir -->
    <slot />
  </article>
</template>

<script setup>
// defineProps: bileşenin dışarıdan alacağı verileri tanımlar
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    default: 'Özet yok'
  }
})
</script>
