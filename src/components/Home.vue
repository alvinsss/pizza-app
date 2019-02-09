<template>
  <div>
    <h1>
      <button @click="goToMenu" class="btn btn-success">Let is order!</button>
    </h1>
  </div>
</template>

<script>
  export default {
    methods:{
      goToMenu(){
        // 跳转上次浏览的页面
        // this.$router.go (-1)
        //指定地址
        // this.$router.replace('/menu')
        //指定路由名字
        // this.$router.replace({name:'menuLink'})
        //通过push进行跳转
        this.$router.push({name:'menuLink'})
      }
    }
  }
</script>
