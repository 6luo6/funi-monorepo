import FuniButton from './button';

export {
    FuniButton
}
const components = [
    FuniButton
]
const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default install