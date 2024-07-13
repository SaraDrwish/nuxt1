<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <div class="">
        <v-card>
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
      </div>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash; Sara Darwish</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'about'
}
</script>
