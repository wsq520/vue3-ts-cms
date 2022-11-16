import { useStore } from "../store";

export function usePermission(pageName: string, handleName: string) {
    const store = useStore()
    const permissions = store.state.login.permissions
    const verifyPermission = `system:${pageName}:${handleName}`
    //  !! 取反再取反
    return !!permissions.find((item) => item === verifyPermission)
}