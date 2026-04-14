<template>
  <div>
    <!-- pending: veri henüz gelmedi -->
    <p v-if="pending">Yükleniyor...</p>

    <!-- error: bir hata oluştu -->
    <p v-else-if="error">Hata: {{ error.message }}</p>

    <!-- data: veri geldi -->
    <div v-else>
      <h1>{{ data.title }}</h1>
      <p>{{ data.body }}</p>
      <p><strong>Yazı ID:</strong> {{ route.params.id }}</p>
    </div>

    <NuxtLink to="/blog">← Blog listesine dön</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'blog' })

const route = useRoute()

// useFetch: URL'i otomatik izler, route değişince yeniden çeker
// SSR'da sunucuda çalışır → sayfa kaynağında veri görünür
const { data, pending, error } = await useFetch(
  () => `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
)
</script>
