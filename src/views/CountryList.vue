<template>
  <div>
    <AppBar></AppBar>
    <v-main>
      <v-container>
        <v-app-bar :elevation="0" class="mt-0 mb-8">
          <v-slide-group :show-arrows="false">
            <v-slide-group-item v-for="   n    of    alphabet   " :key="n" v-slot="{ isSelected, toggle }">
              <v-btn density="comfortable" class="text-subtitle-2 ma-2 font-weight-medium" variant="tonal"
                :color="isSelected ? 'black' : undefined" @click="toggle">
                {{ n }}
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </v-app-bar>
        <v-row>
          <v-col v-for="country in countries" :key="country.cca3" cols="3">
            <CountryCard :country="country" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import CountryCard from "@/components/CountryCard.vue"
import AppBar from "@/components/AppBar.vue"

export default {
  components: { CountryCard, AppBar },
  data: () => ({
    alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  }),
  computed: {
    countries() {
      return this.$store.state.countries
    }
  },
  created() {
    this.$store.dispatch('fetchCountries').catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
}
</script>