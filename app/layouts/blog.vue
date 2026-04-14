<template>
  <div>
    <AppHeader />
    <div style="display: flex; gap: 2rem;">
      <main style="flex: 1;">
        <!-- Blog sayfasının içeriği buraya gelir -->
        <slot />
      </main>

      <aside style="width: 200px;">
        <h3>Kategoriler</h3>
        <ul>
          <li><NuxtLink to="/blog">Tüm Yazılar</NuxtLink></li>
          <li>Vue</li>
          <li>Nuxt</li>
          <li>TypeScript</li>
        </ul>
      </aside>
    </div>
  </div>
</template>
