import { defineConfig, type DefaultTheme } from 'vitepress'


export default defineConfig({
  title: 'AdonisJS 中文网',
  description: '由社区提供的 AdonisJS 中文文档站',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/migration/': { base: '/migration/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/xtzero/adonisjs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 CC 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} xtzero.me`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '文档',
      link: '/guide/intro/',
      activeMatch: '/guide/'
    },
    {
      text: '迁移向导',
      link: '/migration/intro/',
      activeMatch: '/migration/'
    },
    {
      items: [
        {
            text: '支持团队',
            link: '/team/',
            activeMatch: '/team/'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'intro/' },
        { text: 'Installation', link: 'install/' },
        { text: 'Folder structure', link: 'folder-structure/' },
        { text: 'Config', link: 'config/' },
        { text: 'Environment variables', link: 'environment/' },
        { text: 'FAQs', link: 'faqs/' },
        { text: 'Releases', link: 'releases/' },
      ]
    },
    {
      text: 'HTTP',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'http-overview/' },
        { text: 'HTTP context', link: 'http-context/' },
        { text: 'Routing', link: 'routing/' },
        { text: 'Controllers', link: 'controllers/' },
        { text: 'Request', link: 'request/' },
        { text: 'Response', link: 'response/' },
        { text: 'Middleware', link: 'middleware/' },
        { text: 'Cookies', link: 'cookies/' },
        { text: 'BodyParser middleware', link: 'body-parser-middleware/' },
        { text: 'File uploads', link: 'file-uploads/' },
        { text: 'Validation', link: 'validation/' },
        { text: 'Session', link: 'session/' },
        { text: 'URL builder', link: 'url-builder/' },
        { text: 'Exception handling', link: 'exception-handling/' },
        { text: 'Views and Templates', link: 'views-and-templates/' },
        { text: 'Static files server', link: 'static-files-server/' },
        { text: 'Assets bundling', link: 'assets-bundling/' },
      ]
    },
    {
      text: 'Database',
      collapsed: false,
      items: [
        { text: 'SQL & ORMs', link: 'sql_and_orms/' },
        { text: 'Redis', link: 'redi/s' }
      ]
    },
    {
      text: 'Security',
      collapsed: false,
      items: [
        { text: 'Hash', link: 'hashing/' },
        { text: 'Encryption', link: 'encryption/' },
        { text: 'Securing SSR apps', link: 'securing-ssr-apps/' },
        { text: 'Rate limiter', link: 'rate-limiter/' },
        { text: 'CORS', link: 'cors/' },
      ]
    },
    {
      text: 'Auth',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'auth/' },
        { text: 'Verifying user credentials', link: 'verifying-user-credentials/' },
        { text: 'Session guard', link: 'session-guard/' },
        { text: 'Access tokens guard', link: 'access-tokens-guard/' },
        { text: 'Basic auth guard', link: 'basic-auth-guard/' },
        { text: 'Custom auth guards', link: 'custom-auth-guards/' },
      ]
    },
    {
      text: 'Mail',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'mail/' },
        { text: 'Configuring message', link: 'configuring-message/' },
        { text: 'Class-based emails', link: 'class-based-emails/' },
        { text: 'Fake mailer', link: 'fake-mailer/' },
        { text: 'Creating custom transports', link: 'creating-custom-transports/' },
      ]
    },
    {
      text: 'Fundamentals',
      collapsed: false,
      items: [
        { text: 'Application', link: 'application/' },
        { text: 'Application Lifecycle', link: 'application-lifecycle/' },
        { text: 'AdonisRC file', link: 'adonis-rc-file/' },
        { text: 'IoC container', link: 'ioc-container/' },
        { text: 'Container services', link: 'container-services/' },
        { text: 'Service Providers', link: 'service-providers/' },
        { text: 'Config providers', link: 'config-providers/' },
        { text: 'Async Local Storage', link: 'async-local-storage/' },
        { text: 'TypeScript build process', link: 'typeScript-build-process/' },
        { text: 'Extending the framework', link: 'extending-the-framework/' },
        { text: 'Scaffolding', link: 'scaffolding/' },
        { text: 'Tooling config', link: 'tooling-config/' },
      ]
    },
    {
      text: 'Digging Deeper',
      collapsed: false,
      items: [
        { text: 'Authorization', link: 'authorization/' },
        { text: 'Emitter', link: 'emitter/' },
        { text: 'Logger', link: 'logger/' },
        { text: 'Social authentication', link: 'social-authentication/' },
        { text: 'Internationalization', link: 'internationalization/' },
      ]
    },
    {
      text: 'Testing',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'testing/' },
        { text: 'HTTP tests', link: 'http-tests/' },
        { text: 'Database tests', link: 'database-tests/' },
        { text: 'Browser tests', link: 'browser-tests/' },
        { text: 'Command-line tests', link: 'command-line-tests/' },
        { text: 'Mocks and fakes', link: 'mocks-and-fakes/' },
      ]
    },
    {
      text: 'Ace command line',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'ace/' },
        { text: 'Creating commands', link: 'creating-commands/' },
        { text: 'Command arguments', link: 'command-arguments/' },
        { text: 'Command flags', link: 'command-flags/' },
        { text: 'Prompts', link: 'prompts/' },
        { text: 'Terminal UI', link: 'terminal-ui/' },
        { text: 'REPL', link: 'repl/' },
      ]
    },
    {
      text: 'Reference',
      collapsed: false,
      items: [
        { text: 'Commands', link: 'commands/' },
        { text: 'Edge helpers and tags', link: 'edge-helpers-and-tags/' },
        { text: 'Events', link: 'events/' },
        { text: 'Exceptions', link: 'exceptions/' },
        { text: 'Helpers', link: 'helpers/' },
      ]
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: 'intro/' },
      ]
    },
    {
      text: 'Migration guide',
      items: [
        { text: 'Introduction', link: 'migration-guide/' },
        { text: '1. Upgrade packages', link: 'upgrade-packages/' },
        { text: '2. Upgrade Module System', link: 'upgrade-module-system/' },
        { text: '3. Upgrade ESLint and Prettier', link: 'upgrade-eslint-and-prettier/' },
        { text: '4. Upgrade Env Config', link: 'upgrade-env-config/' },
        { text: '5. Upgrade Aliases', link: 'upgrade-aliases/' },
        { text: '6. Migrate IOC Imports', link: 'migrate-ioc-imports/' },
        { text: '7. Fix Relative Imports', link: 'fix-relative-imports/' },
        { text: '8. Upgrade Entrypoints', link: 'upgrade-entrypoints/' },
        { text: '9. Upgrade Config Files', link: 'upgrade-config-files/' },
        { text: '10. Upgrade Command Options', link: 'upgrade-command-options/' },
        { text: '11. Upgrade RC File', link: 'upgrade-rc-file/' },
        { text: 'Next Steps', link: 'next-steps/' },
      ]
    },
    {
      text: 'Other',
      items: [
        { text: 'Other breaking changes', link: 'other-breaking-changes/' },
        { text: 'Migrate to Vite', link: 'migrate-to-vite/' },
        { text: 'Migrate a package to v6', link: 'migrate-a-package-to-v6/' },
        { text: 'Sticking to V5', link: 'sticking-to-v5/' },
        { text: 'Sticking to V5', link: 'sticking-to-v5/' },
      ]
    },
    {
      text: 'Legacy docs',
      items: [
        { text: 'Webpack Encore', link: 'webpack-encore/' },
      ]
    },
    {
      text: 'Legacy Validator Docs',
      items: [
        { text: 'Introduction', link: 'legacy-validator-docs/' },
        { text: 'Custom Messages', link: 'custom-messages/' },
        { text: 'Error Reporters', link: 'error-reporters/' },
        { text: 'Schema Caching', link: 'schema-caching/' },
        { text: 'Custom validation rules', link: 'custom-validation-rules/' },
      ]
    }
  ]
}