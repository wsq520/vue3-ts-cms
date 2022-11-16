import { App } from "vue";

import { formatUtsString } from "@/utils/date-format";

export default function registerProperties(app: App) {
    // 一般全局属性会使用 $ 作为开头
    app.config.globalProperties.$filters = {
        formatTime(value: string) {
            return formatUtsString(value)
        }
    }
}