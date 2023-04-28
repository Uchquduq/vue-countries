<template>
  <v-app-bar :elevation="0" class="">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="d-flex align-center mt-1">
      <router-link :to="{ name: 'CountryList' }"> World Countries </router-link>
      <v-icon icon=" mdi-earth"></v-icon>
    </v-toolbar-title>
    <v-text-field :elevation="0" density="compact" label="Search" append-inner-icon="mdi-magnify" class="mr-10"
      single-line hide-details>
    </v-text-field>
    <v-spacer></v-spacer>
  </v-app-bar>

  <v-navigation-drawer permanent :elevation="0" v-model="drawer" location="left" class="border-0">
    <v-list class="" nav>
      <v-btn variant="text" class="d-flex align-center justify-start rounded-lg" color="bg-dark" width="300" height="40">
        <img src="@/assets/icons/home.svg">
        <v-text class="ml-5 text-body-1">Home</v-text>
      </v-btn>
      <v-btn variant="text" class="d-flex align-center justify-start rounded-lg" color="bg-dark" width="300" height="40">
        <img src="@/assets/icons/explore.svg">
        <v-text class="ml-5 text-body-1">Explore</v-text>
      </v-btn>
      <v-btn variant="text" class="d-flex align-center justify-start rounded-lg" color="bg-dark" width="300" height="40">
        <img src="@/assets/icons/shorts.svg"><v-text class="ml-5 text-body-1">Shorts</v-text></v-btn>
      <v-divider class="ml-1 mt-4 mb-4"></v-divider>
      <v-btn  variant="text"
        class="d-flex align-center justify-start rounded-lg" color="bg-dark" width="300" height="40">
        <img src="@/assets/icons/subscription.svg" class=""><v-text class=" ml-5 text-body-1">Asia</v-text></v-btn>
      <v-btn variant="text" class="d-flex align-center justify-start rounded-lg" color="bg-dark" width="300" height="40">
        <img src="@/assets/icons/library.svg"><v-text class="ml-5 text-body-1">Europe</v-text></v-btn>
      <v-btn variant="text" class="d-flex align-center justify-start rounded-lg" color="bg-dark" width="300" height="40">
        <img src="@/assets/icons/history.svg"><v-text class="ml-5 text-body-1">America</v-text></v-btn>
      <v-btn variant="text" class="d-flex align-center justify-start rounded-lg" color="bg-dark" width="300" height="40">
        <img src="@/assets/icons/watchlater.svg"><v-text class="ml-5 text-body-1">Africa</v-text></v-btn>
      <v-btn variant="text" class="d-flex align-center justify-start rounded-lg" color="bg-dark" width="300" height="40">
        <img src="@/assets/icons/laked.svg"><v-text class="ml-5 text-body-1">Australia</v-text></v-btn>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppBar',
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
