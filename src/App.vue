<template>
  <m-header />
  <Tab/>
  <router-view></router-view>
</template>

<script>
import Header from './components/header/header.vue'
import Tab from './components/tab/tab.vue'
export default {
  components: {
    MHeader: Header,
    Tab
  }
}
</script>
