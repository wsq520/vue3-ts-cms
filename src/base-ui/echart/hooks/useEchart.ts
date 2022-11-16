import * as echarts from "echarts";

import ChinaMapData from '../data/china.json'

echarts.registerMap('china', ChinaMapData)

export default function(el: HTMLElement) {
    const echartInstance = echarts.init(el)

    const setOptions = (options: echarts.EChartsOption) => {
        echartInstance.setOption(options)
    }

    const updateSize = () => {
        echartInstance.resize()
    }

    // 让实例具备响应式
    window.addEventListener('resize', () => {
        echartInstance.resize()
    })

    return {
        echartInstance,
        setOptions,
        updateSize
    }
}