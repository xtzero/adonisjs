import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'AdonisJS China',
    srcDir: 'docs',
    ignoreDeadLinks: true,
    lastUpdated: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: '/logo.png', width: 24, height: 24 },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/xtzero/adonisjs' }
        ],
        nav: [
            { text: 'AdonisJS 中文网', link: '/zh' },
            { text: '迁移指南', link: '/zh/migration' }
        ],
        search: {
            provider: 'local',
        },
    },
})