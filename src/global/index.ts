import { App } from 'vue'
// 导入注册组件函数
import registerElement from './register-element'
import registerProperties from './register-properties'

export function registerApp(app: App): void {
  registerElement(app)
  app.use(registerProperties)
}
