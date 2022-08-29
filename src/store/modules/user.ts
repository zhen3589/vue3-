import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => {
        return {
            count: 0,
            userNmae: '基础脚手架'
        };
    },
    persist: {
        enabled: true,
        // 自定义持久化参数
        strategies: [
            {
                // 自定义key
                key: 'useUserStore',
                // 自定义存储方式，默认sessionStorage
                storage: localStorage,
                // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
                paths: ['userNmae'],
            }
        ]
    },

    actions: {
        increment(data: string) {
            this.userNmae = data;
        },
    },
});
