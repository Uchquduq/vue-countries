<template>
  <v-app id="inspire">
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: true,
    group: null,
    alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style>
img {
  width: 24px;
}
</style>