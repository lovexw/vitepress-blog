import { defineConfig } from 'upress'
import type { Theme } from '@upress/theme-default/theme'

export default defineConfig<Theme.Config>({
  theme: '@upress/theme-default',
  srcDir: './site',
  base: '/vitepress-blog/defaultTheme/', // 确认这是你的实际部署路径
  
  // 生产环境使用实际域名
  rss: {
    host: 'https://yourdomain.com/vitepress-blog/defaultTheme/'
  },
  
  lang: 'zh-CN', // 使用有效的语言代码
  
  themeConfig: {
    name: 'yue1123',
    filePathToTags: [
      {
        test: /\/notes\//,
        tag: '随笔'
      }
    ],
    sortBy: 'date', // 建议使用日期排序，更符合常规博客需求
    titleOrder: 'contentTitle',
    
    // 导航链接使用正确的相对路径
    nav: [
      { text: '首页', link: '/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' }
    ],
    
    socialLinks: [{ icon: 'github', link: 'https://github.com/yue1123' }],
    footer: {
      copyright: 'Copyright © 2023-present yue1123'
    }
  }
})
