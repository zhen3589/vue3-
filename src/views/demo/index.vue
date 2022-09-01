<template>
    <div>
        <input type="text" name="" id="">
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


        <ul>
            <li v-for="(item, index) in image_data.list" :key="item.id">
                <p>{{ item.title }}</p>
                <!-- <img :src="item.url" alt=""> -->
            </li>
        </ul>

    </div>
</template>

<script lang="ts" setup>

import * as dayjs from 'dayjs'
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { useUserStore } from '@/store/modules/user'
import { sessionTimeoutApi, getImages } from '@/http/api/index'

dayjs.extend(isSameOrAfter);

const router = useRouter();
const userStore = useUserStore();

const goMine = () => {
    router.push('/')
}


const props = defineProps<{
    name: string
}>();

const emit = defineEmits(['click']);


let userName = computed<string>(() => userStore.userNmae)

const image_data = reactive({
    list: [],
    getImages() {
        getImages().then(res => {
            console.log(res);
            if (res) {
                const data = res.result;
                image_data.list = data.list;
            }
        })
    }
})

const onChange = () => {
    getData();
}

onMounted(async () => {
    image_data.getImages()

})

onActivated(()=>{
    
})

const getData = () => {
    sessionTimeoutApi({
        name: 'qwe'
    }).then(res => {
        if (res) {
            const data = res.result;
            userStore.increment(data.name);
            emit('click', data.name)
        }
    })
}
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
            color: $primary;

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