<template>
  <div class="orange pa-8 rounded">
    <v-card class="pa-4 ">
      <v-card-title class="headline">My Skills
      </v-card-title>
      <v-card-text class="orange--text">
        HTML
        <hr class="my-3">
        CSS
        <hr class="my-3">
        JavaScript
        <hr class="my-3">
        BootStrap
        <hr class="my-3">
        Scss
        <hr class="my-3">
        Tailwind css
        <hr class="my-3">
        Vuetify
        <hr class="my-3">
        Vue js
        <hr class="my-3">
        Nuxt js 2
        <hr class="my-3">
        React js
        <hr class="my-3">
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey lighten-2"
          class="orange--text"
          nuxt
          to="/contact"
        >
          Continue
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    name:"skills"

  }
</script>
