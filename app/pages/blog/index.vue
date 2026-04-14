<template>
  <div>
    <h1>Blog</h1>

    <!-- BlogCard bileşenini import yazmadan kullanıyoruz -->
    <!-- v-for ile listeyi döngüyle render ediyoruz -->
    <BlogCard
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :summary="post.summary"
    >
      <!-- slot içeriği: her kartın altında link -->
      <NuxtLink :to="`/blog/${post.id}`">Devamını oku →</NuxtLink>
    </BlogCard>
  </div>
</template>

<script setup>
// Bu sayfanın 'blog' layout'unu kullanmasını söylüyoruz
definePageMeta({ layout: 'blog' })

const { posts } = usePosts()
</script>
