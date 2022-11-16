import { App } from 'vue'
// 导入ui的基础样式
import 'element-plus/theme-chalk/base.css'
// 导入组件
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain
]
// 使用一个函数将导入组件挨个注册
export default function (app :App):void {
  for (const component of components) {
    // component 是一个对象，取出它的 name 就是对应组件名称
    app.component(component.name, component)
  }
}
