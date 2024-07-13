<template>
  <div class="orange pa-8 rounded">
    <v-card class="pa-4 ">
      <v-card-title class="headline">My Skills
      </v-card-title>
      <v-card-text class="orange--text">
        <div class="px-12 mx-12">
          HTML
          <hr class="my-5">
          CSS
          <hr class="my-5">
          JavaScript
          <hr class="my-5">
          BootStrap
          <hr class="my-5">
          Scss
          <hr class="my-5">
          Tailwind css
          <hr class="my-5">
          Vuetify
          <hr class="my-5">
          Vue js
          <hr class="my-5">
          Nuxt js 2
          <hr class="my-5">
          React js
          <hr class="my-5">
        </div>
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
