import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

const svw = '/scene-view-workspace/'

export default defineConfig({
  lang: 'en-US',
  title: 'TK-Gizmo Lab',
  description: 'Support and manuals for Unity Editor extensions by TK-Gizmo Lab.',
  cleanUrls: true,

  themeConfig: {
    // Shown top-left on pages outside any asset; asset pages override it in NavBarTitle.vue.
    siteTitle: 'TK-Gizmo Lab',

    nav: [
      { text: 'TK-Gizmo Lab', link: '/' }
    ],

    // Keyed by path prefix so each asset gets its own sidebar.
    sidebar: {
      [svw]: [
        { text: 'Overview', link: svw },
        {
          text: 'Manual',
          link: `${svw}manual/`,
          items: [
            { text: 'Overlay', link: `${svw}manual/overlay` },
            { text: 'Saved Settings', link: `${svw}manual/saved-settings` },
            { text: 'Isolate Auto-Switch Rules', link: `${svw}manual/isolate-rules` },
            { text: 'Built-in Presets', link: `${svw}manual/presets` },
            { text: 'Export / Import', link: `${svw}manual/export-import` },
            { text: 'Settings & Data Storage', link: `${svw}manual/settings` }
          ]
        },
        { text: 'Limitations', link: `${svw}limitations` },
        { text: 'FAQ', link: `${svw}faq` },
        { text: 'Changelog', link: `${svw}changelog` },
        { text: 'Support', link: `${svw}support` }
      ]
    },

    search: {
      provider: 'local'
    },

    footer: {
      copyright: '© TK-Gizmo Lab'
    }
  },

  vite: {
    resolve: {
      alias: [
        {
          // Replace the default title so the top-left shows the asset name on asset pages.
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/NavBarTitle.vue', import.meta.url))
        }
      ]
    }
  }
})
