<template>
    <div id="Home-Recommend-Views" flex="box:mean">
        <div v-for="item in recommends" :key="item.sort">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    #Home-Recommend-Views{
        text-align: center;
        padding: 10px 0 15px;
        border-bottom: 10px solid #eee
    }
    img{
        margin-bottom: 10px;
    }
</style>