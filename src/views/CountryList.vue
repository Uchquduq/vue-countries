<template>
  <v-col v-for="country in countries" :key="country.cca3" cols="3">
    <CountryCard :country="country" />
  </v-col>
</template>

<script>
import CountryCard from "@/components/CountryCard.vue"

export default {
  components: { CountryCard },
  data: () => ({
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