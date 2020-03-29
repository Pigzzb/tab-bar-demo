<template>
  <div class="tab-bar-item" @click="toPage">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="fontActive"><slot name="item-title"></slot></div>
  </div>
</template>

<script>
  export default {
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    name: "TabBarItem",
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.path.indexOf(this.$route.path) !== -1
      },
      fontActive() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      toPage() {
        this.$router.replace(this.path).catch(() => {})
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 12px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 4px;
  }
</style>
