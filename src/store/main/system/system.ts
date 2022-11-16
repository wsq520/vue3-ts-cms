import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { ISystemState } from "./types";

import { getPageListData, deletePageData, createPageData, editPageData } from "@/service/mian/system";

const systemModule: Module<ISystemState, IRootState> = {
    namespaced: true,
    state() {
        return {
            usersList: [],
            usersCount: 0,
            roleList: [],
            roleCount: 0,
            goodsList: [],
            goodsCount: 0,
            menuList: [],
            menuCount: 0
        }
    },
    mutations: {
        changeUsersList(state, userList: any) {
            state.usersList = userList
        },
        changeUsersCount(state, userCount: number) {
            state.usersCount = userCount
        },
        changeRoleList(state, list: any) {
            state.roleList = list
        },
        changeRoleCount(state, count: number) {
            state.roleCount = count
        },
        changeGoodsList(state, list: any) {
            state.goodsList = list
        },
        changeGoodsCount(state, count: number) {
            state.goodsCount = count
        },
        changeMenuList(state, list: any) {
            state.menuList = list
        },
        changeMenuCount(state, count: number) {
            state.menuCount = count
        }
    },
    getters: {
        pageListData(state) {
            return (pageName: string) => {
                return (state as any)[`${pageName}List`]
            }
        },
        pageListCount(state) {
            return (pageName: string) => {
                return (state as any)[`${pageName}Count`]
            }
        }
    },
    actions: {
        async getPageListAction({ commit }, payload: any) {
            // 1.获取pageUrl
            const pageName = payload.pageName

            // 拼接 pageUrl
            // 方法一:
            const pageUrl = `/${pageName}/list`

            // 方法二:
            // let pageUrl = ''
            // switch (pageName) {
            //     case 'users':
            //         pageUrl = '/users/list'
            //         break
            //     case 'role':
            //         pageUrl = '/role/list'
            //         break
            // }

            // 2.对页面发送网络请求

            const pageResult = await getPageListData(pageUrl, payload.queryInfo)

            // 3.将数据存储到state里面
            const { list, totalCount } = pageResult.data

            const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

            console.log(changePageName);

            commit(`change${changePageName}List`, list)
            commit(`change${changePageName}Count`, totalCount)

            // 使用switch 方法去commit方法
            // switch (pageName) {
            //     case 'users':
            //         commit(`changeUsersList`, list)
            //         commit(`changeUsersCount`, totalCount)
            //         break
            //     case 'role':
            //         commit(`changeRoleList`, list)
            //         commit(`changeRoleCount`, totalCount)
            //         break
            // }

        },
        async deletePageDataAction({ dispatch }, payload: any) {
            const { pageName, id } = payload
            const pageUrl = `${pageName}/${id}`
            await deletePageData(pageUrl)
            // 重新请求数据
            dispatch('getPageListAction', {
                pageName,
                queryInfo: {
                    offset: 0,
                    size: 10
                }
            })
        },
        async createPageDataAction({ dispatch }, payload: any) {
            const { pageName, newData } = payload
            const pageUrl = `/${pageName}`
            await createPageData(pageUrl, newData)
            // 重新请求最新数据
            dispatch('getPageListAction', {
                pageName,
                queryInfo: {
                    offset: 0,
                    size: 10
                }
            })
        },
        async editPageDataAction({ dispatch }, payload: any) {
            const { pageName, editData, id } = payload
            const pageUrl = `/${pageName}/${id}`
            await editPageData(pageUrl, editData)
            // 重新请求最新数据
            dispatch('getPageListAction', {
                pageName,
                queryInfo: {
                    offset: 0,
                    size: 10
                }
            })
        }
    }
}

export default systemModule