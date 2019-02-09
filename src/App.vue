<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
// 引入header
import Header from './components/Header';
// 注册组件header header跟标签冲突，我们重起appHeader
export default {
  components:{
     "app-header":Header
  }
}
</script>

<style>

</style>
