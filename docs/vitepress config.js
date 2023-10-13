import markdownItCustomAttr from 'markdown-it-custom-attrs';

export default {
  markdown: {
    config: (md) => {
      md.use(markdownItCustomAttr, "images", {
        'data-fancybox': "gallery"
      })
    }
  }
}