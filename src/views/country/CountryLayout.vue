<template>
  <div>
    <div class="history">
      <button @click="$router.go(-1)">&#60; back</button>
    </div>
    <div v-if="country">
      <h1>{{ country[0].name.common }}</h1>
      <router-view :country="country[0]"></router-view>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  name: "CountryDetails",
  props: ["id"],
  data: () => ({
    country: null,
  }),
  created() {
    EventService.getCountry(this.id)
      .then((response) => (
        this.country = response.data
      ))
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "country" },
          });
        } else {
          this.$router.push({ name: "NetworkError" });
        }
      });
  },
};
</script>

<style>
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;


}

router-link-exact-active {
  color: #42b983;
}

.history button {
  margin: 3px;
  padding: 4px;
  background: #42b983;
  min-width: 80px;
}

button:hover {
  background: #4ace93;
}
</style>
