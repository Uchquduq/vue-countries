<template>
  <router-link class="d-flex justify-center flex-column "
    :to="{ name: 'CountryDetails', params: { id: country.name.official } }" :elevation="0" max-width="400" height="200">
    <p class="text-h1 text-center"> {{ country.flag }}</p>
    <p class="text-h6 text-center"> {{ country.name.official }}</p>
  </router-link>
</template>


<script>
export default {
  data: () => ({
  }),
  props: {
    country: {
      type: Object
    }
  }
}
</script>