<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { useSidebar } from 'vitepress/theme'

// Add an entry here when a new asset manual is added.
const assets = [
  { prefix: '/scene-view-workspace/', title: 'Scene View Workspace' }
]

const { site, page } = useData()
const { hasSidebar } = useSidebar()

const current = computed(() => {
  const path = '/' + page.value.relativePath
  const asset = assets.find((a) => path.startsWith(a.prefix))
  return asset
    ? { title: asset.title, link: asset.prefix }
    : { title: site.value.themeConfig.siteTitle ?? site.value.title, link: '/' }
})
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="withBase(current.link)">
      <span>{{ current.title }}</span>
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

.title:hover {
  opacity: 0.6;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}
</style>
