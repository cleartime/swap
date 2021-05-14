<template>
  <div class="head">
    <span class="logo">UniKiller</span>
    <div class="content">
      <span class="swap">Swap</span>
      <span class="pool">Pool</span>
    </div>
    <span class="wallet">Connect Wallet</span>
  </div>
</template>

<script>
export default {
  name: "CommonHead",
  components: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
.head {
  padding-left: 45px;
  padding-right: 15px;
  display: flex;
  color: #fff;
  line-height: 45px;
  background: #1e3960;
  font-weight: bold;
  .content {
    padding-left: 25px;
    flex: 1;
    width: 600px;
    margin: 0 auto;
    span {
      margin-right: 30px;
    }
  }
  span {
    cursor: pointer;
  }
  .logo {
    font-size: 24px;
  }
}
</style>
