import markdownItCustomAttr from 'markdown-it-custom-attrs';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
module.exports = {
  title: 'Funi 文档',
  description: 'Funi 文档',
  // base:"/",
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/button', activeMatch: '/component/' },
    ],
    sidebar: {
      '/component/': [
        {
          text: '基础组件',
          collapsed: false,
          items: [{ text: 'Button 按钮', link: '/component/button' }],
        },
      ],
    },
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/static/fancybox.css' }],
    ['script', { src: '/static/fancybox.umd.js' }],
  ],
  markdown: {
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'vitesse-dark',
    // },
    // lineNumbers: true,
    config: (md) => {
      // md.use(markdownItCustomAttr, 'images', {
      //   'data-fancybox': 'gallery',
      // });
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
};
