// Bu bir composable: "use" ile başlar, composition API kullanır
// composables/ klasöründe olduğu için otomatik import edilir

export function usePosts() {
  // useState: SSR'da sunucu ile client arasında state'i senkronize tutar
  // normal ref() kullanırsan hydration hatası alabilirsin
  const posts = useState('posts', () => [
    { id: 1, title: 'Nuxt Routing', summary: 'File-based routing nasıl çalışır?' },
    { id: 2, title: 'Auto-import', summary: 'Import yazmadan bileşen kullanmak.' },
    { id: 3, title: 'Composables', summary: 'Tekrar kullanılabilir mantık.' },
  ])

  function getPostById(id: string | number) {
    return posts.value.find(p => String(p.id) === String(id))
  }

  return { posts, getPostById }
}
