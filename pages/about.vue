<template>
  <v-row>
    <v-col class="my-4 orange text-center">
      <v-card class="pa-4 ">
      <v-card-title class="headline">About Me
      </v-card-title>
      <v-card-text>
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
</template>

<script>
export default {
  name: 'about'
}
</script>
