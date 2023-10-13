import FuniButton from './button.vue';

FuniButton.install=(app)=>{
    app.component(FuniButton.name, FuniButton)
}
export default FuniButton