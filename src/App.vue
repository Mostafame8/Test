<template>
  <div>
    <header-component></header-component>
    <board-component></board-component>
  </div>
</template>

<script>
import BoardComponent from './components/BoardComponent.vue';
export default {
  components: { BoardComponent },
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background: no-repeat url('./assets/defaults/background.png');
  background-size: cover;
  z-index: -1;
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>
