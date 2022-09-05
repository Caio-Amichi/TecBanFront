<template>
  <div>
    <b-icon-gear class="icon-alert" />
  </div>
</template>

<script>

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  }
}
</script>

<style scoped>
.icon-alert{
  color: #EF5350;
}
</style>
