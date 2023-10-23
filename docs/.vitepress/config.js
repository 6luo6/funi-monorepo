import markdownItCustomAttr from 'markdown-it-custom-attrs';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
import component from '../route/component';
module.exports = {
  title: 'Funi 文档',
  description: 'Funi 文档',
  // base:"/",
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/FuniTestComponent/index', activeMatch: '/component/' },
    ],
    sidebar: {
      '/component/': component,
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
