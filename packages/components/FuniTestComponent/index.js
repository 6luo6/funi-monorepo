import FuniTestComponent from './FuniTestComponent.vue'

FuniTestComponent.install = (app) => {
    // 注册组件
    app.component('FuniTestComponent', FuniTestComponent)
  }
export default FuniTestComponent
