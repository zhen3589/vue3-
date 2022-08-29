<template>
    <div>

        <ul>
            <li>
                <nav>路由跳转</nav>
                <button @click="goMine">路由跳转至我的</button>
            </li>
        </ul>

    </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const goMine = () => {
    router.push('mine')
}

onMounted(()=>{
    console.log('挂载完成');
    
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
    }
}
</style>