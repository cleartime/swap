<template>
  <div id="app">
    <Head/>
    <router-view />
  </div>
</template>

<script>
import Head from "@/component/common/head.vue";
export default {
  name: "App",
  components: {
    Head
  },
  data() {
    return {
    };
  },
  computed: {
   
  },
  created() {},
  methods: {
  }
};
</script>

<style lang="scss" scoped>
#app {
}
</style>
