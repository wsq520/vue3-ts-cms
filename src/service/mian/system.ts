import hyRequest from "..";

import { IDataType } from "../types";

export function getPageListData(url: string, queryInfo: any) {
    return hyRequest.post<IDataType>({
        url: url,
        data: queryInfo
    })
}

// 删除用户的网络请求
export function deletePageData(url: string) {
    return hyRequest.delete<IDataType>({
        url: url
    })
}

// 新建用户
export function createPageData(url: string, newData: any) {
    return hyRequest.post<IDataType>({
        url: url,
        data: newData
    })
}

// 编辑
export function editPageData(url: string, editData: any) {
    return hyRequest.patch<IDataType>({
        url: url,
        data: editData
    })
}