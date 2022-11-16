// 使用dayjs库进行时间格式化
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

// 定义一个默认格式化的格式
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 服务器返回的是utc格式的时间,如果是时间戳要另外封装一个函数
export function formatUtsString(utcString: string, format: string = DATE_TIME_FORMAT) {
    return dayjs.utc(utcString).utcOffset(8).format(format)
}