<template  justify="center" rounded algin="center">
    <v-img
      :src='require("../assets/img/aaannn1.png")'
      lazy-src="../assets/img/aaannn1.png"
      class="rounded "
      gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.6)"
      max-height="630"
      rounded
    >
  <v-row rounded >
    <!-- max-height="300" -->
  <!-- <v-row justify="center" > -->
    <v-col class="ma-2 orange text-center ">
      <v-card class="pa-4 ">
      <v-card-title class="headline">About Me
      </v-card-title>
      <v-card-text>
      <!-- <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template> -->
      <blockquote class="blockquote">
      &#8220;
        <p>🚀 I am a Developer , A Frontend . <br>
          🚀 A seasoned web developer crafting pixel-perfect, visually stunning websites. <br>
          🚀 Armed with a computer science degree, I excel in cutting-edge technologies like React and Vue. <br>
          🚀 From innovative concepts to user-friendly websites, I turn visions into reality. <br>
          🚀 Explore my digital realm, where each line of code paints the canvas of web possibilities. <br> </p>
          &#8221;
        <footer>
          <small>
            <em>&mdash; Sara Darwish</em>
          </small>
        </footer>
      </blockquote>
      <!-- </v-img> -->
        <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="grey lighten-2"
            class="orange--text"
            nuxt
            to="/projects"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
</v-row>
 </v-img>
</template>

<script>
export default {
  name: 'about'
}
</script>
