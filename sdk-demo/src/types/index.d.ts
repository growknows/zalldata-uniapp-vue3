declare global {
    declare interface Fn<T = any> {
        (...arg: T[]): T
    }
    declare type zalldata  = {
        track: Fn,
        setPara: Fn,
        login: Fn
        registerApp?: Fn
        register?: Fn
    }
    declare interface Uni {
        zalldata: zalldata;
    }
}