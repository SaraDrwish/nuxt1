<template>
  <div class="orange pa-8 rounded">
    <v-card class="pa-4 ">
      <v-card-title class="headline">My Skills
      </v-card-title>
      <v-card-text class="orange--text">
        <div class="px-12 mx-12">
          HTML
           <v-progress-linear
            value="95"
            height="6"
            striped
            color="deep-orange"
            class="my-5"
          ></v-progress-linear>

           CSS
           <v-progress-linear
            height="6"
            value="92"
            striped
            color="purple lighten-2"
            class="my-5"
          ></v-progress-linear>

          JavaScript
         <v-progress-linear
            color="light-green darken-3"
            height="6"
            value="80"
            striped
            class="my-5"
          ></v-progress-linear>

          BootStrap

          <v-progress-linear
            color="blue"
            height="6"
            value="60"
            striped
            class="my-5"
          ></v-progress-linear>

          Scss
          <v-progress-linear
            value="88"
            height="6"
            striped
            color="orange"
            class="my-5"
          ></v-progress-linear>

          Tailwind css

          <v-progress-linear
            height="6"
            value="79"
            striped
            color="pink"
            class="my-5"
          ></v-progress-linear>

          Vuetify
          <v-progress-linear
            color="light-green darken-1"
            height="6"
            value="70"
            striped
            class="my-5"
          ></v-progress-linear>

          Vue js
          <v-progress-linear
            color="blue lighten-3"
            height="6"
            value="60"
            striped
            class="my-5"
          ></v-progress-linear>

          Nuxt js 2
          <v-progress-linear
            value="50"
            height="6"
            striped
            color="deep-orange"
            class="my-5"
          ></v-progress-linear>

          React js
          <v-progress-linear
            value="40"
            height="6"
            striped
            color="purple darken-2"
            class="my-5"
          ></v-progress-linear>

          PhP
          <v-progress-linear
            value="20"
            height="6"
            striped
            color="pink"
            class="my-5"
          ></v-progress-linear>

          Github
          <v-progress-linear
            value="80"
            height="6"
            striped
            color="blue-grey"
            class="my-5"
          ></v-progress-linear>

          GitLab
          <v-progress-linear
            value="60"
            height="6"
            striped
            color="yellow"
            class="my-5"
          ></v-progress-linear>


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
