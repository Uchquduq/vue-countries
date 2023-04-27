<template>
  <div>
    <br>
    <v-img :src="country.flags.svg">
    </v-img>
    <br>
    <p>Official name: {{ country.name.official }} </p>
    <p> Capital: {{ country.capital[0] }}</p>
    <p>Map: <a :href="country.maps.googleMaps" target="_blank"> Google Maps</a></p>

    <p>Area: {{ country.area }} km<sup>2</sup></p>
    <p>Borders: <span v-for="lang in country.borders" :key="lang"> {{ lang }} </span></p>
    <p>Timezones: <span v-for="lang in country.timezones" :key="lang"> {{ lang }} </span></p>
    <p>Continent: <span v-for="lang in country.continents" :key="lang"> {{ lang }} </span></p>
    <p>Languages: <span v-for="lang in country.languages" :key="lang"> {{ lang }} </span></p>
    <p>Coat Of Arms:
      <v-img :src="country.coatOfArms.svg">
      </v-img>

    </p>
  </div>
</template>

<script>
export default {
  name: "CountryDetails",
  props: ["country"],
};
</script>

<style scoped>
span {
  margin: 5px;
}
</style>
