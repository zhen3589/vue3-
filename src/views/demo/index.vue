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

            <li>
                <el-row class="mb-4">
                    <el-button>Default</el-button>
                    <el-button type="primary">Primary</el-button>
                    <el-button type="success">Success</el-button>
                    <el-button type="info">Info</el-button>
                    <el-button type="warning">Warning</el-button>
                    <el-button type="danger">Danger</el-button>
                </el-row>
            </li>
        </ul>

    </div>
</template>

<script lang="ts" setup>

import dayjs from 'dayjs'
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { useUserStore } from '@/store/modules/user'
import {sessionTimeoutApi} from '@/http/api/index'

dayjs.extend(isSameOrAfter);

const router = useRouter();
const userStore = useUserStore();

const goMine = () => {
    router.push('mine')
}

let userName = computed<string>(() => userStore.userNmae)

const onChange = () => {
    userStore.increment('新的数据12222')
}

onMounted(() => {

    const FormData = {
        name:'李飞',
        ages:"1"
    }
    sessionTimeoutApi(FormData).then(resl=>{
        console.log(resl);
        if(resl) {
            const data = resl.result;
            userStore.increment(data.from);
        }
    })

})
</script>

<style lang="scss" scoped>
ul {

    li {

        nav {
            padding: 10px;
        }

        button {
            padding: 10px;
            border-radius: 3px;

            &:hover {
                opacity: 0.8;
                cursor: pointer;
            }
        }

        .text {
            padding: 5px 0;
        }
    }
}
</style>