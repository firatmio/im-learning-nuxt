<template>
  <div>
    <h1>Ana Sayfa</h1>
    <p>Nuxt routing öğreniyoruz!</p>

    <nav>
      <!-- NuxtLink = Vue Router'ın <RouterLink>'i, ama Nuxt'a özel -->
      <NuxtLink to="/about">Hakkında sayfasına git</NuxtLink>
      |
      <NuxtLink to="/blog">Blog'a git</NuxtLink>
    </nav>
  </div>
</template>
