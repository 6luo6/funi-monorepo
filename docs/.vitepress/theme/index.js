import DefaultTheme from 'vitepress/theme';
import funiUI from 'funi-ui';
import '@vitepress-demo-preview/component/dist/style.css';
import { AntDesignContainer } from '@vitepress-demo-preview/component';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(funiUI);
    app.component('demo-preview', AntDesignContainer);
  },
};
