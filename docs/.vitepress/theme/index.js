import DefaultTheme from 'vitepress/theme'
import funiUI from 'funi-ui';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(funiUI)
  }
}