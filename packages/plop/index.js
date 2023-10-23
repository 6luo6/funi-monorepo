const fs = require("fs");
module.exports = (plop) => {
  // 创建一个生成器
  plop.setGenerator('component', {
    description: '新增一个组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名（Funi开头）：',
        default: '',
        validate: value => {
          if (/.+/.test(value)) {
            return true
          }
          if (!value.startsWith("Funi")) {
            return '组件名为Funi开头'
          }
          return '组件名为必填'
        }
      },
      // {
      //   type: 'input',
      //   name: 'name',
      //   message: '请输入导出的名称：',
      //   default: '',
      //   validate: value => {
      //     if (/.+/.test(value)) {
      //       return true
      //     }
      //     return '导出的名称为必填'
      //   }
      // }
    ],
    actions: data => {
      const { name } = data
      let component = fs.readFileSync('../docs/route/component.js', 'utf8')
      let startIndex=component.indexOf("[")
      let endIndex=component.lastIndexOf("]")
      console.log(component.slice(startIndex,endIndex+1))
      component=JSON.parse(component.slice(startIndex,endIndex+1))
      component.push({
        "text": "基础组件",
        "collapsed": false,
        "items": [{ "text": name, "link": `/component/${name}/index` }],
      })
      let content=`export default ${JSON.stringify(component,null,2)}`
      fs.writeFileSync("../docs/route/component.js",content);
      const actions = [
        {
          type: 'add',
          path: `./components/${name}/src/index.vue`,
          templateFile: 'plop/index.vue.hbs',
          abortOnFail: true
        },
        {
          type: 'add',
          path: `./components/${name}/index.js`,
          templateFile: 'plop/index.js.hbs',
          abortOnFail: true
        },
        {
          type: 'add',
          path: `../docs/component/${name}/index.md`,
          templateFile: 'plop/demo-docs.md.hbs',
          abortOnFail: true
        },
        {
          type: 'add',
          path: `../docs/component/${name}/demo/index.vue`,
          templateFile: 'plop/demo-docs.vue.hbs',
          abortOnFail: true
        }
      ]
      return actions
    }
  })
}
