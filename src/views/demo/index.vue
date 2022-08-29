<template>
    <div>

        <ul>
            <li>
                <nav>路由跳转</nav>
                <button @click="goMine">路由跳转至我的</button>
            </li>

            <li>
                <nav>pinia使用方式</nav>
                <div class="text">获取数据({{ userName }})</div>
                <button @click="onChange">改变pinia数据</button>
            </li>
        </ul>

    </div>
</template>

<script lang="ts" setup>

import { useUserStore } from '@/store/modules/user'

const router = useRouter();
const userStore = useUserStore();

const goMine = () => {
    router.push('mine')
}

let userName = computed<string>(()=> userStore.userNmae)

const onChange = ()=>{
    console.log(userStore.increment('新的数据'));
    
}

onMounted(() => {

})
</script>

<style lang="less" scoped>
ul {

    li {
        color: #fff;

        nav {
            background-color: @primary;
            padding: 10px;
        }

        button {
            padding: 10px;
            background-color: @color-primary;
            color: #fff;
            border-radius: 3px;

            &:hover {
                background-color: @color-warning;
                cursor: pointer;
            }
        }

        .text {
            color: @text-color;
        }
    }
}
</style>