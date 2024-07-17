<template>
  <div v-if="isLoading" class="loader">
    <v-progress-circular
      indeterminate
      color="orange"
      size="80"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
   data() {
    return {
      isLoading: false
    };
  },
  // async beforeCreate() {
  //   this.$root.$emit('start-loading');
  // },
  // async created() {
  //   await new Promise(resolve => setTimeout(resolve, 2000));
  //   this.$root.$emit('stop-loading');
  // }
  mounted() {
    this.$root.$on('start-loading', () => {
      this.isLoading = true;
    });
    this.$root.$on('stop-loading', () => {
      this.isLoading = false;
    });
  },
   beforeDestroy() {
    this.$root.$off('start-loading');
    this.$root.$off('stop-loading');
  }
}
</script>

<style  >
.loader {
  position: fixed;
  top:4rem;
  left:4rem;
  width: 100%;
  height: 100%;
  background: rgba(255, 182, 99, 0.9) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1111111;
}
</style>
