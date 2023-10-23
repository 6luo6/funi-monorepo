const fs = require("fs");
let components = [
  "ElAffix",
  "ElAlert",
  "ElAutocomplete",
  "ElAutoResizer",
  "ElAvatar",
  "ElBacktop",
  "ElBadge",
  "ElBreadcrumb",
  "ElBreadcrumbItem",
  "ElButton",
  "ElButtonGroup",
  "ElCalendar",
  "ElCard",
  "ElCarousel",
  "ElCarouselItem",
  "ElCascader",
  "ElCascaderPanel",
  "ElCheckTag",
  "ElCheckbox",
  "ElCheckboxButton",
  "ElCheckboxGroup",
  "ElCol",
  "ElCollapse",
  "ElCollapseItem",
  "ElCollapseTransition",
  "ElColorPicker",
  "ElConfigProvider",
  "ElContainer",
  "ElAside",
  "ElFooter",
  "ElHeader",
  "ElMain",
  "ElDatePicker",
  "ElDescriptions",
  "ElDescriptionsItem",
  "ElDialog",
  "ElDivider",
  "ElDrawer",
  "ElDropdown",
  "ElDropdownItem",
  "ElDropdownMenu",
  "ElEmpty",
  "ElForm",
  "ElFormItem",
  "ElIcon",
  "ElImage",
  "ElImageViewer",
  "ElInput",
  "ElInputNumber",
  "ElLink",
  "ElMenu",
  "ElMenuItem",
  "ElMenuItemGroup",
  "ElSubMenu",
  "ElPageHeader",
  "ElPagination",
  "ElPopconfirm",
  "ElPopover",
  "ElPopper",
  "ElProgress",
  "ElRadio",
  "ElRadioButton",
  "ElRadioGroup",
  "ElRate",
  "ElResult",
  "ElRow",
  "ElScrollbar",
  "ElSelect",
  "ElOption",
  "ElOptionGroup",
  "ElSelectV2",
  "ElSkeleton",
  "ElSkeletonItem",
  "ElSlider",
  "ElSpace",
  "ElStatistic",
  "ElCountdown",
  "ElSteps",
  "ElStep",
  "ElSwitch",
  "ElTable",
  "ElTableColumn",
  "ElTableV2",
  "ElTabs",
  "ElTabPane",
  "ElTag",
  "ElText",
  "ElTimePicker",
  "ElTimeSelect",
  "ElTimeline",
  "ElTimelineItem",
  "ElTooltip",
  "ElTransfer",
  "ElTree",
  "ElTreeSelect",
  "ElUpload",
];
let exportComponent = [];
components=components.map((item) => {
  let exportName = item.replace("El", "Funi");
  item = item + " as " + exportName;
  exportComponent.push(exportName);
  return item
});
const content = `import "element-plus/dist/index.css";
import { defineAsyncComponent } from 'vue';
import { ${components.join(",")} } from "element-plus";
//局部导出
export { ${exportComponent.join(",")} }

//导出组件
const components = [${exportComponent}];
//funi自定义组件
const FuniComponents=import.meta.glob("./**/src/index.vue")
//全部引用
const install = (app) => {
    //element组件
    components.forEach((component) => {
        component.name=component.name.replace("El", "Funi")
        app.component(component, component);
    });
    //自动注册components下的组件
    for(var key in FuniComponents){
      //匹配文件夹的名称作为组件名
      let name=key.match(/\\.\\/(\\S*)\\/src/)[1]
      app.component(name, defineAsyncComponent(FuniComponents[key]));
    }
}
export default {
  install
}
`;
fs.writeFile("./index.js",content,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("创建成功")
    }
});
