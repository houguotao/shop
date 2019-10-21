<template>
  <div>
      <h1>我是test组件</h1>
  </div>
</template>
<script>
export default {
    data(){
        return {
            name:'aa'
        }
    },
    methods:{
        doSomething(){
            console.log('子组件渲染完毕')
        },
    }
}
</script>
<style>
</style>
