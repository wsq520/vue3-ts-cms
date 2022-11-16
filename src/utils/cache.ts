class LocalCache {
    setCache(key: string, value: any) {
        // JSON.stringify() 将内容转化成字符串类型
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    getCache(key: string) {
        const value = window.localStorage.getItem(key)
        if (value) {
            // JSON.parse() 将内容转化成一个对象
            return JSON.parse(value)
        }
    }

    deleteCache(key: string) {
        window.localStorage.removeItem(key)
    }

    cleaarCache() {
        window.localStorage.clear()
    }
}

export default new LocalCache()