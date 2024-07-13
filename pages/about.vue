<template>
  <v-row>
    <v-col class="my-4 orange text-center">
      <v-card class="pa-4 ">
      <img
      src="/v.png"
      alt="Vuetify.js"
      class="mb-5"
      >
      <v-card-title class="headline">About Me
      </v-card-title>
      <v-card-text>
      <blockquote class="blockquote">
      &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash; Sara Darwish</em>
          </small>
        </footer>
      </blockquote>
        <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/projects"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'about'
}
</script>
