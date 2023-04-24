<template>
  <v-card :elevation="0" class="mx-auto" max-width="400" height="200">
    <v-img class=" rounded-lg align-end text-white" :src="country.flags.svg" height="150" cover>
    </v-img>
    <v-card-actions>
      <v-list-item class="w-100">
        <v-list-item-title>{{ country.flag }} {{ country.name.official }}</v-list-item-title>
      </v-list-item>
    </v-card-actions>
  </v-card>
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